export const sort = (data, sortBy) => {
  switch (sortBy) {
    case "LOWTOHIGH":
      return [...data.sort((el1, el2) => +el1.price - +el2.price)];
    case "HIGHTOLOW":
      return [...data.sort((el2, el1) => +el1.price - +el2.price)];
    default:
      return data;
  }
};
