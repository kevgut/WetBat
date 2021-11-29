import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function UpdateUser() {
    const [idUser, setID] = useState(null);
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'));
        setPhoneNumber(localStorage.getItem('Phone Number'))
    }, []);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const updateAPIData = () => {
        axios.put('https://61a321ec014e1900176deac4.mockapi.io/user/'+ idUser, {
            name,
            lastName,
            email,
            phoneNumber
        })
        console.log(idUser);
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
            <input placeholder='First Name' value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Email</label>
            <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Phone Number</label>
            <input placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            </Form.Field>
            <Button onClick={updateAPIData} type='submitUser'>Update User</Button>
            </Form>
        </div>    
    )


}