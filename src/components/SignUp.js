import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserContext} from '../App'
import {Card, Form, Button} from 'react-bootstrap';


const SignUp = () => {
// create user for session

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')

  const { createUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      console.log(await createUser(email, password))
      navigate('/products')
    }
    catch(r){
      setError(r.message)
      console.log(r.message)
    }
  }

  return (
    <>    

        <div>
        <h1>Sign-Up</h1>
        <p>Already Have Account- <Link to='/signin'>Sign In</Link></p>
      </div>
      <Card>
        <Card.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  required onChange={ (e)=> setEmail(e.target.value) }/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  required onChange={ (e) => setPassword(e.target.value) } />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      </Form></Card.Body>
      </Card>
    </>
  )
}

export default SignUp