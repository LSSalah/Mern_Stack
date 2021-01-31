import React, { useState } from  'react';
import { Button , Form , Row , Col , column} from 'react-bootstrap';



    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

   
  
    
    function createUser(e) {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    }
    
    return(
    <Col sm="10">
        <Form  onSubmit={ createUser }>
            <Form.Group as={Row} controlId="formBasicText">
            <Col sm="3">
                <Form.Label>First Name </Form.Label> 
                <Form.Control  type="text" placeholder="First Name" onChange={ (e) => setFirstname(e.target.value) } value={ firstname } />
            </Col>
            </Form.Group>
            
            <Form.Group as={Row} controlId="formBasicText">
            <Col sm="3">
                <Form.Label >Last Name </Form.Label> 
                <Form.Control type="text" placeholder="Last Name" onChange={ (e) => setLastname(e.target.value) } value={ lastname } />
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formBasicEmail">
            <Col sm="3">
                <Form.Label >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={ (e) => setEmail(e.target.value) } />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Col>
            </Form.Group>
            
            <Form.Group as={Row} controlId="formBasicPassword">
            <Col sm="3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={ (e) => setPassword(e.target.value) } />
            </Col>
            </Form.Group>
            
            <Form.Group as={Row} controlId="formBasicPassword">
            <Col sm="3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" onChange={ (e) => setConfirmpassword(e.target.value) } />
            </Col>
            </Form.Group>
            <Col sm="2">
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