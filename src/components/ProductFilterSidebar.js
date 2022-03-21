import { useCategories } from "contexts/CategoriesContext";
import { useFilter } from "contexts/FilterContext";

export const ProductFilterSidebar = ({ showFilterBar }) => {
  const { filter, dispatchFilter } = useFilter();
  const { categories } = useCategories();
  const categoriesData = categories.reduce((acc, curr) => [...acc, ...curr.subCategories], []);
  const { sortBy, includeOutOfStock, maxPriceRange, categoriesSelected, ratingRange } = filter;
  return (
    <>
      <div className={`side-bar product-sidebar box-shd w-20p ${showFilterBar ? "show-filter" : ""}`}>
        <div className="side-bar-title title row-flex p-v-2 p-h-3">
          <p>Filters</p>
          <p className="clear-all cursor" onClick={() => dispatchFilter({ type: "CLEAR_ALL" })}>
            Clear all
          </p>
          <p className="icon-toggle icon-btn sidebar-close rd-bdr grid-ctr colored-text">
            <i className="fa fa-close" aria-hidden="true"></i>
          </p>
          <div className="line-decoration"></div>
        </div>
        <ul className="sidebar-items no-bullet col-flex flex-start no-wrap p-h-2 m-b-3">
          <li className="filter-list p-l-2 m-v-1">CATEGORIES</li>
          {categoriesData?.map(({ _id, tag, title }) => {
            return (
              <li key={_id} className="filter-item p-l-2 m-v-05">
                <label className="categories sub-heading">
                  <input
                    type="checkbox"
                    className="checkbox-input m-r-1"
                    title={title}
                    id={_id}
                    checked={categoriesSelected.includes(tag)}
                    onChange={(e) =>
                      dispatchFilter({
                        type: "SET_CATEGORIES",
                        payload: {
                          type: tag,
                          isChecked: e.target.checked,
                        },
                      })
                    }
                  />
                  {title}
                </label>
              </li>
            );
          })}
          <li className="line-decoration"></li>
          <li className="filter-list p-l-2 m-v-1">SORT BY</li>
          <li className="filter-item p-l-2 m-v-05">
            <label className="categories sub-heading">
              <input
                type="radio"
                className="radio-input m-r-1"
                title="price"
                checked={sortBy === "LOWTOHIGH"}
                onChange={() => dispatchFilter({ type: "SORT", payload: "LOWTOHIGH" })}
              />
              Price: Low to high
            </label>
          </li>
          <li className="filter-item p-l-2 m-v-05">
            <label className="categories sub-heading">
              <input
                type="radio"
                className="radio-input m-r-1"
                title="price"
                checked={sortBy === "HIGHTOLOW"}
                onChange={() => dispatchFilter({ type: "SORT", payload: "HIGHTOLOW" })}
              />
              Price: High to low
            </label>
          </li>
          <li className="line-decoration"></li>
          <li className="filter-list p-l-2 m-v-1">PRICE RANGE</li>
          <li className="filter-item p-l-2 m-v-05 full-wd">
            <datalist className="price-range">
              <sub className="colored-text">100₹</sub>
              <sub className="colored-text">{maxPriceRange}₹</sub>
            </datalist>
            <label className="categories">
              <input
                type="range"
                value={maxPriceRange}
                min="100"
                max="1000"
                onChange={(e) =>
                  dispatchFilter({
                    type: "SET_PRICE_RANGE",
                    payload: e.target.value,
                  })
                }
                className="range-input full-wd"
              />
            </label>
          </li>
          <li className="line-decoration"></li>
          <li className="filter-list p-l-2 m-v-1">BASIC</li>
          <li className="filter-item p-l-2 m-v-05">
            <label className="categories sub-heading">
              <input
                type="checkbox"
                className="checkbox-input m-r-1"
                title="inStock"
                checked={includeOutOfStock}
                onChange={() =>
                  dispatchFilter({
                    type: "TOGGLE_OUT_OF_STOCK",
                  })
                }
              />
              Include Out Of Stock
            </label>
          </li>
          <li className="line-decoration"></li>
          <li className="filter-list p-l-2 m-v-1">RATING</li>
          {[5, 4, 3, 2, 1].map((rt) => {
            return (
              <li key={rt} className="filter-item p-l-2 m-v-05">
                <label className="categories sub-heading">
                  <input
                    type="radio"
                    className="radio-input m-r-1"
                    title="rating"
                    value={`${rt}_stars`}
                    checked={ratingRange === rt}
                    onChange={() =>
                      dispatchFilter({
                        type: "SET_RATING_RANGE",
                        payload: rt,
                      })
                    }
                  />
                  {rt} stars & below
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
