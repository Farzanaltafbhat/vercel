import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'; // Import your CSS file
import register from '../assets/images/register.png'
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className="form-container">
            <img src={register}alt='' className='registerimg'/>
            <div className="login-box">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone Number/Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email/Phone number" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  
                       <a href='#' className='forgot' >Forgot password?</a>
                  <Link to='/signinotp'>
                    <Form.Group className="mb-3 text-muted " controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Login with OTP instead of password" className='otp' />
                    </Form.Group>
                    </Link>
                  <Link to='/home'>
                    <Button variant="primary" type="submit" className='button'>
                        Login
                    </Button>
                    </Link>
                </Form>
            </div>
        </div>
    );
}

export default Login;
