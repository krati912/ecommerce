import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

const SignIn = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')

  const { signIn } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      console.log(await signIn(email, password))
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
        <h1>Sign-In</h1>
        <p>New user- <Link to='/signup'>Sign Up</Link></p>
      </div>
      <form>
        <div>
          <label style={{margin:5}}>Email</label>
          <input style={{margin:5}} type='email'  onChange={ (e)=> setEmail(e.target.value) }/>
        </div>
        <div>
          <label style={{margin:5}}>Password</label>
          <input style={{margin:5}} type='password'  onChange={ (e)=> setPassword(e.target.value) }/>
        </div>
        <div><button type='submit'  onClick={handleSubmit}>Sign In</button></div>
      </form>
    </>
  )
}

export default SignIn