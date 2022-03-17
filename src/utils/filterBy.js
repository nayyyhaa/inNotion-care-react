export const filterBy = (data, { includeOutOfStock }) =>
  data.filter((it) => (!includeOutOfStock ? it.inStock : it));
