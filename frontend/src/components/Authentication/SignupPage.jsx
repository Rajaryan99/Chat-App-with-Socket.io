import React, { useState } from 'react'
import { VStack } from '@chakra-ui/react'
import './Auth.css'
import axios from 'axios';
import {useHistory} from 'react-router-dom'


export default function SignupPage() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState()
  const [loading, setLoading] = useState(false)
  const history = useHistory();

  const postDetails = (pics) => {
    setLoadng(true);
    if (pic === undefined) {
      alert("Please select pictures ");
      return;
    }
    
    if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
      const data = new FormData();
      data.append("file", pics);
      data.append("uploade preset", "chat-app")
      fetch('cloudinary://285843744766645:hyI7OqQY3sEKnpX3gzduFPBcPyg@dke8bcv8q', {
        method: 'post',
        body: data,
      }).then((res) => res.json())
        .then(data => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setLoading(false)
        })
      .catch
    }
    }
  
  const submitHandler = async () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("please fill all the details")
      return;
    }

    if (password !== confirmPassword) {
      alert("password doesnot match")
      return;
    }


    try {

      const config = {
        headers: {
          "content-type": "application/json"
          
        },
      }

      const { data } = await axios.post("/user", { name, email, password, pic }, config)
      alert('Registeration successful');
      localStorage.setItem('userInfo', JSON.stringify(data))
      history.push('/chats')
      
    } catch (error) {
      console.log(error)
    }
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

