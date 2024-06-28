import { useRef } from 'react';
import PropTypes from 'prop-types';
import ReduxAddToCart from '../ReduxAddToCart';
import './ProductCard.css';

function ProductCard({ product, cart, increaseQuantity, decreaseQuantity }) {
  const pRef = useRef(null);

  function printTitle() {
    if (pRef.current.style.display === "none") {
      pRef.current.style.display = "block";
    } else {
      pRef.current.style.display = "none";
    }
  }

  return (
    <div className="product-card">
      <p onClick={printTitle}>{product.title}</p>
      <p ref={pRef} style={{ display: "none" }}>{product.price.value} {product.price.currency}</p>
      <p>{product.category}</p>
      <ReduxAddToCart
        product={product}
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  cart: PropTypes.object.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default ProductCard;
