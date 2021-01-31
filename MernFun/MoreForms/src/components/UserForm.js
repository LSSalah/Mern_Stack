import React, { useState } from  'react';
import { Button , Form , Row , Col } from 'react-bootstrap';



    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState(false);
    const [pwError, setPwError] = useState("");
    const [fError, setfError] = useState("");
    const [lError, setlError] = useState("");
    const [eError, seteError] = useState("");



   
  
    
    function createUser(e) {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);

    }
    const handlePw = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
        setPwError("Password is required!");
    } else if(e.target.value.length < 8) {
        setPwError("Password must be 8 characters or longer!");
    }
    
}
const handlePwc = (e) => {
    setConfirmpassword(e.target.value);
    setConfirmpassword( true )
    if(e.target.value.length < 1) {
    setPwError("Confirm Password is required!");
} else if(e.target.value !== password) {
    setPwError("Password must match!");
}

}
const handleFn = (e) => {
    setFirstname(e.target.value);
    if(e.target.value.length < 1) {
        setfError("First Name is required!");
    } else if(e.target.value.length < 2) {
        setfError("First Name must be more than 2 characters");
    }
    
}
const handleLn = (e) => {
    setLastname(e.target.value);
    if(e.target.value.length < 1) {
        setlError("Last Name is required!");
    } else if(e.target.value.length < 2) {
        setlError("Last Name must be more than 2 characters");
    }
    
}
const handleE = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 1) {
        seteError("Email is required!");
    } else if(e.target.value.length < 5) {
        seteError("Email must be more than 5 characters");
    }
    
}
    
    
    return(
    <Col sm="10">
        {
                    pwError ?
                    <p style={{color:'red'}}>{ pwError }</p> :
                    ''
                }
                {
                    fError ?
                    <p style={{color:'red'}}>{ fError }</p> :
                    ''
                }
                {
                    lError ?
                    <p style={{color:'red'}}>{ lError }</p> :
                    ''
                }
                {
                    eError ?
                    <p style={{color:'red'}}>{ eError }</p> :
                    ''
                }
                
    
                
        <Form  onSubmit={ createUser }>
            <Form.Group as={Row} controlId="formBasicText">
            <Col sm="3">
                <Form.Label>First Name </Form.Label> 
                <Form.Control  type="text" placeholder="First Name" onChange={ handleFn } value={ firstname } />
            </Col>
            </Form.Group>
            
            <Form.Group as={Row} controlId="formBasicText">
            <Col sm="3">
                <Form.Label >Last Name </Form.Label> 
                <Form.Control type="text" placeholder="Last Name" onChange={ handleLn } value={ lastname } />
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formBasicEmail">
            <Col sm="3">
                <Form.Label >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={ handleE } />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Col>
            </Form.Group>
            
            <Form.Group as={Row} controlId="formBasicPassword">
            <Col sm="3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={ handlePw } />
            </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicPassword">
            <Col sm="3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" onChange={ handlePwc } />
            </Col>
            </Form.Group>
            <Col sm="3">
            <p><strong>First Name :</strong> {firstname}</p>
            <p><strong>Last Name :</strong> {lastname}</p>
            <p><strong>Email :</strong> {email}</p>
            <p><strong>Password :</strong> {password}</p>
            <p><strong>Confirm Password :</strong> {confirmpassword}</p>
            <Button variant="primary" type="submit" value="Create User" >Create User</Button>
            </Col>
        </Form>
</Col>
    );
};
    
export default UserForm;