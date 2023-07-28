import React from 'react'
import "./ChatMessage.scss"
import { Avatar } from '@mui/material'

const ChatMessage = () => {
  return (
    <div className='message'>
        <Avatar />
        <div className='messageInfo'>
            <h4>
               AkaiKitune
               <span className='messageTimestamp'> 2023/7/24</span>
            </h4>

            <p>メッセージ本文</p>
        </div>
    </div>
  )
}

export default ChatMessage