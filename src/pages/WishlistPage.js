import noData from "toolkit/assets/no-data.svg";
import { Card } from "components";
import bathbomb from "toolkit/assets/bath-bomb.jpg";
import { useWishlist } from "contexts/WishlistContext";
import { Link } from "react-router-dom";

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
        <section className={`products-section container ${wishlist.length > 0 ? "card-grid grid-resp-col" : ""} w-95p`}>
          {wishlist.length > 0 ? (
            wishlist?.map((el) => {
              return <Card key={el._id} product={el} />;
            })
          ) : (
            <div className="grid-ctr m-v-5 m-auto">
              <img className="w-60p no-video" src={noData} alt="noData" />
              <p className="m-t-3">No item in wishlist!</p>
              <p className="m-t-3">
                Checkout our{" "}
                <Link to="/products" className="colored-text">
                  products
                </Link>
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
};
