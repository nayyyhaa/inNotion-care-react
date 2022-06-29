export const setRating = (data, ratingRange) =>
  ratingRange ? data.filter((it) => Math.floor(+it.rating) >= ratingRange) : data;
