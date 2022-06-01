import { Routes, Route } from "react-router-dom";
import {
  Homepage,
  Authorisation,
  WishlistPage,
  ProfilePage,
  ProductListingsPage,
  CartPage,
  SingleProductPage,
  PageNotFound,
} from "./pages";
import { HeaderAnnouncement, Footer, Navbar, Toast } from "./components";
import { usePageViewTracker, useAsync, useScrollToTop } from "./toolkit/custom-hooks";
import { useProducts } from "./contexts/ProductsContext";
import { useCategories } from "./contexts/CategoriesContext";
import Mockman from "mockman-js";
import { PrivateRoute } from "routes/PrivateRoute";
import { useToast } from "./contexts/ToastContext";

function App() {
  const { toast } = useToast();
  const { state, msg } = toast;
  usePageViewTracker();

  let { dispatchProducts } = useProducts();
  let { dispatchCategories } = useCategories();

  useAsync({
    url: "/api/products",
    actionType: "GET_ALL_PRODUCTS",
    dispatch: dispatchProducts,
    payloadType: "products",
  });
  useAsync({
    url: "/api/categories",
    actionType: "GET_ALL_CATEGORIES",
    dispatch: dispatchCategories,
    payloadType: "categories",
  });

  useScrollToTop();

  return (
    <>
      <HeaderAnnouncement />
      <Toast state={state} msg={msg} />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/products" element={<ProductListingsPage />} />
        <Route path="/login" element={<Authorisation />} />
        <Route path="/signup" element={<Authorisation />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
