import "./ProductCard.css";
import AddToCart from "../AddToCart/AddToCart";
import ReduxAddToCart from '../ReduxAddToCart';
import { useRef } from "react";
import PropTypes from 'prop-types';

function ProductCard({ product, cart, increaseQuantity, decreaseQuantity }) {
  let pRef = useRef(null);
  // let iRef = useRef(null);
  // let oRef = useRef(null);
  // let [inputV, setInputV] = useState("Class");

  function printTitle() {
    if (pRef.current.style.display === "none") {
      pRef.current.style.display = "block";
    } else {
      pRef.current.style.display = "none";
    }
  }

  // function displayOutput(e) {
  //   setInputV(e.target.value);
  // }

  return (
    <div className="product-card">
      <p onClick={printTitle}>{product.title}</p>
      <p ref={pRef} style={{display:"none"}}>{product.price.value} {product.price.currency}</p>
      {/* <input type="text" onChange={displayOutput} ref={iRef} value={inputV} /> */}
      {/* <p ref={oRef}>Over here the output would arrive - {inputV}</p> */}
      {/* <AddToCart
        product={product}
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      /> */}
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
    }).isRequired
  }).isRequired,
  cart: PropTypes.object.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default ProductCard;
