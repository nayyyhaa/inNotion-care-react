export const Card = ({ product }) => {
  const { name, description, image, rating, price, inStock } = product;
  return (
    <div className={`card vd-card left-text col-flex flex-start w-30rm m-2 ${!inStock ? "disabled" : ""}`}>
      <img className="card-img full-wd" src={image} alt={name} />
      <button className="card-icon-btn icon-btn rd-bdr heart-btn">
        <i className={`fa fa-heart`} aria-hidden="true"></i>
      </button>
      <div className="card-header-text col-flex flex-start text-wrap p-2">
        <h2 className="card-title h3">{name}</h2>
        <div className="rating-badge card-rating-overlay">
          <span className="rating-number">{rating}</span>
          <label>
            <i className="fa fa-star rating-icon" aria-hidden="true"></i>
          </label>
          <span>|</span>
          <span className="rating-number">99</span>
        </div>
        <p className="sub-heading m-b-1">{description}</p>
        <p className="h3 colored-text">{price} ₹</p>
      </div>
      <div className="card-actions p-2 row-flex full-wd">
        <div className="card-btns">
          <button className="btn primary-btn m-r-1">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span className="p-l-1">Add to cart</span>
          </button>
        </div>
        <div className="card-icons">
          <button className="card-icon-btn icon-btn rd-bdr">
            <i className="fa fa-share-alt" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      {!inStock && <div className="h3 card-overlay grid-ctr">Sold out!</div>}
    </div>
  );
};
