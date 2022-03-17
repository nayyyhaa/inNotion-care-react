export const priceRange = (data, maxPrice) =>
  data.filter((it) => it.price <= maxPrice);
