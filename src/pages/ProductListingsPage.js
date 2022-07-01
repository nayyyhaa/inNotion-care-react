import { useState } from "react";
import noData from "toolkit/assets/no-data.svg";
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
        <ProductFilterSidebar showFilterBar={showFilterBar} setShowFilterBar={setShowFilterBar} />
        <main className="products-content p-v-5 p-h-2">
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
          <section className={`products-section container ${finalData.length > 0 ? "card-grid grid-3-col" : ""}`}>
            {finalData.length > 0 ? (
              finalData.map((product) => {
                return <Card key={product._id} product={product} />;
              })
            ) : (
              <div className="grid-ctr m-v-5 m-auto">
                <img className="w-60p no-video p-t-3" src={noData} alt="noData" />
                <p className="m-t-3">No item found for {searchIp ? "searched input." : "filtered category."}</p>
              </div>
            )}
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
