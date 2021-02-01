import React, { useState } from 'react';
    
    
const MessageFormComponent = (props) => {
    const [msg, setMsg] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage( msg );
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Set Color</h1>
            <textarea 
                rows="4"
                cols="50"
                placeholder="Enter your Color here"
                onChange={ (e) => setMsg(e.target.value )}
                value={ msg }
            ></textarea>
            <input type="submit" value="Send Color" />
        </form>
    );
};
    
export default MessageFormComponent;