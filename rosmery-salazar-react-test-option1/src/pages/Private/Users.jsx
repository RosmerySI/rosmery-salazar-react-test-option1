import React, { useEffect, useState } from 'react';
import { useStore } from '../../hooks/useStore';
import { useNavigate } from 'react-router-dom';

export const Users = () => {

  const [usersTable ,setUsersTable]= useState([])
  const { users, startGettingUsers } = useStore()

  useEffect(() => {
    startGettingUsers()
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      setUsersTable(users);
      
    }
  }, [users]); 
  const navigate = useNavigate()

  return (
    <div>
        <div className='product-header-container'>
        <h1>Users</h1>
        <button
          style={{
            height: '50px',
            width: '100px',
            border: '1px solid #e02c1c',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '18px'
          }}
          onClick={() => navigate('/products')}>
          Back
        </button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
            <th>City</th>
            <th>Street</th>
            <th>Zipcode</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {usersTable.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name.firstname}</td>
              <td>{user.name.lastname}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.address.city}</td>
              <td>{`${user.address.street} ${user.address.number}`}</td>
              <td>{user.address.zipcode}</td>
              <td>{user.address.geolocation.lat}</td>
              <td>{user.address.geolocation.long}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
