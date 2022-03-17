export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "TOGGLEOUTOFSTOCK":
      return { ...state, includeOutOfStock: !state.includeOutOfStock };
    case "SETPRICERANGE":
      return { ...state, maxPriceRange: action.payload };
    case "SETRATINGRANGE":
      return { ...state, ratingRange: action.payload };
    case "SETCATEGORIES":
      return {
        ...state,
        categories: action.payload.isChecked
          ? [...state.categories, action.payload.type]
          : state.categories.filter((cat) => cat !== action.payload.type),
      };
    case "CLEARALL":
      return {
        sortBy: null,
        includeOutOfStock: true,
        maxPriceRange: 1000,
        categories: [],
        ratingRange: null,
      };
    default:
      return state;
  }
};
