import React, { useState } from 'react'
import { VStack } from '@chakra-ui/react'
import './Auth.css'

export default function SignupPage() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState()

  const postDetails = () => {

  }

  const submitHandler = () => {
    
  }
  return (
    <VStack spacing='5px' >
      <form action="" id='signup'>
        <label htmlFor="username">Name: </label>
        <input className='singupInput' type="text" placeholder='Enter Your name' name='username' required  onClick={(e) => setName(e.target.value)}/> <br /><br />

        <label htmlFor="email">email: </label>
        <input className='singupInput' type="email" placeholder='Enter Your email' name='email' required onClick={(e) => setEmail(e.target.value)} /> <br /><br />
 
        <label htmlFor="password">Password: </label>
        <input className='singupInput' type="password" placeholder='Enter Your password' name='password' required onClick={(e) => setPassword(e.target.value)} /><br /> <br />
    
        <label htmlFor="Cpassword">Confirm Password: </label>
        <input className='singupInput' type="password" placeholder='Confirm password' name='Cpassword' required onClick={(e) => setConfirmPassword(e.target.value)} /> <br /> <br />


        <label htmlFor="dp">Upload your Picture </label>
        <input className='pic' type="file" placeholder='Upload image' name='dp' accept='image/*' onChange={(e) => postDetails(e.target.files[0])} /> <br /> <br />



        <div id='signupDiv'>
          <button id='signbtn' onClick={submitHandler}>SignUP</button>
        </div>
      </form>
    </VStack>
  )
}
