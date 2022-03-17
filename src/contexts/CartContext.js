import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
