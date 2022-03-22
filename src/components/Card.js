import { useCart } from "contexts/CartContext";
import { useWishlist } from "contexts/WishlistContext";

export const Card = ({ product }) => {
  const { wishlist, dispatchWishlist } = useWishlist();
  const { cart, dispatchCart } = useCart();
  const cartItem = cart.filter((el) => el._id === product._id)[0];
  const { title, description, image, rating, ratingNo, price, inStock } = product;
  return (
    <div className={`card vd-card left-text col-flex flex-start w-30rm m-2 ${!inStock ? "disabled" : ""}`}>
      <img className="card-img full-wd" src={image} alt={title} />
      <button className="card-icon-btn icon-btn rd-bdr heart-btn">
        <i
          className={`fa fa-heart${!wishlist.includes(product) ? "-o" : ""}`}
          onClick={() => dispatchWishlist({ type: "TOGGLE_WISHLIST", payload: product })}
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
        {!cartItem ? (
          <div className="card-btns">
            <button
              className="btn primary-btn m-r-1"
              onClick={() => dispatchCart({ type: "ADD_TO_CART", payload: product })}
            >
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span className="p-l-1">Add to cart</span>
            </button>
          </div>
        ) : (
          <div className="quantity-selector row-flex no-wrap full-height">
            <button className="icon-btn" onClick={() => dispatchCart({ type: "DELETE_FROM_CART", payload: product })}>
              <i className="fa fa-trash-o light-font m-r-2 red-text" aria-hidden="true"></i>
            </button>
            <button
              className="icon-btn"
              onClick={() => dispatchCart({ type: "DECREMENT_FROM_CART", payload: product })}
            >
              <i className="fa fa-minus light-font m-r-2" aria-hidden="true"></i>
            </button>
            <p className="quantity m-r-2 h3">{cartItem?.count}</p>

            <button className="icon-btn" onClick={() => dispatchCart({ type: "ADD_TO_CART", payload: product })}>
              <i className="fa fa-plus light-font" aria-hidden="true"></i>
            </button>
          </div>
        )}
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
