import React from 'react'

const NumberComponent = (props) => {
    if (isNaN(props.id)) {
        return 'Not a Number!';
    }
    

    
    return (
        <div>
            
            <h2>The Number is : {props.id}</h2>
        </div>
    )
}

export default NumberComponent
