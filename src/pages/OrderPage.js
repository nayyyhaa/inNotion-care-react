import { useOrder } from "contexts/OrderContext";
import { Link } from "react-router-dom";
import success from "toolkit/assets/order-success.png";
import noData from "toolkit/assets/no-data.svg";

export const OrderPage = () => {
  const { order } = useOrder();
  const { orderedProducts, paymentId, finalPrice, discountCode, dPrice, currentAddress, totalPrice, isShippingFree } =
    order;
  return (
    <div className="order-page m-v-3">
      {Object.keys(order).length > 0 ? (
        <div className="row-flex">
          <div className="order-user-info">
            <img src={success} className="h-10rm w-10rm m-auto" alt="order success" />
            <div className="m-v-3 centered-text">
              <h2 className="green-text m-v-1">
                <strong className="h2">Order placed succesfully! 🎉</strong>
              </h2>
              <p className="md-text m-v-1">Order ID: 5678</p>
              <p>
                <strong>
                  Thankyou for shopping with us, {currentAddress?.firstName} {currentAddress?.lastName}
                </strong>
              </p>
            </div>
            <div className="filter-item address-box categories p-1 w-90p m-v-1">
              <p className="m-v-1">
                <strong>SHIPPING ADDRESSS</strong>
              </p>
              <p>
                Name: {currentAddress?.firstName} {currentAddress?.lastName}
              </p>
              <p className="sub-heading m-v-05">{currentAddress?.address}</p>
              <p className="sub-heading m-v-05">
                {currentAddress?.city}, {currentAddress?.state} - {currentAddress?.pincode}
              </p>
              <p className="sub-heading m-v-05">Phone No. - {currentAddress?.phNo}</p>
            </div>
          </div>
          <ul className="order-summary-sidebar no-bullet col-flex flex-start no-wrap w-40p p-h-1 p-v-3">
            <li className="cart-list p-h-2 m-v-2">ORDER DETAILS</li>
            <li className="cart-item full-wd col-flex p-h-2 m-v-05">
              {orderedProducts?.map((product) => {
                const { _id, title, image, qty, price } = product;
                return (
                  <div key={_id} className="justify-start full-wd row-flex no-wrap">
                    <button className="badge-wrapper primary-icon-btn m-r-1 m-v-1">
                      <img className="h-5rm w-5rm" src={image} alt={title} />
                      <span className="badge icon-badge wt-text grid-ctr green-bg">{qty}</span>
                    </button>
                    <p>{title}</p>
                    <p className="m-l-auto">
                      <strong>{price}₹</strong>
                    </p>
                  </div>
                );
              })}
            </li>
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
            {discountCode && (
              <li className="cart-item full-wd row-flex no-wrap p-h-2 m-v-05">
                <p className="sub-heading">Coupon ({discountCode})</p>
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
            <li className="line-decoration"></li>
            <li className="cart-item full-wd row-flex no-wrap p-h-2 m-v-1">
              <p className="h3">YOU PAY</p>
              <p className="h3">{finalPrice}₹</p>
            </li>
          </ul>
        </div>
      ) : (
        <div className="full-wd m-auto row-flex align-start p-v-2 p-h-5 m-t-3">
          <div className="grid-ctr m-v-5">
            <img className="w-60p no-video" src={noData} alt="noData" />
            <p className="m-t-3">No item in cart!</p>
            <p className="m-t-3">
              Checkout our{" "}
              <Link to="/products" className="colored-text">
                products
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
