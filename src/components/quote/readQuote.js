import React, { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function ReadQuote() {
    const setData = (data) => {
        let{idQuote,
            qname,
            status,
            departCity,
            departDate,
            destCity,
            returnDate,
            people,
            transp} = data;
        localStorage.setItem('ID', idQuote);
        localStorage.setItem('Quote Name', qname);
        localStorage.setItem('Status', status);
        localStorage.setItem('Departure Date', departDate);
        localStorage.setItem('Departure City', departCity);
        localStorage.setItem('Destination City', destCity);
        localStorage.setItem('Return Date', returnDate);
        localStorage.setItem('People', people);
        localStorage.setItem('Transportation', transp);

    }
    const getData = () => {
        axios.get('https://61a321ec014e1900176deac4.mockapi.io/quote')
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }
    const onDelete = (idQuote) => {
        axios.delete('https://61a321ec014e1900176deac4.mockapi.io/quote/' + idQuote)
        .then(() => {
            getData();
        })
    }
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {axios.get('https://61a321ec014e1900176deac4.mockapi.io/quote').
        then((response) => {
            setAPIData(response.data);
        })
    }, [])
    return (
        <div>
            <h3>Quote</h3>
            <Table singleLine>
                <Table.Header>
                    
                        <Table.HeaderCell>ID Quote</Table.HeaderCell>
                        <Table.HeaderCell>Quote Name</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Departure City</Table.HeaderCell>
                        <Table.HeaderCell>Departure Date</Table.HeaderCell>
                        <Table.HeaderCell>Destination City</Table.HeaderCell>
                        <Table.HeaderCell>Return Date</Table.HeaderCell>
                        <Table.HeaderCell>People</Table.HeaderCell>
                        <Table.HeaderCell>Transportation</Table.HeaderCell>
                    
                </Table.Header>
                <Table.Body>
                    {APIData.map((data) => {
                        return(
                            <Table.Row>
                                <Table.Cell>{data.idQuote}</Table.Cell>
                                <Table.Cell>{data.qname}</Table.Cell>
                                <Table.Cell>{data.status}</Table.Cell>
                                <Table.Cell>{data.departCity}</Table.Cell>
                                <Table.Cell>{data.departDate}</Table.Cell>
                                <Table.Cell>{data.destCity}</Table.Cell>
                                <Table.Cell>{data.returnDate}</Table.Cell>
                                <Table.Cell>{data.people}</Table.Cell>
                                <Table.Cell>{data.transp}</Table.Cell>
                                <Link to='/updateQuote'> 
                                    <Table.Cell>
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.idQuote)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )})}

                </Table.Body>
            </Table>
        </div>
    )
}