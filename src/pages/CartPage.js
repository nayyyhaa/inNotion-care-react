import noData from "toolkit/assets/no-data.svg";
import { CartCard, CartSidebar, DiscountPopup } from "components";
import { useCart } from "contexts/CartContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const CartPage = () => {
  const { cart, discountData } = useCart();
  const [isShippingFree, setIsShippingFree] = useState(false);
  let totalPrice = cart.length > 0 ? cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0) : 0;
  let finalPrice = isShippingFree ? totalPrice : totalPrice + 50;
  finalPrice = discountData.code === "SUM10" ? finalPrice - Math.floor(totalPrice / 10) : finalPrice;

  useEffect(() => {
    totalPrice > 1999 || discountData?.code === "FREEDEL" ? setIsShippingFree(true) : setIsShippingFree(false);
  }, [totalPrice, discountData?.code]);

  return (
    <div className="cart-layout row-flex flex-start no-wrap">
      <main className={`cart-container products-content p-h-5 p-v-2 w-50p ${cart.length > 0 ? "" : "m-auto"}`}>
        <h2 className="centered-text p-v-2 p-h-4">
          Your Cart <span className="sub-heading">({cart.length} item)</span>
        </h2>
        <div className="line-decoration"></div>
        <section className="col-flex">
          {cart.length > 0 ? (
            cart?.map((product) => <CartCard key={product._id} product={product} />)
          ) : (
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
          )}
          {/* {cart?.map((product) => (
            <CartCard key={product._id} product={product} />
          ))} */}
        </section>
      </main>
      {cart.length > 0 && (
        <CartSidebar totalPrice={totalPrice} finalPrice={finalPrice} isShippingFree={isShippingFree} />
      )}
      <DiscountPopup />
    </div>
  );
};
