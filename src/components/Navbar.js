import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="header fixed-header">
      <nav className="navbar row-flex w-95p m-auto p-05">
        <a className="m-l-3" href="/">
          <h3 id="logo">
            in.notion <span className="text-shd">Care</span>
          </h3>
        </a>
        <ul className="nav-items row-flex w-40p no-bullet">
          <li className="btn nav-link-btn cursor h3">
            <a href="pages/products.html">Shop</a>
          </li>
          <li className="btn nav-link-btn cursor h3">
            <a href="pages/products.html">Care products</a>
          </li>
          <li className="btn nav-link-btn cursor h3">
            <a>About</a>
          </li>
        </ul>
        <label className="field searchfield w-20p" htmlFor="search-text">
          <span className="search-icon cursor p-h-1">
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
          <input type="search" className="input search-nav reset-ip p-05" placeholder="Search here" id="search-text" />
        </label>
        <div className="nav-icon-btns row-flex no-wrap">
          <ul className="row-flex no-bullet">
            <li className="nav-icon-btn icon-btn rd-bdr grid-ctr wt-text m-r-3">
              <Link to="/wishlist" className="badge-wrapper grid-ctr">
                <i className="fa fa-heart rating-icon" aria-hidden="true"></i>
                <span className="badge wt-text grid-ctr red-content">1</span>
                <span className="nav-icon-text h6 cursor wt-text">Wishlist</span>
              </Link>
            </li>
            <li className="nav-icon-btn icon-btn rd-bdr grid-ctr wt-text m-r-3">
              <Link to="/cart" className="badge-wrapper grid-ctr">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span className="badge wt-text grid-ctr red-content">2</span>
                <span className="nav-icon-text h6 cursor wt-text">Cart</span>
              </Link>
            </li>
            <li className="nav-icon-btn icon-btn rd-bdr grid-ctr  wt-text">
              <Link to="/login" className="grid-ctr">
                <i className="fa fa-user" aria-hidden="true"></i>
                <span className="nav-icon-text h6 cursor wt-text">Profile</span>
              </Link>
            </li>
          </ul>
          <div className="hamburger icon-toggle icon-btn rd-bdr grid-ctr wt-text m-r-1">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};
