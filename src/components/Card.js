import { useCart } from "contexts/CartContext";
import { useWishlist } from "contexts/WishlistContext";
import { Link } from "react-router-dom";

export const Card = ({ product }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { cart, addToCart } = useCart();
  const cartItem = cart.filter((el) => el._id === product._id)[0];
  const { _id, title, description, image, rating, ratingNo, price, inStock } = product;
  const wishlistIndex = wishlist.findIndex((el) => el._id === product._id);
  return (
    <div className={`card vd-card left-text col-flex flex-start w-30rm m-2 ${!inStock ? "disabled" : ""}`}>
      <img className="card-img full-wd" src={image} alt={title} />
      <button className="card-icon-btn icon-btn rd-bdr heart-btn">
        <i
          className={`fa fa-heart${wishlistIndex < 0 ? "-o" : ""}`}
          onClick={() => {
            wishlistIndex < 0 ? addToWishlist(product) : removeFromWishlist(_id);
          }}
          aria-hidden="true"
        ></i>
      </button>
      <div className="card-header-text col-flex flex-start text-wrap p-2">
        <h2 className="card-title h3">{title}</h2>
        <div className="rating-badge card-rating-overlay">
          <span className="rating-number">{rating}</span>
          <label>
            <i className="fa fa-star rating-icon" aria-hidden="true"></i>
          </label>
          <span>|</span>
          <span className="rating-number">{ratingNo}</span>
        </div>
        <p className="sub-heading m-b-1">{description}</p>
        <p className="h3 colored-text">{price} ₹</p>
      </div>
      <div className="card-actions p-2 row-flex full-wd">
        <div className="card-btns">
          {!cartItem ? (
            <button className="btn primary-btn m-r-1" onClick={() => addToCart(product)}>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span className="p-l-1">Add to cart</span>
            </button>
          ) : (
            <Link to="/cart">
              <button className="btn primary-btn m-r-1">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span className="p-l-1">Go to cart</span>
              </button>
            </Link>
          )}
        </div>
        <div className="card-icons">
          <button className="card-icon-btn icon-btn rd-bdr">
            <i className="fa fa-share-alt" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      {!inStock && <div className="h3 card-overlay grid-ctr">Sold out!</div>}
    </div>
  );
};
