export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "TOGGLE_OUT_OF_STOCK":
      return { ...state, includeOutOfStock: !state.includeOutOfStock };
    case "SET_PRICE_RANGE":
      return { ...state, maxPriceRange: action.payload };
    case "SET_RATING_RANGE":
      return { ...state, ratingRange: action.payload };
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload.isChecked
          ? [...state.categories, action.payload.type]
          : state.categories.filter((cat) => cat !== action.payload.type),
      };
    case "CLEAR_ALL":
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
