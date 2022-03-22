import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "reducers/filterReducer";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filter, dispatchFilter] = useReducer(filterReducer, {
    sortBy: null,
    includeOutOfStock: true,
    maxPriceRange: 1000,
    categoriesSelected: [],
    rating: null,
  });
  return <FilterContext.Provider value={{ filter, dispatchFilter }}>{children}</FilterContext.Provider>;
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
