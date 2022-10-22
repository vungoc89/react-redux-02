import React from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import axios from 'axios';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {fetchAllUser} from '../action/actions';

const TableUser = (props) => {

    // const [listUsers, setListUsers] = useState(); 

    const dispatch = useDispatch(); 

    const listUsers = useSelector((state) => state.user.listUsers)

    // const fetchAllUser = async() => {
    //     const res = await axios.get('http://localhost:8080/users/all'); 
    //     const data = res && res.data ? res.data : [];
    //     setListUsers(data); 
    //   }
    
      useEffect(() => {
        // fetchAllUser();
        dispatch(fetchAllUser());
      }, []);

      const handleDeleteUser = (user) => {
        console.log(user); 
      }
    return (
        <>
            <Container>
                <hr/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                            return(
                                <tr key={`users-${index}`}>
                                    <td >{index+1} </td>
                                    <td>{item.email} </td>
                                    <td>{item.username} </td>
                                    <td>
                                        <button 
                                        className='btn btn-danger'
                                        onClick={() => handleDeleteUser(item)}
                                        >Delete</button>
                                     </td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default TableUser;
