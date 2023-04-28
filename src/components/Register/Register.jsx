import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setError('');
        if(password !== confirm){
            setError('Please give same password');
            return
        }
        else if(password.length < 6){
            setError('Password must be 6 characters');
            return
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error => {
            console.log(error.message);
        });

    }

    return (
        <div className='container mt-5 mb-5'>
            <div className='login-container'>
                <h2 className='text-right mb-3'>Please Register</h2>
                { error && <div className='alert alert-danger mb-'>{error}</div> }
                <Form onSubmit={handleRegister}>

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
                        <Form.Control type="password" placeholder="Password" name="password" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" name="confirm" />
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