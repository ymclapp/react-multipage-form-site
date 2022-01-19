import React from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';

import './Registration.css';

export default function Registration() {
    function handleRegistrationSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const { username, email, firstName, lastName, password } = form.elements;

        const registerData = {
            username: username.value,
            email: email.value,
            firstName: firstName.value,
            lastName: lastName.value,
            password: password.value,
        };
        console.log(registerData);

        form.reset();
    }

    return (
        <>
            <Form className='registration-form' onSubmit={handleRegistrationSubmit}>
                <h4 className='form-title text-center'>Registration Form</h4>
                <Form.Group>

                    <FloatingLabel controlId='floatingInput' label='Username:  ' className='registerUsername'>
                        <Form.Control type='text' name='username' />
                    </FloatingLabel>

                    <br />

                    <FloatingLabel controlId='floatingInput' label='Email:  ' className='registerEmail'>
                        <Form.Control type='text' name='email' />
                    </FloatingLabel>

                    <br />

                    <FloatingLabel controlId='floatingInput' label='First Name:  ' className='registerFirstName'>
                        <Form.Control type='text' name='firstName' />
                    </FloatingLabel>

                    <br />

                    <FloatingLabel controlId='floatingInput' label='Last Name:  ' className='registerLastName'>
                        <Form.Control type='text' name='lastName' />
                    </FloatingLabel>

                    <br />

                    <FloatingLabel controlId='floatingInput' label='Password:  ' className='loginPassword'>
                        <Form.Control type='password' name='password' />
                    </FloatingLabel>

                    <Button type='submit' className='register-button'>Register</Button>

                </Form.Group>
            </Form>
        </>
    )
}