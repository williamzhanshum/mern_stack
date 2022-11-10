import react, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Detail = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { deleteProduct } = props;

  useEffect(() => {
    console.log('HERE IS ID', id);
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <Link to={`/products/${product._id}/edit`}>Edit</Link>
      <Link
        to={`/products`}
        onClick={() => {
          deleteProduct(product._id);
        }}
      >
        Delete
      </Link>
    </div>
  );
};

export default Detail;
