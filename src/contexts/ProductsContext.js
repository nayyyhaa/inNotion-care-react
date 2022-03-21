import { createContext, useContext } from "react";
import { useReducer } from "react";
import { productsReducer } from "../reducers/productsReducer";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, dispatchProducts] = useReducer(productsReducer, []);
  return <ProductsContext.Provider value={{ products, dispatchProducts }}>{children}</ProductsContext.Provider>;
};

const useProducts = () => useContext(ProductsContext);

export { useProducts, ProductsProvider };
