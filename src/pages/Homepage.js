import { SiteHeader, Marquee, ProductsListing, FeatureCategories } from "../components";
import { useCategories } from "../contexts/CategoriesContext";
import { useProducts } from "../contexts/ProductsContext";
export const Homepage = () => {
  const { products } = useProducts();
  const { categories } = useCategories();
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
