import {useState, useEffect, useRef} from 'react'
import Message from './Message';


const Chat = () => {
    const scroll =useRef()
  return (
    <>
      <main className="chat">
        <Message/>
      </main>
      {/* send message component */}
      <span ref={scroll}></span>
    </>
  );
}

export default Chat