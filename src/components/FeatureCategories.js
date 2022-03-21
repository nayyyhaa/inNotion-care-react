import { Link } from "react-router-dom";
import { useFilter } from "contexts/FilterContext";
import { useCategories } from "contexts/CategoriesContext";

export const FeatureCategories = () => {
  const { dispatchFilter } = useFilter();
  const { categories } = useCategories();
  return (
    <section className="section centered-text grid-ctr w-95p m-t-3 m-b-5">
      <h2 className="title colored-text h1 m-v-1">
        <span className="circle"></span>Because we <span className="complementary-color-text">Care</span>
      </h2>
      <div className="product-container grid-3-col full-wd m-v-2 m-b-5">
        {categories?.map(({ _id, tag, categoryName, description, contentColor, image, link }) => {
          return (
            <Link
              to={link}
              key={_id}
              className="product-item cursor left-text m-v-2 m-h-3"
              onClick={() =>
                dispatchFilter({
                  type: "SET_CATEGORIES",
                  payload: {
                    type: tag,
                    isChecked: true,
                  },
                })
              }
            >
              <div className="product-media">
                <img className="product-img" src={image} alt={categoryName} />
              </div>
              <div className="product-action">
                {categoryName.split(" ").map((el) => (
                  <h3 key={el} className="title products-title left-text h1">
                    {el}
                  </h3>
                ))}
                <p className={`cursor product-btn ${contentColor}-content w-80p h3 p-05`}>
                  {description}
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
