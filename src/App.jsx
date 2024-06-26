import { useState } from "react";
import Products from "./components/Products/Products";
import CartContext from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Categories from "./components/Categories/Categories";

function App() {
  const [cart, setCart] = useState({});

  function increaseQuantity(product) {
    let newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = { ...product, quantity: 0 };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
  }

  function decreaseQuantity(product) {
    let newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
      <div>
        <Categories />
        <Products
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </div>
      < Cart />
    </CartContext.Provider>
  );
}

export default App;