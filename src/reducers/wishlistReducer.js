export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLEWISHLIST":
      if (state.includes(action.payload)) return state.filter((it) => it.id !== action.payload.id);
      else return [...state, action.payload];
    default:
      return state;
  }
};