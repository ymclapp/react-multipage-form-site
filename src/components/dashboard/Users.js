import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const API = 'http://localhost:1337/api/users';


export default function Users() {

    const [users, setUsers] = useState('');

    useEffect(() => {
        getUsersWithFetch();
    }, []);

    const getUsersWithFetch = async () => {
        const response = await fetch(API);
        const jsonData = await response.json({});
        setUsers(jsonData);
        console.log(jsonData);
    };

    

    return (
        <>
        <Container className='showUsers mt-4'>
            {/* <h3>This will show the raw data for all restaurants - curly brace JSON.stringify(users.data) curly brace and use API = http://localhost:1337/api/users</h3>
            <p>{JSON.stringify(users)}</p> */}
            <ul> 
                {users &&
                users.map((user, index) =>
            <li key={index}>User Id#{user.id}:  User's Name:  {user.firstName} {user.lastName} Username:  {user.username}, User Email:  {user.email}</li>)}
            </ul>
        </Container >
        </>

    );
}