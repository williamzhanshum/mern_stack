import React, { useState } from 'react';

const UserForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [firstNameErr, setFirstNameErr] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameErr, setLastNameErr] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [confirmPassword, setConfrimPassword] = useState('');
  const [confirmPasswordErr, setConfrimPasswordErr] = useState('');

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password };
    console.log(('Welcome', newUser));
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    e.target.value.length < 2
      ? setFirstNameErr('First Name must be at least 2 characters.')
      : setFirstNameErr('');
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    e.target.value.length < 2
      ? setLastNameErr('Last Name must be at least 2 characters.')
      : setLastNameErr('');
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    e.target.value.length < 5
      ? setEmailErr('Email must be at least 5 characters.')
      : setEmailErr('');
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    e.target.value.length < 8
      ? setPasswordErr('Password must be at least 8 characters.')
      : setPasswordErr('');
  };

  const matchPasswords = (e) => {
    setConfrimPassword(e.target.value);
    password !== e.target.value
      ? setConfrimPasswordErr('Passwords do not match!')
      : setConfrimPasswordErr('');
  };

  return (
    <>
      <form onSubmit={createUser}>
        <div>
          <lable>First Name: </lable>
          <input type='text' onChange={handleFirstName} />
          {firstNameErr ? <p style={{ color: 'red' }}>{firstNameErr}</p> : ''}
        </div>

        <div>
          <lable>Last Name: </lable>
          <input type='text' onChange={handleLastName} />
          {lastNameErr ? <p style={{ color: 'red' }}>{lastNameErr}</p> : ''}
        </div>
        <div>
          <lable>Email: </lable>
          <input type='text' onChange={handleEmail} />
          {emailErr ? <p style={{ color: 'red' }}>{emailErr}</p> : ''}
        </div>
        <div>
          <lable>Password: </lable>
          <input type='password' onChange={handlePassword} />
          {passwordErr ? <p style={{ color: 'red' }}>{passwordErr}</p> : ''}
        </div>
        <div>
          <lable>Confirm Password: </lable>
          <input type='password' onChange={matchPasswords} />
          {confirmPassword ? (
            <p style={{ color: 'red' }}>{confirmPasswordErr}</p>
          ) : (
            ''
          )}
        </div>
      </form>
    </>
  );
};

export default UserForm;
