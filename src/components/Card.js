import { useCart } from "contexts/CartContext";
import { useToast } from "contexts/ToastContext";
import { useWishlist } from "contexts/WishlistContext";
import { Link, useNavigate } from "react-router-dom";

export const Card = ({ product }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { cart, addToCart } = useCart();
  const cartItem = cart.filter((el) => el._id === product._id)[0];
  const { _id, title, description, image, rating, ratingNo, price, inStock } = product;
  const wishlistIndex = wishlist.findIndex((el) => el._id === product._id);
  const navigate = useNavigate();
  const { dispatchToast } = useToast();

  const shareProductLink = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(`https://innotion-carev2.netlify.app/product/${_id}`);
    dispatchToast({
      type: "SHOW_TOAST",
      payload: { state: "success", msg: "Copied link in clipboard!" },
    });
  };

  return (
    <Link
      to={`/product/${_id}`}
      className={`card vd-card left-text col-flex flex-start w-30rm m-2 ${!inStock ? "disabled" : ""}`}
    >
      <img className="card-img full-wd" src={image} alt={title} />
      <button
        className="card-icon-btn icon-btn rd-bdr heart-btn"
        onClick={(e) => {
          wishlistIndex < 0 ? addToWishlist(product, e) : removeFromWishlist(_id, e);
        }}
      >
        <i className={`fa fa-heart${wishlistIndex < 0 ? "-o" : ""}`} aria-hidden="true"></i>
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
        <p className="h3 colored-text">{price} ???</p>
      </div>
      <div className="card-actions p-2 row-flex full-wd">
        <div className="card-btns">
          {!cartItem ? (
            <button
              className={`btn primary-btn m-r-1 ${!inStock ? "disabled-btn" : ""}`}
              onClick={(e) => addToCart(product, e)}
            >
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span className="p-l-1">Add to cart</span>
            </button>
          ) : (
            <button
              className="btn primary-btn m-r-1"
              onClick={(e) => {
                e.preventDefault();
                navigate("/cart");
              }}
            >
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span className="p-l-1">Go to cart</span>
            </button>
          )}
        </div>
        <div className="card-icons">
          <button className="card-icon-btn icon-btn rd-bdr" onClick={shareProductLink}>
            <i className="fa fa-share-alt" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      {!inStock && <span className="badge text-badge badge-card-tr wt-text red-content">Out of Stock</span>}
    </Link>
  );
};
