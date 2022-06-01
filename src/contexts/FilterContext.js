import { createContext, useContext, useReducer, useState } from "react";
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
  const [searchIp, setSearchIp] = useState("");
  return (
    <FilterContext.Provider value={{ filter, dispatchFilter, searchIp, setSearchIp }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
