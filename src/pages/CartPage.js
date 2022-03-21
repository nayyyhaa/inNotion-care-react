import { CartCard, CartSidebar } from "components";
import { useCart } from "contexts/CartContext";

export const CartPage = () => {
  const { cart } = useCart();
  let totalPrice = cart.length > 0 ? cart.reduce((acc, curr) => acc + curr.price * curr.count, 0) : 0;

  return (
    <>
      <div className="cart-layout row-flex flex-start no-wrap">
        <main className={`cart-container products-content p-h-5 p-v-2 w-50p ${cart.length > 0 ? "" : "m-auto"}`}>
          <h2 className="centered-text p-v-2 p-h-4">
            Your Cart <span className="sub-heading">({cart.length} item)</span>
          </h2>
          <div className="line-decoration"></div>
          <section className="col-flex">
            {cart?.map((product) => {
              return <CartCard key={product.id} product={product} />;
            })}
          </section>
        </main>
        {cart.length > 0 && <CartSidebar totalPrice={totalPrice} />}
      </div>
    </>
  );
};
