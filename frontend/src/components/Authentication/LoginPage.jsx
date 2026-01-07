
import React, { useState } from 'react'
import { VStack } from '@chakra-ui/react'
import './Auth.css'

export default function LoginPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
   
  
   
  
    const submitHandler = () => {
      
    }
    const guestHandler = () => {
      
    }
  return (
     <VStack spacing='5px' >
          <form action="" id='signup'>
  
            <label htmlFor="email">email: </label>
            <input className='singupInput' type="email" placeholder='Enter Your email' name='email' required onClick={(e) => setEmail(e.target.value)} /> <br />
     
            <label htmlFor="password">Password: </label>
            <input className='singupInput' type="password" placeholder='Enter Your password' name='password' required onClick={(e) => setPassword(e.target.value)} /><br /> <br />
        
          
            <div id='signupDiv'>
              <button id='signbtn' onClick={submitHandler}>LogIn</button>
            </div>
            <div id='signupDiv'>
          <button id='guest' onClick={guestHandler}>Get guest user credential</button>
            </div>
          </form>
        </VStack>
  )
}
