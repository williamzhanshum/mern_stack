import React, { useState } from 'react';

const UserForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfrimPassword] = useState('');

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password };
    console.log(('Welcome', newUser));
  };

  return (
    <>
      <form onSubmit={createUser}>
        <div>
          <lable>First Name: </lable>
          <input type='text' onChange={(e) => setFirstName(e.target.value)} />
        </div>

        <div>
          <lable>Last Name: </lable>
          <input type='text' onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <lable>Email: </lable>
          <input type='text' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <lable>Password: </lable>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <lable>Confirm Password: </lable>
          <input
            type='password'
            onChange={(e) => setConfrimPassword(e.target.value)}
          />
        </div>
      </form>

      <div>
        <h2>Your Form Data</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confrim Password:{confirmPassword}</p>
      </div>
    </>
  );
};

export default UserForm;
