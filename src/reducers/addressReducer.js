export const AddressReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return [...state, action.payload];
    case "EDIT_ADDRESS":
      return state.map((it) => (it._id === action.payload._id ? { ...it, ...action.payload } : it));
    case "DELETE_ADDRESS":
      return state.filter((it) => it._id !== action.payload._id);
    default:
      return state;
  }
};
