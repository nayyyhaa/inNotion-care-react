import { Routes, Route } from "react-router-dom";
import {
  Homepage,
  Authorisation,
  WishlistPage,
  ProfilePage,
  ProductListingsPage,
  CartPage,
  PageNotFound,
} from "./pages";
import { HeaderAnnouncement, Footer, Navbar } from "./components";
import { usePageViewTracker, useAsync } from "./toolkit/custom-hooks";
import { useProducts } from "./contexts/ProductsContext";
import { useCategories } from "./contexts/CategoriesContext";
import Mockman from "mockman-js";

function App() {
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

  return (
    <>
      <HeaderAnnouncement />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/products" element={<ProductListingsPage />} />
        <Route path="/login" element={<Authorisation />} />
        <Route path="/signup" element={<Authorisation />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
