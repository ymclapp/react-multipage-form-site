import '../auth/login.css';
import { Redirect } from 'react-router-dom';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';


export default function Login() {

    const { login, user }= useAuth();
    
    
    function handleLoginSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const { username, password } = form.elements;

        const loginData = {
            identifier:  username.value,
            password:  password.value,
        };
        console.log(loginData);

        login(loginData);
        form.reset();
    }
    if (user) {
        return <Redirect to='/'/>
    }

    return (
        <>
        <Form className='login-form' onSubmit={handleLoginSubmit}>
            <h4 className='form-title text-center'>Log In to Continue </h4>
            <Form.Group>
                
                <FloatingLabel controlId='floatingInput1' label='Username:  ' className='loginUsername'>
                    <Form.Control type='text' name='username' />
                </FloatingLabel>

                <br />

                <FloatingLabel controlId='floatingInput2' label='Password:  ' className='loginPassword'>
                    <Form.Control type='password' name='password' />
                </FloatingLabel>
                
                <Button type='submit' className='login-button'>Log In</Button>
                <br/><br/>
                <a href='/registration'>Create Account</a>

            </Form.Group>
        </Form>
        <div>
        
        </div>
        </>
    )
}