import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserDetail = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            console.log(response.data)
            setUser(response.data)
            setLoading(false);
        })
        .catch(e => {
            console.log(e)
        })
    },[id]);
    
    return (
        <div>
            <h1>User Detail</h1>
            {loading ? (<div/>) : (
                <ul className="user_detail">
                    <li>Name: {user.name}</li>
                    <li>Username: {user.username}</li>
                    <li>Email: {user.email}</li>
                    <li>Phone: {user.phone}</li>
                    <li>Company: {user.company.name}</li>
                    <li>Website: {user.website}</li>
                    <li>Adress:</li>
                    <ul>
                        <li>Street: {user.address.street}</li>
                        <li>Suite: {user.address.suite}</li>
                         <li>City: {user.address.city}</li>
                          <li>Zipcode: {user.address.zipcode}</li>
                     </ul>
                </ul>
            )}
        </div>
    );
}
 
export default UserDetail;