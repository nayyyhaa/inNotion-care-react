export const setRating = (data, ratingRange) =>
  ratingRange ? data.filter((it) => +it.rating <= ratingRange) : data;
