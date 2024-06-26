import { useSelector } from 'react-redux';
import ReduxAddToCart from '../ReduxAddToCart/ReduxAddToCart'; // Ensure the path is correct

const Cart = () => {
  const cartItems = useSelector((state) => state.items);

  const itemsList = Object.keys(cartItems).map((key) => {
    const product = cartItems[key];
    return (
      <div key={product.id}>
        <h4>{product.title}</h4>
        <p>{product.price.value} {product.price.currency}</p>
        <ReduxAddToCart product={product} />
      </div>
    );
  });

  return (
    <div>
      <h2>Cart</h2>
      {itemsList.length > 0 ? itemsList : <p>Your cart is empty.</p>}
    </div>
  );
};

export default Cart;
