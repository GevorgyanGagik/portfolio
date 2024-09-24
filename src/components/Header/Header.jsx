import { NavLink } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import "./header.scss";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container container">
        <NavLink className="header__logo" to="/">
          PMTD
        </NavLink>
        <ul className="header__content">
          <li>
            <NavLink to="">Book a demo</NavLink>
          </li>
          <li>
            <NavLink to="">API</NavLink>
          </li>
          <li>
            <NavLink to="">Features</NavLink>
          </li>
          <li>
            <NavLink to="">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="">Contacts</NavLink>
          </li>
        </ul>
        <div className="header__btns">
          <button className="black__btn">Contact Us</button>
          <button className="green__btn">Get Started</button>
        </div>
        {!isOpen && (
          <div className="header__hamburger">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        )}
        {isOpen && (
          <div className="modal">
            <div className="header__hamburger modal__brg">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <ul className="modal__desc">
              <li>Book a demo</li>
              <li>API</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Contacts</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
