import { AddressPopup, CartSidebar, DiscountPopup } from "components";
import { useAddress } from "contexts/AddressContext";
import { useCart } from "contexts/CartContext";
import { useAuth } from "contexts/AuthContext";
import { useState, useEffect } from "react";

export const CheckoutPage = () => {
  const { cart, discountData } = useCart();
  const [isShippingFree, setIsShippingFree] = useState(false);
  const { address } = useAddress();
  const { user } = useAuth();
  const [showPopup, setShowPopup] = useState(false);

  let totalPrice = cart.length > 0 ? cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0) : 0;
  let finalPrice = isShippingFree ? totalPrice : totalPrice + 50;
  finalPrice = discountData.code === "SUM10" ? finalPrice - Math.floor(totalPrice / 10) : finalPrice;

  useEffect(() => {
    totalPrice > 1999 || discountData?.code === "FREEDEL" ? setIsShippingFree(true) : setIsShippingFree(false);
  }, [totalPrice, discountData?.code]);

  return (
    <div className="cart-layout row-flex flex-start no-wrap">
      <main className={`cart-container products-content p-h-5 p-v-2 w-50p ${cart.length > 0 ? "" : "m-auto"}`}>
        <div className="row-flex cart-item p-v-2 p-h-4">
          <h2>Contact Information</h2>
          <button className="btn primary-outline-btn" onClick={() => setShowPopup(true)}>
            Add New Address
          </button>
        </div>
        <div className="line-decoration"></div>
        <section className="col-flex">
          <ul className="no-bullet col-flex no-wrap w-90p p-h-2 m-b-3 p-t-2">
            <li className="filter-list m-v-2">Select Address</li>
            {address?.map(
              (data) =>
                user?.email === data?.email && (
                  <li key={data?._id} className="filter-item address-box m-v-1">
                    <label className="categories cursor">
                      <input
                        type="radio"
                        className="radio-input m-v-05 m-r-1"
                        name="address"
                        id={data?._id}
                        // checked={data?.code === code}
                        // onChange={() => setCode(data?.code)}
                      />
                      <strong>
                        {data?.firstName} {data?.lastName}
                      </strong>
                      <p className="sub-heading m-v-05">{data.address}</p>
                      <p className="sub-heading m-v-05">
                        {data?.city}, {data?.state} - {data?.pincode}
                      </p>
                      <p className="sub-heading m-v-05">Phone No. - {data?.phNo}</p>
                    </label>
                  </li>
                )
            )}
          </ul>
        </section>
      </main>
      {cart.length > 0 && (
        <CartSidebar totalPrice={totalPrice} finalPrice={finalPrice} isShippingFree={isShippingFree} />
      )}
      <DiscountPopup />
      <AddressPopup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};
