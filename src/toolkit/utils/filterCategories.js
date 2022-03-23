export const filterCategories = (data, categoriesSelected) =>
  categoriesSelected.length
    ? data.filter((it) => it.categoryName.filter((cat) => categoriesSelected.includes(cat)).length)
    : data;
