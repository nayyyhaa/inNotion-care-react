import { useState } from "react";
import bathbomb from "toolkit/assets/bath-bomb.jpg";
import { Card, ProductFilterSidebar } from "components";
import { useFilter } from "contexts/FilterContext";
import { sort, filterBy, filterCategories, priceRange, setRating } from "toolkit/utils";
import { useProducts } from "contexts/ProductsContext";
import { filterSearch } from "toolkit/utils/filterCategories";

export const ProductListingsPage = () => {
  const { products } = useProducts();
  const [showFilterBar, setShowFilterBar] = useState(false);
  const { filter, searchIp, dispatchFilter } = useFilter();
  const { sortBy, maxPriceRange, ratingRange, categoriesSelected } = filter;
  const searchedData = filterSearch(products, searchIp);
  const sortedData = sort(searchedData, sortBy);
  const priceRangeData = priceRange(sortedData, maxPriceRange);
  const ratingData = setRating(priceRangeData, ratingRange);
  const catogorisedData = filterCategories(ratingData, categoriesSelected);
  const finalData = filterBy(catogorisedData, filter);
  return (
    <>
      <div className="products-banner h-20">
        <img src={bathbomb} alt="products-banner" />
        <div className="products-banner-text lg-text text-shd">Shop</div>
      </div>
      <div className="shop-layout row-flex no-wrap flex-start">
        <ProductFilterSidebar showFilterBar={showFilterBar} />
        <main className="products-content p-5">
          <div className="products-content-header row-flex p-2">
            <h2>
              Product listing <span className="sub-heading">({finalData.length} items)</span>
            </h2>
          </div>
          <div className="line-decoration"></div>
          {searchIp && (
            <p className="centered-text m-t-3">
              Searched product: "<span className="colored-text">{searchIp}</span>"
            </p>
          )}
          <section className="products-section container card-grid grid-resp-col">
            {finalData?.map((product) => {
              return <Card key={product._id} product={product} />;
            })}
          </section>
        </main>
      </div>
      <div className="filter-bar full-wd">
        <p
          className="filter-bar-item filter-btn w-50p cursor grid-ctr"
          onClick={() => setShowFilterBar((prev) => !prev)}
        >
          Filter
        </p>
        <p
          className="filter-bar-item clear-all cursor w-50p grid-ctr"
          onClick={() => dispatchFilter({ type: "CLEAR_ALL" })}
        >
          Clear all
        </p>
      </div>
    </>
  );
};
