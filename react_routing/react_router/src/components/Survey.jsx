import React, { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

const Survey = (props) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const sendSurvey = (e) => {
    e.preventDefault();
    // When the user clicks the submit input in the form, we will navigate to the '/results' path
    navigate('/results');
  };

  const Results = (props) => {
    return (
      <>
        <h3>Your form has been submitted!</h3>
        <p>Thank you {name}</p>
        <button
          onClick={(e) => {
            navigate(-1);
            setComment('');
            setName('');
          }}
        >
          Go Back!
        </button>
      </>
    );
  };

  return (
    <>
      <h1>Submit Survey Example</h1>
      <form onSubmit={sendSurvey}>
        <label>Your Name:</label>
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Your Comment:</label>
        <textarea
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        ></textarea>
        <input type='submit' value='Submit Survey' />
      </form>

      <Routes>
        <Route path='/results' element={<Results />} />
      </Routes>
    </>
  );
};

export default Survey;
