import react from 'react'
import './loginSignup.css'
import email_icon from '../../assets/images/email.png'
import password_icon from '../../assets/images/password.png'
import person_icon from '../../assets/images/person.png' 
import Form from 'react-bootstrap/Form';  

function FormGroupExample() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    );
  }
const LoginSignup = () => {
    return (
        <div>
            <div className='container'>
                <div className='header'>
                    <div className='text'>Sign Up</div>
                    <FormGroupExample/>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup