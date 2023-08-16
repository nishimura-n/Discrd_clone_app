import React, { useState } from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader'
import { AddCircleOutline, CardGiftcard, EmojiEmotions, Gif } from '@mui/icons-material'
import ChatMessage from './ChatMessage'
import { useAppSelector } from '../../app/hooks'
import { CollectionReference, DocumentData, DocumentReference, addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase'
import useSubCollection from '../../hooks/useSubCollection'

function Chat() {
  const [inputText, setInputText] = useState<string>("");
  const channelId = useAppSelector((state) => state.channel.channelId);
  const channelName = useAppSelector((state) => state.channel.channelName);
  const user = useAppSelector((state) => state.user.user);
  const {subDocuments: messages} = useSubCollection("channels", "messages");

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault();

    //channelsコレクションの中にあるmessagesコレクションの中にメッセージ情報を入れる。
    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      "channels",
      String(channelId),
      "messages"
    );

    const docRef: DocumentReference<DocumentData> = await addDoc(collectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user,
    });
    setInputText("")
  };

  return (
    <div className='chat'>
      {/* chatHeader */}
      <ChatHeader channelName={channelName} />
      {/* chatMessage */}
      <div className='chatMessage'>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.message} timestamp={message.timestamp} user={message.user}/>
        ))}
        {/* <ChatMessage />
        <ChatMessage />
        <ChatMessage /> */}
      </div>
      {/* chatInput */}
      <div className='chatInput'>
        <AddCircleOutline />
        <form>
          <input type="text" placeholder='#udemyへメッセージを送信' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} value={inputText}></input>
          <button type="submit" className='chatInputButton' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}>
            送信
          </button>
        </form>

        <div className='chatInputIcons'>
          <CardGiftcard />
          <Gif />
          <EmojiEmotions />
        </div>
      </div>
    </div>
  )
}

export default Chat