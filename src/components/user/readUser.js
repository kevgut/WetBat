import React, { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function ReadUser() {
    const setData = (data) => {
        let{idUser,name,lastName,email,phoneNumber} = data;
        localStorage.setItem('ID', idUser);
        localStorage.setItem('First Name', name);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Email', email);
        localStorage.setItem('Phone Number', phoneNumber);

    }
    const getData = () => {
        axios.get('https://61a321ec014e1900176deac4.mockapi.io/user')
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }
    const onDelete = (idUser) => {
        axios.delete('https://61a321ec014e1900176deac4.mockapi.io/user/' + idUser)
        .then(() => {
            getData();
        })
    }
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {axios.get('https://61a321ec014e1900176deac4.mockapi.io/user').
        then((response) => {
            setAPIData(response.data);
        })
    }, [])
    return (
        <div>
            <h3>Users</h3>
            <Table singleLine>
                <Table.Header>
                    
                        <Table.HeaderCell>userId</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                        <Table.HeaderCell>Update User</Table.HeaderCell>
                        <Table.HeaderCell>Delete User</Table.HeaderCell>
                    
                </Table.Header>
                <Table.Body>
                    {APIData.map((data) => {
                        return(
                            <Table.Row>
                                <Table.Cell>{data.idUser}</Table.Cell>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.phoneNumber}</Table.Cell>
                                <Link to='/updateUser'> 
                                    <Table.Cell>
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.idUser)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )})}

                </Table.Body>
            </Table>
        </div>
    )
}