


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Signinotp.css'; // Import your CSS file
import register from '../assets/images/register.png'
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className="form-container">
            <img src={register}alt='' className='registerimg'/>
            <div className="login-box">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Number</Form.Label>
                    <Form.Control type="Your Number" placeholder="Enter your number" />

                    </Form.Group>
                    <Button variant="primary" type="submit" className='button'>
                        Send OTP
                    </Button>

                 
                  
                      
                  <Link to='/Login'>
                    <Form.Group className="mb-3 text-muted " controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Login with password instead" className='otp' />
                    </Form.Group>
                  </Link>
                  
               
                 
                </Form>
            </div>
        </div>
    );
}

export default Login;
