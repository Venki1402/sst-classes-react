import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import Categories from "../Categories/Categories";
import './Product.css';

function Products({ cart, increaseQuantity, decreaseQuantity }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then((response) => response.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);

  return (
    <div className="products">
      <Categories/>
      {products.map((item, index) => (
        <ProductCard
          key={index}
          product={item}
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      ))}
    </div>
  );
}

Products.propTypes = {
  cart: PropTypes.object.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default Products;
