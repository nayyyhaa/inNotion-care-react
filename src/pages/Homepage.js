import { SiteHeader, Marquee, ProductsListing, FeatureCategories } from "../components";

export const Homepage = () => {
  return (
    <>
      <main className="full-wd">
        <SiteHeader />
        <Marquee />
        <ProductsListing />
        <FeatureCategories />
      </main>
    </>
  );
};
