import { createContext, useContext, useReducer, useEffect } from "react";
import { wishlistReducer } from "reducers/wishlistReducer";
import { useToast } from "./ToastContext";
import { addToWishlistService, getWishlistService, removeFromWishlistService } from "toolkit/utils";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const { auth, user } = useAuth();
  const [wishlist, dispatchWishlist] = useReducer(wishlistReducer, []);

  const { dispatchToast } = useToast();
  const navigate = useNavigate();

  const addToWishlist = async (product) => {
    try {
      if (auth.isAuth) {
        const res = await addToWishlistService(auth.token, product);
        dispatchWishlist({ type: "SET_ALL_WISHLIST", payload: res.wishlist });
        dispatchToast({
          type: "SHOW_TOAST",
          payload: { state: "success", msg: "Added to Wishlist!" },
        });
      } else navigate("/login");
    } catch (err) {
      dispatchToast({
        type: "SHOW_TOAST",
        payload: { state: "error", msg: "Error in adding product to wishlist" },
      });
      console.log(err);
    }
  };

  const getWishlist = async () => {
    try {
      if (auth.isAuth) {
        const res = await getWishlistService(auth.token);
        dispatchWishlist({ type: "SET_ALL_WISHLIST", payload: res.wishlist });
      } else navigate("/login");
    } catch (e) {
      console.log("getWishlist : Error in fetching wishlist details", e);
    }
  };

  const removeFromWishlist = async (id) => {
    try {
      if (auth.isAuth) {
        const res = await removeFromWishlistService(auth.token, id);
        dispatchWishlist({ type: "SET_ALL_WISHLIST", payload: res.wishlist });
        dispatchToast({
          type: "SHOW_TOAST",
          payload: { state: "default", msg: "Removed from Wishlist" },
        });
      } else navigate("/login");
    } catch (e) {
      console.log("removeFromWishlist : Error in removing product from wishlist", e);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, dispatchWishlist, addToWishlist, removeFromWishlist, getWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
