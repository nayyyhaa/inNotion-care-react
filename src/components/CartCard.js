import { useCart } from "contexts/CartContext";
import { useWishlist } from "contexts/WishlistContext";
export const CartCard = ({ product }) => {
  const { wishlist, dispatchWishlist } = useWishlist();
  const { dispatchCart } = useCart();
  const { title, image, count, price } = product;
  const wishlistIndex = wishlist.findIndex((el) => el._id === product._id);
  return (
    <>
      <div className="card hz-card cart-card left-text row-flex text-wrap w-80p h-20rm m-v-2">
        <img className="cart-card-img h-20rm w-35p" src={image} alt={title} />
        <button className="card-icon-btn cart-wishlist icon-btn rd-bdr heart-btn">
          <i
            className={`fa fa-heart${wishlistIndex < 0 ? "-o" : ""}`}
            onClick={() => dispatchWishlist({ type: "TOGGLE_WISHLIST", payload: product })}
            aria-hidden="true"
          ></i>
        </button>
        <div className="card-header-text cart-card-header h-25rm col-flex flex-start no-wrap">
          <h2 className="card-title h3">{title}</h2>
          <small className="card-text sub-heading-light m-b-2">Sold by: Nene Stores</small>
          <div className="quantity-selector row-flex no-wrap m-b-2">
            <button className="icon-btn" onClick={() => dispatchCart({ type: "DELETE_FROM_CART", payload: product })}>
              <i className="fa fa-trash-o light-font m-r-2 red-text" aria-hidden="true"></i>
            </button>
            <button
              className="icon-btn"
              onClick={() => dispatchCart({ type: "DECREMENT_FROM_CART", payload: product })}
            >
              <i className="fa fa-minus light-font m-r-2" aria-hidden="true"></i>
            </button>
            <p className="quantity m-r-2 h3">{count}</p>

            <button className="icon-btn" onClick={() => dispatchCart({ type: "ADD_TO_CART", payload: product })}>
              <i className="fa fa-plus light-font" aria-hidden="true"></i>
            </button>
          </div>
          <div className="card-footer row-flex full-wd">
            <p className="card-price h3 colored-text m-r-2 m-b-1">
              {price}₹ <del className="sub-heading-light light-font">{price * 2}₹ </del>
              <span className="green-text light-font"> (50% off)</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
