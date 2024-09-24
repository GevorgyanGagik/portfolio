import { NavLink } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        className="footer__img"
        src="https://payxtoday.com/images/PAY-logo-mini-cut.png"
        alt="logo"
      />
      <ul className="footer__desc">
        <li>
          <NavLink to="">API</NavLink>
        </li>
        <li>
          <NavLink to="/secAndComp">Security and compliance</NavLink>
        </li>
        <li>
          <NavLink to="">Contacts</NavLink>
        </li>
      </ul>
      <div className="footer__links">
        <NavLink to="">
          <img
            src="https://payxtoday.com/images/footer_facebook.svg"
            alt="image"
          />
        </NavLink>
        <NavLink to="">
          <img
            src="https://payxtoday.com/images/footer_tviter.svg"
            alt="image"
          />
        </NavLink>
        <NavLink to="">
          <img
            src="https://payxtoday.com/images/footer_youtube.svg"
            alt="image"
          />
        </NavLink>
        <NavLink to="">
          <img
            src="https://payxtoday.com/images/footer_instagram.svg"
            alt="image"
          />
        </NavLink>
        <NavLink to="">
          <img src="https://payxtoday.com/images/footer_in.svg" alt="image" />
        </NavLink>
      </div>
      <div className="footer__second__desc">
        <p>Privacy</p>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
