import React from 'react'

const HelloComponent = (props) => {
    if (!isNaN(props.name)) {
        return 'Not a String!';
    }
    
    return (
        <div style={{background: props.colory }}>
            <h2 style={{color: props.colorx }}>Hello {props.name}</h2>
        </div>
    )
}

export default HelloComponent
