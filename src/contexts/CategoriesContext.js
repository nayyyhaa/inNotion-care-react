import { createContext, useContext } from "react";
import { useReducer } from "react";
import { categoriesReducer } from "reducers/categoriesReducer";

const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [categories, dispatchCategories] = useReducer(categoriesReducer, []);
  return <CategoriesContext.Provider value={{ categories, dispatchCategories }}>{children}</CategoriesContext.Provider>;
};

const useCategories = () => useContext(CategoriesContext);

export { useCategories, CategoriesProvider };
