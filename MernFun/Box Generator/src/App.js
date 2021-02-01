import './App.css';
import React, { useState } from 'react';
import MessageFormComponent from './components/MessageFormComponent';
import MessageDisplayComponent from './components/MessageDisplayComponent';
    
    
function App() {
    const [currentMsg, setCurrentMsg] = useState([]);

    const youveGotMail = ( newMessage ) => {
      setCurrentMsg( currentMsg.concat(newMessage));
  }

    
    return (
        <>
            <MessageFormComponent onNewMessage={ youveGotMail } />
            <MessageDisplayComponent message={ currentMsg } />
        </>
    );
}


    
export default App;