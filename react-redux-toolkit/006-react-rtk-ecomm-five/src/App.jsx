import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "./store/slices/cart/cartSlice";
import Products from "./app/products/Products";
import Cart from "./app/cart/Cart";
import "./App.css";

function App() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Defined state
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    dispatch(getCartItems()); // fetching cart data
  }, [dispatch]);

  return (
    <div className="App">
      <button
        onClick={() => setShowCart((prev) => !prev)}
        style={{ marginBottom: "10px" }}
      >
        Cart [ {cartItems?.length} ]
      </button>
      {showCart ? <Cart /> : <Products />}
    </div>
  );
}

export default App;
