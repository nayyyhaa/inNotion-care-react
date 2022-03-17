export const CartSidebar = ({ totalPrice }) => {
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
          <p>(-) {totalPrice} ₹</p>
        </li>
        <li className="cart-item full-wd row-flex no-wrap p-h-2 m-v-05">
          <p className="sub-heading">Shipping</p>
          <p>(+) 50 ₹</p>
        </li>
        <li className="cart-item full-wd row-flex no-wrap p-h-2 m-v-05">
          <label className="field promofield full-wd" htmlFor="promo-text">
            <span className="search-icon cursor p-h-1">
              <i className="fa fa-tag" aria-hidden="true"></i>
            </span>
            <input type="text" className="input search-nav full-wd p-05" placeholder="Promo Code" id="promo-text" />
          </label>
        </li>
        <li className="line-decoration"></li>
        <li className="cart-item full-wd row-flex no-wrap p-h-2 m-v-1">
          <p className="h3">YOU PAY</p>
          <p className="h3">{totalPrice + 50} ₹</p>
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
