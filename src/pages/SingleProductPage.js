import { Link, useParams, useNavigate } from "react-router-dom";
import { useProducts } from "contexts/ProductsContext";
import { useCart } from "contexts/CartContext";
import { useWishlist } from "contexts/WishlistContext";

export const SingleProductPage = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { cart, addToCart, updateQuantityInCart, removeFromCart } = useCart();
  const product = products?.find((product) => product._id === id);
  const productInCart = cart?.find((product) => product._id === id);
  const wishlistIndex = wishlist.findIndex((el) => el._id === id);
  const navigate = useNavigate();

  return (
    <div className="single-product-container full-wd">
      <img src={product?.image} alt={product?.title} />
      <div className="single-product-description w-50p p-h-4">
        <h2 className="card-title h3">{product?.title}</h2>
        <small className="card-text sub-heading-light m-b-2">Sold by: Nene Stores</small>
        <p className="m-v-1">
          Rating:{" "}
          <span className="rating">
            {[1, 2, 3, 4, 5].map((rt) => (
              <label key={rt}>
                <input className="rating-input rating-star" type="checkbox" checked={product?.rating >= rt} disabled />
                <i className="fa fa-star rating-icon" aria-hidden="true"></i>
              </label>
            ))}
          </span>
        </p>

        <div className="card-footer row-flex m-t-1 full-wd">
          <p className="card-price h3 m-r-2 m-v-1">
            Price: {product?.price}₹ <del className="sub-heading-light light-font">{product?.price * 2}₹ </del>
            <span className="green-text light-font"> (50% off)</span>
          </p>
        </div>
        <div className="line-decoration"></div>
        <p className="left-text sub-heading-light m-v-2">{product?.description}</p>
        {!productInCart ? (
          <button className="btn primary-btn full-wd m-r-1" onClick={(e) => addToCart(product, e)}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span className="p-l-1">Add to cart</span>
          </button>
        ) : (
          <>
            <div className="quantity-selector row-flex no-wrap flex-start m-v-2">
              <button className="icon-btn" onClick={(e) => removeFromCart(product?._id, e)}>
                <i className="fa fa-trash-o light-font m-r-2 red-text" aria-hidden="true"></i>
              </button>
              <button
                className="icon-btn"
                onClick={(e) => updateQuantityInCart(product?._id, "decrement", productInCart?.qty, e)}
              >
                <i className="fa fa-minus light-font m-r-2" aria-hidden="true"></i>
              </button>
              <p className="quantity m-r-2 h3">{productInCart ? productInCart?.qty : 0}</p>

              <button
                className="icon-btn"
                onClick={(e) => updateQuantityInCart(product?._id, "increment", productInCart?.qty, e)}
              >
                <i className="fa fa-plus light-font" aria-hidden="true"></i>
              </button>
            </div>
            <button
              className="btn primary-btn full-wd m-r-1"
              onClick={(e) => {
                e.preventDefault();
                navigate("/cart");
              }}
            >
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span className="p-l-1">Go to cart</span>
            </button>
          </>
        )}
        <button
          className="btn primary-outline-btn full-wd m-v-1"
          onClick={(e) => {
            wishlistIndex < 0 ? addToWishlist(product, e) : removeFromWishlist(id, e);
          }}
        >
          <i className="fa fa-heart" aria-hidden="true"></i>
          <span className="p-l-1">{wishlistIndex < 0 ? "Add to" : "Remove from"} wishlist</span>
        </button>
        <p className="m-v-1">
          <i className="fa fa-diamond m-r-1" aria-hidden="true"></i> 100% Original Products.
        </p>
        <p className="m-v-1">
          <i className="fa fa-exchange m-r-1" aria-hidden="true"></i> Easy 30 days exchange & return available
        </p>
        <p className="m-v-1">
          <i className="fa fa-money m-r-1" aria-hidden="true"></i> Cash on delivery available.
        </p>
      </div>
    </div>
  );
};
