import { useCart } from "contexts/CartContext";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
export const CartSidebar = ({ totalPrice, finalPrice, isShippingFree }) => {
  const [dPrice, setDPrice] = useState(0);
  const { cart, discountData, setDiscountData } = useCart();
  const { pathname } = useLocation();

  useEffect(() => {
    switch (discountData?.code) {
      case "FREEDEL":
        setDPrice(0);
        break;
      case "SUM10":
        setDPrice(Math.floor(totalPrice / 10));
        break;
      default:
        setDPrice(0);
    }
  }, [discountData?.code]);

  return (
    <div className="side-bar cart-sidebar box-shd p-v-5">
      <ul className="no-bullet col-flex flex-start no-wrap p-h-1 m-b-3">
        {pathname.includes("checkout") && (
          <li className="cart-item full-wd col-flex p-h-2 m-v-05">
            {cart?.map((product) => {
              const { _id, title, image, qty, price } = product;
              return (
                <div key={_id} className="justify-start full-wd row-flex no-wrap">
                  <button className="badge-wrapper primary-icon-btn m-r-1 m-v-1">
                    <img className="h-5rm w-5rm" src={image} alt={title} />
                    <span className="badge wt-text grid-ctr green-bg">{qty}</span>
                  </button>
                  <p>{title}</p>
                  <p className="m-l-auto">
                    <strong>{price}₹</strong>
                  </p>
                </div>
              );
            })}
          </li>
        )}
        <li className="cart-list p-h-2 m-v-2">PRICE DETAILS</li>
        <li className="cart-item full-wd row-flex no-wrap p-h-2 m-v-05">
          <p className="sub-heading">Subtotal</p>
          <p>
            <strong>{totalPrice * 2}₹</strong>
          </p>
        </li>
        <li className="cart-item full-wd row-flex no-wrap p-h-2 m-v-05">
          <p className="sub-heading">Discount</p>
          <p>
            <strong className="green-text">(-) {totalPrice}₹</strong>
          </p>
        </li>
        {discountData?.code && (
          <li className="cart-item full-wd row-flex no-wrap p-h-2 m-v-05">
            <p className="sub-heading">Coupon ({discountData?.code})</p>
            <p>
              <strong className="green-text">(-) {dPrice}₹</strong>
            </p>
          </li>
        )}
        <li className="cart-item full-wd row-flex no-wrap p-h-2 m-v-05">
          <p className="sub-heading">Shipping</p>
          <p>
            <strong className={isShippingFree ? "green-text" : ""}>{isShippingFree ? `Free` : `(+) 50₹`}</strong>
          </p>
        </li>
        <li className="cart-item full-wd row-flex no-wrap p-h-2 m-v-05">
          <label className="field promofield full-wd" htmlFor="promo-text">
            <span className="search-icon cursor p-h-1">
              <i className="fa fa-tag" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              className="input search-nav full-wd p-05"
              placeholder="Promo Code"
              id="promo-text"
              value={discountData?.code}
              readOnly
              onClick={() => setDiscountData((prev) => ({ ...prev, showModal: true }))}
            />
          </label>
        </li>
        <li className="line-decoration"></li>
        <li className="cart-item full-wd row-flex no-wrap p-h-2 m-v-1">
          <p className="h3">YOU PAY</p>
          <p className="h3">{finalPrice}₹</p>
        </li>
        <li className="cart-list full-wd p-h-2 m-v-1">
          <Link to="/checkout">
            <button className="btn primary-btn m-r-1 full-wd">
              <span className="p-l-1">PLACE ORDER</span>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
