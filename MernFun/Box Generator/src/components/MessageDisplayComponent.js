import React, { useState } from 'react';
    
    
const MessageDisplayComponent = (props) => {
    return (
        <>
            <h1>Current Message</h1>
            <div>{ props.message.map((item, index)=>{
                let style = {backgroundColor: item}
                return <div className="box" key={index} style = {style}></div>
            } )}</div>
        </>
    );
};
    
export default MessageDisplayComponent;