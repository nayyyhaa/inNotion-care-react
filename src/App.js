import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage, Authorisation, WishlistPage, ProductListingsPage, CartPage, PageNotFound } from "./pages";
import { HeaderAnnouncement, Footer, Navbar } from "./components";
import { usePageViewTracker } from "./utils/usePageViewTracker";
function App() {
  usePageViewTracker();
  return (
    <>
      <HeaderAnnouncement />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/products" element={<ProductListingsPage />} />
        <Route path="/login" element={<Authorisation />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
