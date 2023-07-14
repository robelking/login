/*
import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contr-dom'ext/AuthContext'
import { Link } from 'react-route



export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError("Failed to reset password")
        }

        setLoading(false)
    }




    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Reset Password</h2>

                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>


                        <Button disabled={loading} className='w-100 mt-4' type='submit'>Reset</Button>
                    </Form>

                    <div className='w-100 text-center mt-3'>
                        <Link to='/'>Login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}
*/

import React, { useState } from 'react';
import { auth } from '../firebase'
import { Form, Button, Alert, Card } from 'react-bootstrap'
import { sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';

export const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();

        try {
            await sendPasswordResetEmail(auth, email)
            setSuccessMessage('Password reset email sent. Please check your inbox.');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Reset Password</h2>
                    {successMessage && <Alert variant="success">{successMessage}</Alert>}
                    {errorMessage && <Alert variant="success">{errorMessage}</Alert>}
                    <Form onSubmit={handleResetPassword}>
                        <div>
                            <label className="text-center mb-3" htmlFor="email">Email:</label>
                            <input
                                className=''
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <Button className='w-100 mb-4' type="submit">Reset Password</Button>
                    </Form>
                    <div className='w-100 text-center mt-2'>
                        <Link to="/signup">Sign Up</Link> or
                        <Link to='/'> Log In</Link>
                    </div>

                </Card.Body>
            </Card>
        </>
    );
};


