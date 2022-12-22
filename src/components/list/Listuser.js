import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Listuser = () => {
    const url = 'http://localhost/php/sam.php';
    const [users, setUsers] = useState([]);
    useEffect (() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get(url).then(function(response) {
            console.log(( response.data));
            setUsers([response.data]);
        });
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Mobile</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                {users.map((user, key) =>
                    <tr key={key}>
                        
                        <td>{user[0]}</td>
                        <td>{user[1]}</td>
                        <td>{user[2]}</td>
                        <td>
                            <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                            <button>Delete</button>
                        </td>
                    </tr>
                )}
                
            </tbody>
            </table>
        </div>
    )
}

export default Listuser