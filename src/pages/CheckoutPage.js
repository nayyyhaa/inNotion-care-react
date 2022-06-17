import noData from "toolkit/assets/no-data.svg";
import { AddressPopup, CartSidebar, DiscountPopup } from "components";
import { useAddress } from "contexts/AddressContext";
import { useCart } from "contexts/CartContext";
import { useAuth } from "contexts/AuthContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const CheckoutPage = () => {
  const { cart, discountData } = useCart();
  const [isShippingFree, setIsShippingFree] = useState(false);
  const { address, currentAddress, setCurrentAddress } = useAddress();
  const { user } = useAuth();
  const [showPopup, setShowPopup] = useState(false);

  let totalPrice = cart.length > 0 ? cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0) : 0;
  let finalPrice = isShippingFree ? totalPrice : totalPrice + 50;
  finalPrice = discountData.code === "SUM10" ? finalPrice - Math.floor(totalPrice / 10) : finalPrice;
  const currentUserAddresses = address?.filter((data) => user?.email === data?.email);

  useEffect(() => {
    totalPrice > 1999 || discountData?.code === "FREEDEL" ? setIsShippingFree(true) : setIsShippingFree(false);
  }, [totalPrice, discountData?.code]);

  return (
    <>
      {cart?.length > 0 ? (
        <div className="cart-layout row-flex flex-start no-wrap">
          <main className={`cart-container products-content p-h-5 p-v-2 w-50p ${cart.length > 0 ? "" : "m-auto"}`}>
            <div className="row-flex cart-item p-v-2 p-h-4">
              <h2>Contact Information</h2>
              <button className="btn primary-outline-btn m-v-1" onClick={() => setShowPopup(true)}>
                Add New Address
              </button>
            </div>
            <div className="line-decoration"></div>
            <section className="col-flex">
              <ul className="no-bullet col-flex no-wrap w-90p p-h-2 m-b-3 p-t-2">
                <li className="filter-list m-v-2">Select Address</li>
                {currentUserAddresses?.length > 0 ? (
                  <>
                    {" "}
                    {currentUserAddresses?.map((data) => (
                      <li key={data?._id} className="filter-item address-box m-v-1">
                        <label className="categories cursor">
                          <input
                            type="radio"
                            className="radio-input m-v-05 m-r-1"
                            name="address"
                            id={data?._id}
                            checked={data?._id === currentAddress?._id}
                            onChange={() => setCurrentAddress(data)}
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
                    ))}
                  </>
                ) : (
                  <li className="grid-ctr m-v-5">
                    <p className="m-t-3">No address found in directory!</p>
                    <p className="m-t-3">
                      Add{" "}
                      <span className="colored-text cursor" onClick={() => setShowPopup(true)}>
                        New Address
                      </span>{" "}
                      to proceed.
                    </p>
                  </li>
                )}
              </ul>
            </section>
          </main>

          <CartSidebar totalPrice={totalPrice} finalPrice={finalPrice} isShippingFree={isShippingFree} />

          <DiscountPopup />
          <AddressPopup showPopup={showPopup} setShowPopup={setShowPopup} />
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
    </>
  );
};
