import PropTypes from 'prop-types';

function AddToCart({ product, cart, increaseQuantity, decreaseQuantity }) {
  function increase() {
    increaseQuantity(product);
  }

  function decrease() {
    decreaseQuantity(product);
  }

  let quantity = cart[product.id] ? cart[product.id].quantity : 0;
  
  if (quantity === 0) {
    return (
      <div>
        <button onClick={increase}>Add to Cart</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={decrease}>Remove</button>
        <span>{quantity}</span>
        <button onClick={increase}>Add</button>
      </div>
    );
  }
}

AddToCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  cart: PropTypes.object.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default AddToCart;
