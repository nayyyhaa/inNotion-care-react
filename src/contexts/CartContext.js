import { useState, createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { cartReducer } from "reducers/cartReducer";
import { addToCartService, getCartService, updateQuantityInCartService, removeFromCartService } from "toolkit/utils";
import { useAuth } from "./AuthContext";
import { useToast } from "./ToastContext";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { auth } = useAuth();
  const [cart, dispatchCart] = useReducer(cartReducer, []);
  const [discountData, setDiscountData] = useState({ showModal: false, code: "" });
  const { dispatchToast } = useToast();
  const navigate = useNavigate();

  const addToCart = async (product, e) => {
    e.preventDefault();
    try {
      if (auth.isAuth) {
        const res = await addToCartService(auth.token, product);
        dispatchCart({ type: "SET_ALL_CART", payload: res.cart });
        dispatchToast({
          type: "SHOW_TOAST",
          payload: { state: "success", msg: "Added to Cart!" },
        });
      } else navigate("/login");
    } catch (err) {
      dispatchToast({
        type: "SHOW_TOAST",
        payload: { state: "error", msg: "Error in adding product to cart" },
      });
    }
  };

  const getCart = async () => {
    try {
      if (auth.isAuth) {
        const res = await getCartService(auth.token);
        dispatchCart({ type: "SET_ALL_CART", payload: res.cart });
      } else navigate("/login");
    } catch (e) {
      console.log("getCart : Error in fetching cart details", e);
    }
  };

  const updateQuantityInCart = async (id, type, qty, e) => {
    e.preventDefault();
    let res;
    try {
      if (auth.isAuth) {
        if (type === "increment") res = await updateQuantityInCartService(auth.token, id, type);
        else {
          if (qty === 1) res = await removeFromCartService(auth.token, id);
          else res = await updateQuantityInCartService(auth.token, id, type);
        }
        dispatchCart({ type: "SET_ALL_CART", payload: res.cart });
      } else navigate("/login");
    } catch (e) {
      console.log("Error in updating product in cart");
    }
  };

  const removeFromCart = async (id, e) => {
    e.preventDefault();
    try {
      if (auth.isAuth) {
        const res = await removeFromCartService(auth.token, id);
        dispatchCart({ type: "SET_ALL_CART", payload: res.cart });
        dispatchToast({
          type: "SHOW_TOAST",
          payload: { state: "default", msg: "Removed from Cart" },
        });
      } else navigate("/login");
    } catch (e) {
      console.log("removeFromCart : Error in removing product from cart", e);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatchCart,
        addToCart,
        updateQuantityInCart,
        removeFromCart,
        getCart,
        discountData,
        setDiscountData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
