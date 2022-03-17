export const filterCategories = (data, categories) =>
  categories.length ? data.filter((it) => it.category.filter((cat) => categories.includes(cat)).length) : data;
