import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./contexts/FilterContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { CartProvider } from "./contexts/CartContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { AuthProvider } from "contexts/AuthContext";
import { ToastProvider } from "contexts/ToastContext";
import { AddressProvider } from "contexts/AddressContext";
import { OrderProvider } from "contexts/OrderContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToastProvider>
        <AuthProvider>
          <AddressProvider>
            <WishlistProvider>
              <OrderProvider>
                <CartProvider>
                  <ProductsProvider>
                    <CategoriesProvider>
                      <FilterProvider>
                        <App />
                      </FilterProvider>
                    </CategoriesProvider>
                  </ProductsProvider>
                </CartProvider>
              </OrderProvider>
            </WishlistProvider>
          </AddressProvider>
        </AuthProvider>
      </ToastProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
