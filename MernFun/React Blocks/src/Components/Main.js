import React, { Component } from 'react';
import './styles.css';
import Subcontent from './SubContents';
import Advertisement from './Advertisement';

class Main extends Component{
    render(){
        return (
            <div className="main">
                <div className="con">
                    <Subcontent/>
                    <Subcontent/>
                    <Subcontent/>
                </div>
                <Advertisement/>
            </div>
        );
    }
}

export default Main;