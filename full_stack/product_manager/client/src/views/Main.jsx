import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductFrom';
import ProductList from '../components/ProductList';

const Main = (props) => {
  // console.log(props);
  const {
    products,
    addProductToProducts,
    deleteProduct,
    loaded,
    removeProductFromProducts,
  } = props;
  // const [products, setProducts] = useState([]);
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:8000/api/products')
  //     .then((res) => {
  //       console.log(res.data);
  //       setProducts(res.data);
  //       setLoaded(true);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // // Adds new product to the array products and will display it on the dom
  // const addProductToProducts = (product) => {
  //   setProducts([...products, product]);
  // };

  // // Deletes a product from products array and from the dom.
  // const removeProductFromProducts = (id) => {
  //   setProducts(products.filter((product) => product._id !== id));
  // };

  return (
    <div>
      <ProductForm addProductToProducts={addProductToProducts} />
      <hr />
      {loaded && (
        <ProductList
          products={products}
          removeProductFromProducts={removeProductFromProducts}
          deleteProduct={deleteProduct}
        />
      )}
    </div>
  );
};

export default Main;
