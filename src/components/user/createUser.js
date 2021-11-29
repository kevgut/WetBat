import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function CreateUser() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const postData = () => {
        axios.post('https://61a321ec014e1900176deac4.mockapi.io/user', {
            name,
            lastName,
            email,
            phoneNumber
        })
        console.log(name);
        console.log(lastName);
        console.log(email);
        console.log(phoneNumber);
    }
    return (
        <div>
            <Form className="create-form">
            <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' onChange={(e) => setName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Email</label>
            <input placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Phone Number</label>
            <input placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)}/>
            </Form.Field>
            <Button onClick={postData} type='submitUser'>Create User</Button>
            </Form>
        </div>    
    )


}