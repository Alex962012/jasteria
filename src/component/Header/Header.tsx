import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
export const Header = () => {
  const [openBurger, setOpenBurger] = useState(false);
  return (
    <header>
      <div className="header-wrapper">
        <div className="header-content">
          <Link to="/" className="logo-container">
            <div className="logo"></div>
          </Link>
          <nav className={openBurger ? "header-nav active" : "header-nav"}>
            <Link
              to="/catalog"
              onClick={() => setOpenBurger(!openBurger)}
              className="nav-item"
            >
              Каталог
            </Link>
            <Link
              to="/about"
              onClick={() => setOpenBurger(!openBurger)}
              className="nav-item"
            >
              О бренде
            </Link>
            <Link
              to="/faq"
              onClick={() => setOpenBurger(!openBurger)}
              className="nav-item"
            >
              FAQ
            </Link>
            <Link
              to="/feedback"
              onClick={() => setOpenBurger(!openBurger)}
              className="nav-item"
            >
              Обратная связь
            </Link>
            <div className="number">
              <svg
                className="number-icon"
                height="50px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 50 50"
                width="50px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="none" height="50" width="50" />
                <path
                  d="M30.217,35.252c0,0,4.049-2.318,5.109-2.875  c1.057-0.559,2.152-0.7,2.817-0.294c1.007,0.616,9.463,6.241,10.175,6.739c0.712,0.499,1.055,1.924,0.076,3.32  c-0.975,1.396-5.473,6.916-7.379,6.857c-1.909-0.062-9.846-0.236-24.813-15.207C1.238,18.826,1.061,10.887,1,8.978  C0.939,7.07,6.459,2.571,7.855,1.595c1.398-0.975,2.825-0.608,3.321,0.078c0.564,0.781,6.124,9.21,6.736,10.176  c0.419,0.66,0.265,1.761-0.294,2.819c-0.556,1.06-2.874,5.109-2.874,5.109s1.634,2.787,7.16,8.312  C27.431,33.615,30.217,35.252,30.217,35.252z"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                />
              </svg>
              +797097979232
            </div>
          </nav>
          <div
            className={openBurger ? "menu-btn active" : "menu-btn"}
            onClick={() => setOpenBurger(!openBurger)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};
