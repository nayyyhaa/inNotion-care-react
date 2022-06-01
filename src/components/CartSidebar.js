import { useEffect, useState } from "react";
export const CartSidebar = ({ totalPrice, finalPrice, isShippingFree, discountData, setDiscountData }) => {
  const [dPrice, setDPrice] = useState(0);

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
      <ul className="no-bullet col-flex flex-start no-wrap p-h-2 m-b-3">
        <li className="cart-list p-h-2 m-v-2">PRICE DETAILS</li>
        <li className="cart-item full-wd row-flex no-wrap p-h-2 m-v-05">
          <p className="sub-heading">Subtotal</p>
          <p>{totalPrice * 2} ₹</p>
        </li>
        <li className="cart-item full-wd row-flex no-wrap p-h-2 m-v-05">
          <p className="sub-heading">Discount</p>
          <p className="green-text">(-) {totalPrice} ₹</p>
        </li>
        {discountData?.code && (
          <li className="cart-item full-wd row-flex no-wrap p-h-2 m-v-05">
            <p className="sub-heading">Coupon ({discountData?.code})</p>
            <p className="green-text">(-) {dPrice} ₹</p>
          </li>
        )}
        <li className="cart-item full-wd row-flex no-wrap p-h-2 m-v-05">
          <p className="sub-heading">Shipping</p>
          <p className={isShippingFree ? "green-text" : ""}>{isShippingFree ? `Free` : `(+) 50 ₹`}</p>
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
          <p className="h3">{finalPrice} ₹</p>
        </li>
        <li className="cart-list full-wd p-h-2 m-v-1">
          <button className="btn primary-btn m-r-1 full-wd">
            <span className="p-l-1">PLACE ORDER</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
