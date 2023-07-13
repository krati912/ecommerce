import React from 'react'; 
import { useRef } from 'react';
import {Card, Form, Button} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
function Register(){
        const emailRef = useRef()
        const passwordRef = useRef()
        const passwordConfirmRef = useRef()
        const {register} = useAuth()

        function handleSubmit(e){
          e.preventDefault()
          register(emailRef.current.value,passwordRef.current.value)
        }
    return(
        <>
        <Card>
      <Card.Body><h2>Sign Up</h2></Card.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref = {emailRef} required />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref = {passwordRef} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="PasswordConfirm">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control type="password" placeholder="Password Confirmation" ref = {passwordConfirmRef} required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <h2>Already have an account? Login in</h2>
    </Form>
    </Card>
            
            </>
    );
    
}
export default Register