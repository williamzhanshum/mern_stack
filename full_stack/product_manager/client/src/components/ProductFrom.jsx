import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  // Keep track of what is being used via useState hook
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

  // Handler when button is clicked
  const createProduct = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/products', { title, price, desc })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Product Manager</h1>
      <form>
        <p>
          <label>Title</label>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </p>
        <p>
          <label>Price</label>
          <input
            type='text'
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </p>
        <p>
          <label>Description</label>
          <input
            type='text'
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </p>
        <button onClick={createProduct}>Create</button>
      </form>
    </>
  );
};

export default ProductForm;
