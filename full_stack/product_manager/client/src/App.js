import { react, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/products')
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, []);

  // DELETE PRODUCT
  const deleteProduct = (productId) => {
    axios
      .delete(`http://localhost:8000/api/products/${productId}`)
      .then((res) => {
        removeProductFromProducts(productId);
      })
      .catch((err) => console.error(err));
  };

  // Adds new product to the array products and will display it on the dom
  const addProductToProducts = (product) => {
    setProducts([...products, product]);
  };

  // Deletes a product from products array and from the dom.
  const removeProductFromProducts = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div className='App'>
      <Routes>
        <Route
          element={
            <Main
              products={products}
              addProductToProducts={addProductToProducts}
              deleteProduct={deleteProduct}
              loaded={loaded}
            />
          }
          path='/products'
        />
        <Route element={<Update />} path='/products/:id/edit' />
        <Route
          element={<Detail deleteProduct={deleteProduct} />}
          path='/products/:id'
        />
      </Routes>
    </div>
  );
}

export default App;
