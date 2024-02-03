

import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './otpdoc.css'; // Import your CSS file
import register from '../assets/images/register.png'
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className="form-container">
            <img src={register}alt='' className='registerimg'/>
            <div className="login-box">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>We have sent OTP to you number</Form.Label>
                    <Form.Control type="Your Number" placeholder="Enter your  OTP sent to your number" />

                    </Form.Group>
                    <Button variant="primary" type="submit" className='button'>
                        Signup as Doctor
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
