import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ChatPage() {

    const [chats, setChats] = useState([]);

    const fetchChat = async () => {
        try {

            const res = await axios.get('http://localhost:3000/getdata')
            console.log(res.data)

            setChats(res.data)

           
            
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        fetchChat();
    }, [])


  return (
    <div>
          <h1>Chats Page</h1>
          {chats.map((chat) => (
              <p key={chat._id}>{chat.chatName }</p>
          ))}
    </div>
  )
}
