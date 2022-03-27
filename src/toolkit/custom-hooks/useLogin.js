import { getCartService, getWishlistService, loginService, signupService } from "toolkit/utils";
import { useNavigate } from "react-router-dom";
import { useToast } from "contexts/ToastContext";
import { useAuth } from "contexts/AuthContext";
import { useCart } from "contexts/CartContext";
import { useWishlist } from "contexts/WishlistContext";

export const useLogin = () => {
  const navigate = useNavigate();
  const { dispatchToast } = useToast();
  const { dispatchCart } = useCart();
  const { dispatchWishlist } = useWishlist();
  const { setAuth, setUser } = useAuth();
  const loginHandler = async (e, email, password) => {
    try {
      e.preventDefault();
      const [token, userData] = await loginService("/api/auth/login", email, password);
      setUser(userData);
      localStorage.setItem("token", token);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("user", JSON.stringify(userData));
      setAuth({ token, isAuth: true });
      const cartRes = await getCartService(token);
      dispatchCart({ type: "SET_ALL_CART", payload: cartRes.cart });
      setAuth({ token, isAuth: true });
      const wishlistRes = await getWishlistService(token);
      dispatchWishlist({ type: "SET_ALL_WISHLIST", payload: wishlistRes.wishlist });
      navigate("/");
    } catch (err) {
      dispatchToast({
        type: "SHOW_TOAST",
        payload: { state: "error", msg: "User doesn't exists. Sign up now!" },
      });
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user");
    setAuth({ token: "", isAuth: false });
    navigate("/login");
  };

  const signupHandler = async (e, email, password, firstName, lastName) => {
    try {
      e.preventDefault();
      const [token, userData] = await signupService("/api/auth/signup", email, password, firstName, lastName);
      setUser(userData);
      localStorage.setItem("token", token);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("user", JSON.stringify(userData));
      setAuth({ token, isAuth: true });
      navigate("/");
    } catch (err) {
      dispatchToast({
        type: "SHOW_TOAST",
        payload: { state: "error", msg: "User already exists! Try logging in." },
      });
    }
  };
  return { loginHandler, logoutHandler, signupHandler };
};
