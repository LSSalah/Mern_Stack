import React, { Component } from 'react';
    
    
class FirstComponent extends Component {
    render() {
    const {firstName , lastName , age} = this.props
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {this.props.color}</p>
            </div>
        );
    }
}
    
export default FirstComponent;