import react from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router';

const ProductList = (props) => {
  const { removeProductFromProducts } = props;

  const deleteProduct = (productId) => {
    axios
      .delete(`http://localhost:8000/api/products/${productId}`)
      .then((res) => {
        removeProductFromProducts(productId);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((oneProduct, idx) => {
        return (
          <p key={idx}>
            <Link to={`/products/${oneProduct._id}`}>{oneProduct.title}</Link>
            <button
              onClick={(e) => {
                deleteProduct(oneProduct._id);
              }}
            >
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default ProductList;
