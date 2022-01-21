import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';


const cookieName = 'auth';

const loginApi = 'http://localhost:1337/api/auth/local'

export const AuthContext = createContext();

export default function useAuth() {
    const auth = useContext(AuthContext);
    if (!auth) throw new Error('You forgot AuthProvider!');
    return auth;
}

export function AuthProvider(props) {
    console.log(`Checking for ${cookieName} cookie`);
    const cookieToken = cookie.load(cookieName);
    const cookieUser = processToken(cookieToken);
    const [user, setUser] = useState(cookieUser);

    const hasPermission = useCallback(function (permission) {
        if (!user) return false;

        //No specific permission requested, but they are signed in
        if (!permission) return true;

        //Asked for permission and user has none
        if (!user.permission) return false;

        //Can user do the specific thing?
        return user.permission.includes(permission);
    }, [user]);

    const auth = useMemo(() => {
        console.log('New auth state!');

        return ({
            user,

            hasPermission,
            login,
            logout,
        });
    }, [user, hasPermission]);

    useEffect(() => {
        //Load token/user from cookie
    }, []);

    useEffect(() => {
        //Set or remove cookie
    }, [user])

    async function login(loginData) {
        //console.log(loginData);

        const result = await fetch(`${loginApi}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'applicaton/json',
            },
            body: JSON.stringify(loginData),
        });

        const resultBody = await result.json();
        console.log(resultBody)

        if (result.ok) {
            let user = processUser(resultBody)
            setUser(user);
        } else {
            console.warn('auth failed', resultBody);
        }
        //console.log(resultBody)
    }
    function logout() {
        cookie.remove(cookieName, { path: '/' });
        setUser(null);
    }

    return (
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    )
}

function processUser(user) {
    if (!user) return null;

    try {
        const payload = jwt.decode(user.token);
        if (payload) {
            //Token looks legit, so let's save it
            cookie.save(cookieName, user.token, { path: '/' });

            //Copy everything from the payload into user
            Object.assign(user, payload);

            console.log(user);
            return user;
        }
    }
    catch (e) {
        console.warn(e);
    }
    return null;
}

function processToken(token) {
    if(!token)
    return null;
    try {
        const payload = jwt.decode(token);
        if(payload) {
            let user = {
                email:  payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
                userId:  payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
                username:  payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
                token,
                ...payload
            }
            console.log(user);
            return user;
        }
        return null;
    }
    catch(e) {
        console.warn(e);
        return null;
    }
}


