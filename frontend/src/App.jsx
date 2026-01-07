
import './App.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import ChatPage from './components/ChatPage'


function App() {


  return (
    <>
     <div className="app">
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/chats' element={<ChatPage/>} />
        </Routes>

      </div>

    </>
  )
}

export default App
