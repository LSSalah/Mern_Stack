import React from 'react';
    
    
const FirstComponent = props => {
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.color }</p>
        </div>
    );
}
    
export default FirstComponent;