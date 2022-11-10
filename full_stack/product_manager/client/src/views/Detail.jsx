import react, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Detail = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Deletes a product from products array and from the dom.
  // const removeProductFromProducts = (id) => {
  //   setProducts(products.filter((product) => product._id !== id));
  // };

  // Delete Product
  // const deleteProduct = (id) => {
  //   axios
  //     .delete(`http://localhost:8000/api/products/${id}`)
  //     .then((res) => {
  //       removeProductFromProducts(id);
  //     })
  //     .catch((err) => console.error(err));
  // };

  return (
    <div>
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <Link to={`/products/${product._id}/edit`}>Edit</Link>
      {/* <Link to={`/products`} onClick={deleteProduct}>
        Delete
      </Link> */}
    </div>
  );
};

export default Detail;
