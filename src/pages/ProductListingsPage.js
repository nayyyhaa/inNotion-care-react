import { useState } from "react";
import { ProductListingData } from "../data";
import bathbomb from "../assets/bath-bomb.jpg";
import { Card, ProductFilterSidebar } from "../components";
import { useFilter } from "../contexts/FilterContext";
import { sort, filterBy, filterCategories, priceRange, setRating } from "../utils";

export const ProductListingsPage = () => {
  const [showFilterBar, setShowFilterBar] = useState(false);
  const { filter, dispatchFilter } = useFilter();
  const { sortBy, maxPriceRange, ratingRange, categories } = filter;
  const sortedData = sort(ProductListingData, sortBy);
  const priceRangeData = priceRange(sortedData, maxPriceRange);
  const ratingData = setRating(priceRangeData, ratingRange);
  const catogorisedData = filterCategories(ratingData, categories);
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
          <section className="products-section container card-grid grid-resp-col">
            {finalData?.map((product) => {
              return <Card key={product.id} product={product} />;
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
