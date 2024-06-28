import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from "../../stores/Cart";

function ReduxAddToCart({ product }) {
  console.log("add to cart", product.id);
  
  const dispatch = useDispatch();

  const increase = () => {
    // dispatch({ type: "ADD_TO_CART", payload: product });
    dispatch(addToCart(product));
  };

  const decrease = () => {
    // dispatch({ type: "REMOVE_FROM_CART", payload: product });
    dispatch(removeFromCart(product));
  };

  const quantity = useSelector((state) => {
    return state.items[product.id]?.quantity || 0;
  });

  if (quantity === 0) {
    return (
      <div>
        <button onClick={increase}>Add To Cart</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={decrease}>-</button>
        <span> {quantity} </span>
        <button onClick={increase}>+</button>
      </div>
    );
  }
}

ReduxAddToCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReduxAddToCart;
