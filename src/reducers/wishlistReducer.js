export const wishlistReducer = (state, action) => {
  const index = state.findIndex((el) => el._id === action.payload._id);
  switch (action.type) {
    case "SET_ALL_WISHLIST":
      return action.payload;
    case "TOGGLE_WISHLIST":
      if (index !== -1) return state.filter((it) => it._id !== action.payload._id);
      else return [...state, action.payload];
    default:
      return state;
  }
};
