import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function CreateQuote() {
    const [qname, setQuoteName] = useState('');
    const [status, setStatus] = useState('');
    const [departCity, setDepartCity] = useState('');
    const [departDate, setDepartDate] = useState('');
    const [destCity, setDestCity] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [people, setPeople] = useState('');
    const [transp, setTransp] = useState('');
    const postData = () => {
        axios.post('https://61a321ec014e1900176deac4.mockapi.io/quote', {
            qname,
            status,
            departCity,
            departDate,
            destCity,
            returnDate,
            people,
            transp
        })

    }
    return (
        <div>
            <Form className="create-form">
            <Form.Field>
            <label>Quote Name</label>
            <input placeholder='Quote Name' onChange={(e) => setQuoteName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Status</label>
            <input placeholder='Status' onChange={(e) => setStatus(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Departure Date</label>
            <input placeholder='Departure Date' onChange={(e) => setDepartDate(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Departure City</label>
            <input placeholder='Departure City' onChange={(e) => setDepartCity(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Destination City</label>
            <input placeholder='Destination City' onChange={(e) => setDestCity(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Return Date</label>
            <input placeholder='Return Date' onChange={(e) => setReturnDate(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>People</label>
            <input placeholder='People' onChange={(e) => setPeople(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Transportation</label>
            <input placeholder='Transportation' onChange={(e) => setTransp(e.target.value)}/>
            </Form.Field>
            <Button onClick={postData} type='submitQuote'>Create Quote</Button>
            </Form>
        </div>    
    )


}