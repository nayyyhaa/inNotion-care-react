import { useAddress } from "contexts/AddressContext";
import { useCart } from "contexts/CartContext";
import { useOrder } from "contexts/OrderContext";
import { useToast } from "contexts/ToastContext";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import compPhoto from "toolkit/assets/self-love.png";

export const CartSidebar = ({ totalPrice, finalPrice, isShippingFree }) => {
  const [dPrice, setDPrice] = useState(0);
  const [addressError, setAddressError] = useState(false);
  const { cart, discountData, setDiscountData, dispatchCart, clearCart } = useCart();
  const { pathname } = useLocation();
  const { dispatchToast } = useToast();
  const { setOrder } = useOrder();
  const { currentAddress } = useAddress();
  const navigate = useNavigate();

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

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    if (!currentAddress) {
      setAddressError(true);
    } else {
      setAddressError(false);
      const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

      if (!res) {
        dispatchToast({
          type: "SHOW_TOAST",
          payload: { state: "error", msg: "Error in processing payment" },
        });
        return;
      }

      var options = {
        key: "rzp_test_hTxMgISWpX1WzU",
        amount: finalPrice * 100,
        currency: "INR",
        name: "inNotion Care",
        description: "Test Transaction",
        image: compPhoto,
        handler: function (response) {
          const orderData = {
            orderedProducts: [...cart],
            paymentId: response.razorpay_payment_id,
            finalPrice,
            discountCode: discountData?.code,
            dPrice,
            currentAddress,
            totalPrice,
            isShippingFree,
          };

          setOrder(orderData);
          clearCart();
          dispatchCart({ type: "SET_ALL_CART", payload: [] });
          navigate("/order");
        },
        prefill: {
          name: `${currentAddress?.firstName} ${currentAddress?.lastName}`,
          email: currentAddress?.email,
          contact: currentAddress?.phNo,
        },
        notes: {
          address: "inNotion Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  };

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
            <button
              className="btn primary-btn m-r-1 full-wd"
              onClick={() => {
                if (pathname.includes("checkout")) displayRazorpay();
              }}
            >
              <span className="p-l-1">PLACE ORDER</span>
            </button>
          </Link>
        </li>
        {addressError && <li className="centered-text red-text full-wd">Select an addresss to proceed!</li>}
      </ul>
    </div>
  );
};
