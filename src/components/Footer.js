import { FooterData } from "../data";

export const Footer = () => {
  const { shop, information, socials } = FooterData;
  return (
    <footer className="connect footer p-3 col-flex">
      <div className="contact-content row-flex w-90p m-b-1">
        <div className="footer-item col-flex m-2">
          <h3 className="m-b-3">SHOP</h3>
          <ul className="footer-item-links left-text no-bullet">
            {shop?.map(({ id, title }) => (
              <li className="m-b-1" key={id}>
                <a className="grey-text cursor">{title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-item col-flex m-2">
          <h3 className="m-b-3">INFORMATION</h3>
          <ul className="footer-item-links left-text no-bullet">
            {information?.map(({ id, title }) => (
              <li className="m-b-1" key={id}>
                <a className="grey-text cursor">{title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="contact-action col-flex m-2">
          <form
            action="https://formspree.io/f/mknkoydw"
            className="contact-form email-form m-b-1"
            method="POST"
            target="_blank"
          >
            <h3 className="left-text m-b-3">JOIN THE CULT</h3>
            <p className="grey-text left-text m-b-1">SAVE 15% ON YOUR FIRST PURCHASE</p>
            <div className="field row-flex flex-start m-v-1">
              <label className="row-flex no-wrap" htmlFor="email">
                <input
                  type="email"
                  className="input email-input p-07"
                  placeholder="Email us"
                  name="_replyto"
                  id="email"
                  required=""
                />
                <button className="btn secondary-outline-btn" type="submit">
                  Submit
                </button>
              </label>
            </div>
          </form>
          <div className="contact-socials left-text full-wd m-v-1">
            {socials?.map(({ id, title, icon, link }) => (
              <a key={id} className="icon-btn footer-icon grey-text p-1" href={link}>
                <i className={icon} title={title} alt={title}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="m-t-3">Made with ❤️ by Neha Gupta</p>
    </footer>
  );
};
