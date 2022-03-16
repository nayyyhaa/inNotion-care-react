import headerImg from "../assets/highlighter.jpg";
import { Link } from "react-router-dom";

export const SiteHeader = () => {
  return (
    <div className="site-header row-flex no-wrap">
      <div className="hero-introduction col-flex no-wrap">
        <p className="hero-description m-v-1">LIMITED TIME ONLY</p>
        <h2 className="title lg-text m-v-1">
          GET <span className="colored-text lg-text bg">50% OFF</span>
        </h2>
        <h2 className="title lg-text m-v-1">
          USE CODE:{" "}
          <span className="colored-text text-stroke m-v-1">CARE50</span>
        </h2>
        <Link to="/products">
          <button className="btn primary-btn m-v-2 p-2">SHOP NOW</button>
        </Link>
      </div>
      <img className="hero-img" src={headerImg} alt="hero-img" />
    </div>
  );
};
