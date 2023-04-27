import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css'
    ;
import { Link } from 'react-router-dom';
const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    }

    return (
        <div className='container mt-5'>
            <div className='login-container'>
                <h2 className='text-right mb-4'>Please Login</h2>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="prosen"/>
                    </Form.Group>
                    <div className='mb-3'>Don't have account? <Link to="/register">Register</Link></div>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>

                </Form>
            </div>
        </div>
    );
};

export default Login;