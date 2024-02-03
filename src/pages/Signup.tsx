// Login.js (assuming this is the name of your component file)

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Signup.css'; // Import your CSS file
import register from '../assets/images/register.png'
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className="form-container">
            <img src={register} alt='' className='registerimg'/>
            <div className="login-box">
                <Form>
                <Form.Group className='upperpart'>
                        <Form.Label className='joinget' >Join Get Doctor</Form.Label>
                        <Form.Label  className='areyouadoc'>Are you a doctor?
                        <Link to='/Signupdoc'>
                        <a href='#' className='registerasadoc' >Register here</a>
                        </Link>
                        </Form.Label>
                       
                    </Form.Group>
              <div className='lowerpart'> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter your full Name" />
                        </Form.Group>
                        <div className='country'>
                        
                <Form.Group className="mb-3">
                <Form.Label>Country code</Form.Label>
                <Form.Select
                 name="countryCode"
                >
               <option value="+91">+91 (India)</option>

               </Form.Select>
               </Form.Group>

                    <Form.Group className="input" controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="phone" placeholder="Enter Phone number" />

                    </Form.Group>
                    </div>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                
                    <Form.Group className="mb-3 text-muted " controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="By signing in, your agree to our terms and conditions" className='otp' />
                    </Form.Group>
                
                  <Link to='/normalregotp'>
                    <Button variant="primary" type="submit" className='button'>
                        Send OTP
                    </Button>
                    </Link>
                    </div>
                </Form>

                </div>
            </div>
            
     
       
    );
}

export default Login;



