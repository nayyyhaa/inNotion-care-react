import { MarqueeData } from "toolkit/data";

export const Marquee = () => {
  return (
    <div className="marquee p-2">
      <div className="marquee-container">
        {MarqueeData?.map(({ id, title, image }) => {
          return (
            <div key={id} className="marquee-item p-h-9">
              <span className="marquee-icon p-r-1">
                <img src={image} alt={title} />
              </span>
              <p className="marquee-text">{title}</p>
            </div>
          );
        })}
      </div>
      <div className="marquee-container">
        {MarqueeData?.map(({ id, title, image }) => {
          return (
            <div key={id} className="marquee-item p-h-9">
              <span className="marquee-icon p-r-1">
                <img src={image} alt={title} />
              </span>
              <p className="marquee-text">{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
