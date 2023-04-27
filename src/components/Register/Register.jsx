import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    }

    return (
        <div className='container mt-5'>
            <div className='login-container'>
                <h2 className='text-right mb-4'>Please Register</h2>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Your name" name="name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="prosen" />
                    </Form.Group>
                    <div className='mb-3'>Already have account? <Link to="/login">Login</Link></div>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>

                </Form>
            </div>
        </div>
    );
};

export default Register;