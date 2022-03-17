import { Card } from "../components";
import bathbomb from "../assets/bath-bomb.jpg";
import { useWishlist } from "../contexts/WishlistContext";

export const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <>
      <div className="products-banner h-20">
        <img src={bathbomb} alt="products-banner" />
        <div className="products-banner-text lg-text text-shd">My Wishlist</div>
      </div>
      <main className="wishlist-content w-95p m-auto p-5">
        <h2 className="centered-text p-2">
          Wishlist <span className="sub-heading">({wishlist.length} items)</span>
        </h2>
        <div className="line-decoration"></div>
        <section className="products-section container card-grid grid-resp-col w-95p">
          {wishlist?.map((el) => {
            return <Card product={el} />;
          })}
        </section>
      </main>
    </>
  );
};
