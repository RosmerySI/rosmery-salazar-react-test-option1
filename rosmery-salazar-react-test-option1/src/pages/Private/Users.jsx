import React, { useEffect, useState } from 'react';
import { useServices } from '../../hooks/useServices';
import { useNavigate } from 'react-router-dom';
import editIcon from '../../assets/images/edit.png'
import { editData } from '../../utilities/providers';

export const Users = () => {
  const [usersTable, setUsersTable] = useState([]);
  const [editRowId, setEditRowId] = useState(null); 
  const [editedUser, setEditedUser] = useState(null); 
  const [emailError, setEmailError] = useState(''); 
  const { users, startGettingUsers } = useServices();

  useEffect(() => {
    startGettingUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      setUsersTable(users);
    }
  }, [users]);

  const navigate = useNavigate();

  const handleInputChange = (e, field, subfield) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [field]: subfield
        ? { ...editedUser[field], [subfield]: value }
        : value,
    });

    // Validación del email
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError('Invalid email format');
      } else {
        setEmailError('');
      }
    }
  };

  
  const handleSaveClick = (id) => {
    if (emailError) {
      alert("Please provide a valid email before saving.");
      return;
    }

    const updatedUsers = usersTable.map((user) =>
      user.id === id ? editedUser : user

    );
    setUsersTable(updatedUsers);
    setEditRowId(null); 
    editData(editedUser.id,editedUser,'user')
    
  };

  
  const handleEditClick = (user) => {
    setEditRowId(user.id); 
    setEditedUser(user);
    setEmailError(''); 
    
  };


  const handleCancelClick = () => {
    setEditRowId(null); 
    setEmailError(''); 
  };

  return (
    <div className='products-container' style={{width:'95%'}}>
      <div className='product-header-container'>
        <h1>Users</h1>
        <button
          style={{
            height: '50px',
            width: '100px',
            border: '1px solid #e02c1c',
            backgroundColor:'white',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '18px',
          }}
          onClick={() => navigate('/products')}
        >
          Back
        </button>
      </div>
      <div className='table-container'>
        <table >
          <thead>
            <tr>
              
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Phone</th>
              <th>City</th>
              <th>Street</th>
              <th>Zipcode</th>                           
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersTable.map((user) => (
              <tr key={user.id}>
                
                <td>
                  {editRowId === user.id ? (
                    <input
                      type="text"
                      name="firstname"
                      value={editedUser.name.firstname}
                      onChange={(e) => handleInputChange(e, 'name', 'firstname')}
                    />
                  ) : (
                    user.name.firstname
                  )}
                </td>
                <td>
                  {editRowId === user.id ? (
                    <input
                      type="text"
                      name="lastname"
                      value={editedUser.name.lastname}
                      onChange={(e) => handleInputChange(e, 'name', 'lastname')}
                    />
                  ) : (
                    user.name.lastname
                  )}
                </td>
                <td>
                  {editRowId === user.id ? (
                    <div>
                      <input
                        type="text"
                        name="email"
                        value={editedUser.email}
                        onChange={(e) => handleInputChange(e, 'email')}
                      />
                      {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                    </div>
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editRowId === user.id ? (
                    <input
                      type="text"
                      name="username"
                      value={editedUser.username}
                      onChange={(e) => handleInputChange(e, 'username')}
                    />
                  ) : (
                    user.username
                  )}
                </td>
                <td>
                  {editRowId === user.id ? (
                    <input
                      type="text"
                      name="phone"
                      value={editedUser.phone}
                      onChange={(e) => handleInputChange(e, 'phone')}
                    />
                  ) : (
                    user.phone
                  )}
                </td>
                <td>
                  {editRowId === user.id ? (
                    <input
                      type="text"
                      name="city"
                      value={editedUser.address.city}
                      onChange={(e) => handleInputChange(e, 'address', 'city')}
                    />
                  ) : (
                    user.address.city
                  )}
                </td>
                <td>
                  {editRowId === user.id ? (
                    <input
                      type="text"
                      name="street"
                      value={editedUser.address.street}
                      onChange={(e) => handleInputChange(e, 'address', 'street')}
                    />
                  ) : (
                    `${user.address.street} ${user.address.number}`
                  )}
                </td>
                <td>
                  {editRowId === user.id ? (
                    <input
                      type="text"
                      name="zipcode"
                      value={editedUser.address.zipcode}
                      onChange={(e) => handleInputChange(e, 'address', 'zipcode')}
                    />
                  ) : (
                    user.address.zipcode
                  )}
                </td>
                
               
                <td>
                  {editRowId === user.id ? (
                    <div className='iconContainer'>
                      <button 
                      style={{backgroundColor:'white',border:'1px solid #e02c1c',color:'#e02c1c'}}
                      onClick={() => handleSaveClick(user.id)}>
                        Save
                      </button>
                      <button 
                      style={{backgroundColor:' #e02c1c',color:'white',border:'none'}}
                      onClick={handleCancelClick}>
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className='iconContainer'>
                    <img
                      src={editIcon}
                      style={{ width: '20px', height: '20px', margin: 'auto' }}
                      onClick={() => handleEditClick(user)} />
                  </div>
                    
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
