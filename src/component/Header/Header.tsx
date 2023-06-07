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
              to="/"
              onClick={() => setOpenBurger(!openBurger)}
              className="nav-item"
            >
              Главная
            </Link>
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
