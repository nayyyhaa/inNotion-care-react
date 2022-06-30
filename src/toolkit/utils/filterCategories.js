export const filterCategories = (data, categoriesSelected) =>
  categoriesSelected.length
    ? data.filter((it) => it.categoryName.filter((cat) => categoriesSelected.includes(cat)).length)
    : data;

export const filterSearch = (data, searchIp) =>
  searchIp ? data.filter((it) => it.title.toLowerCase().includes(searchIp.toLowerCase())) : data;
