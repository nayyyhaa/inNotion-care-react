import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "contexts/CartContext";
import { useWishlist } from "contexts/WishlistContext";
import { NavbarData } from "toolkit/data";
import { useAuth } from "contexts/AuthContext";

export const Navbar = () => {
  const { categories, navbarActions } = NavbarData;
  const [isNavVisible, setNavVisible] = useState(false);
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const { auth } = useAuth();

  return (
    <header className="header fixed-header">
      <nav className="navbar row-flex w-95p m-auto p-05">
        <Link className="m-l-3" to="/">
          <h3 id="logo">
            in.notion <span className="text-shd">Care</span>
          </h3>
        </Link>
        <ul className={`nav-items row-flex w-40p no-bullet ${isNavVisible ? "show-nav" : ""}`}>
          {categories?.map(({ id, title, link }) => (
            <li key={id} className="btn nav-link-btn cursor h3" onClick={() => setNavVisible(false)}>
              <Link to={link}>{title}</Link>
            </li>
          ))}
        </ul>
        <label className="field searchfield w-20p" htmlFor="search-text">
          <span className="search-icon cursor p-h-1">
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
          <input type="search" className="input search-nav reset-ip p-05" placeholder="Search here" id="search-text" />
        </label>
        <div className="nav-icon-btns row-flex no-wrap">
          <ul className="row-flex no-bullet">
            {navbarActions?.map(({ id, title, icon, link }) => (
              <li key={id} className="nav-icon-btn icon-btn rd-bdr grid-ctr wt-text m-r-3">
                <Link to={link} className="badge-wrapper grid-ctr">
                  <i className={icon} aria-hidden="true"></i>
                  <span className="badge wt-text grid-ctr red-content">
                    {title === "Wishlist" ? wishlist.length : cart.length}
                  </span>
                  <span className="nav-icon-text h6 cursor wt-text">{title}</span>
                </Link>
              </li>
            ))}
            <li className="nav-icon-btn icon-btn rd-bdr grid-ctr wt-text m-r-3">
              <Link to={auth.isAuth ? `/profile` : `/login`} className="badge-wrapper grid-ctr">
                <i className="fa fa-user" aria-hidden="true"></i>
                <span className="nav-icon-text h6 cursor wt-text">Profile</span>
              </Link>
            </li>
          </ul>
          <div
            className="hamburger icon-toggle icon-btn rd-bdr grid-ctr wt-text m-r-1"
            onClick={() => setNavVisible((prev) => !prev)}
          >
            <i className={`${isNavVisible ? "fa fa-times" : "fa fa-bars"}`} aria-hidden="true"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};
