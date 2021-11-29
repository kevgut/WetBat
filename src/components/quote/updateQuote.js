import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function UpdateQuote() {
    const [idQuote, setID] = useState(null);
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setQuoteName(localStorage.getItem('Quote Name'))
        setStatus(localStorage.getItem('Status'))
        setDepartCity(localStorage.getItem('Departure City'))
        setDepartDate(localStorage.getItem('Departure Date'))
        setDestCity(localStorage.getItem('Destination City'))
        setReturnDate(localStorage.getItem('Return Date'))
        setPeople(localStorage.getItem('People'))
        setTransp(localStorage.getItem('Transportation'))

    },[])
    const [qname, setQuoteName] = useState('');
    const [status, setStatus] = useState('');
    const [departCity, setDepartCity] = useState('');
    const [departDate, setDepartDate] = useState('');
    const [destCity, setDestCity] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [people, setPeople] = useState('');
    const [transp, setTransp] = useState('');

    const updateAPIDataQ = () => {
        axios.put('https://61a321ec014e1900176deac4.mockapi.io/quote/'+ idQuote, {
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
            <input placeholder='Quote Name' value={qname} onChange={(e) => setQuoteName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Status</label>
            <input placeholder='Status' value={status} onChange={(e) => setStatus(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Departure Date</label>
            <input placeholder='Departure Date' value={departDate} onChange={(e) => setDepartDate(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Departure City</label>
            <input placeholder='Departure City' value={departCity} onChange={(e) => setDepartCity(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Destination City</label>
            <input placeholder='Destination City' value={destCity} onChange={(e) => setDestCity(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Return Date</label>
            <input placeholder='Return Date' value={returnDate} onChange={(e) => setReturnDate(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>People</label>
            <input placeholder='People' value={people} onChange={(e) => setPeople(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Transportation</label>
            <input placeholder='Transportation' value={transp} onChange={(e) => setTransp(e.target.value)}/>
            </Form.Field>
            <Button onClick={updateAPIDataQ} type='submitQuote'>Update Quote</Button>
            </Form>
        </div>    
    )


}