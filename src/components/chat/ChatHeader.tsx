import React from 'react'
import "./ChatHeader.scss"
import { Help, Notifications, PeopleAlt, PushPin, Search, Send } from '@mui/icons-material'

const ChatHeader = () => {
  return (
    <div className='chatHeader'>
       <div className='chatHeaderLeft'>
        <h3>
            <span className='chatHeaderHash'>#</span>
            Udemy
        </h3>
       </div>
       <div className='chatHeaderRight'>
        <Notifications />
        <PushPin />
        <PeopleAlt />
        <div className='chatHeaderSearch'>
            <input type="text" placeholder="検索"/>
            <Search />
        </div>
        <Send />
        <Help />
       </div>
    </div>
  )
}

export default ChatHeader