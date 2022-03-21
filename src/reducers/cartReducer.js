export const cartReducer = (state, action) => {
  const index = state.findIndex((el) => el._id === action.payload._id);
  switch (action.type) {
    case "ADD_TO_CART": {
      if (index !== -1)
        return [
          ...state.slice(0, index),
          { ...state[index], count: state[index].count + 1 },
          ...state.slice(index + 1),
        ];
      else return [...state, { ...action.payload, count: 1 }];
    }
    case "DECREMENT_FROM_CART": {
      if (state[index].count > 1)
        return [
          ...state.slice(0, index),
          { ...state[index], count: state[index].count - 1 },
          ...state.slice(index + 1),
        ];
      else return state.filter((it) => it._id !== action.payload._id);
    }
    case "DELETE_FROM_CART":
      return state.filter((it) => it._id !== action.payload._id);
    default:
      return state;
  }
};
