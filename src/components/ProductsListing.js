import { useProducts } from "../contexts/ProductsContext";
import { Card } from "./Card";

export const ProductsListing = () => {
  const { products } = useProducts();
  return (
    <section className="section centered-text grid-ctr m-t-3">
      <h2 className="title colored-text h1 m-1">
        <span className="circle"></span>inNotion Classics
      </h2>
      <div className="container product-content grid-4-col card-grid p-v-2">
        {products?.map((product) => {
          return <Card key={product._id} product={product} />;
        })}
      </div>
    </section>
  );
};
