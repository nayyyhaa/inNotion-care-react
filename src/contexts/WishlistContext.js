import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "reducers/wishlistReducer";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, dispatchWishlist] = useReducer(wishlistReducer, []);
  return <WishlistContext.Provider value={{ wishlist, dispatchWishlist }}>{children}</WishlistContext.Provider>;
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
