import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';
import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    console.log(from);
    
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('');

        if(password.length < 6){
            setError('Password must be 6 characters');
            return
        }
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error => {
            setError(error.message);
        });
    }

    return (
        <div className='container mt-5'>
            <div className='login-container'>
                <h2 className='text-right mb-3'>Please Login</h2>
                { error && <div className='alert alert-danger mb-'>{error}</div> }
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" required/>
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