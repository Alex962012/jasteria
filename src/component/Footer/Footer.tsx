import "./Footer.css";
export const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-content">
          <ul className="social-container">
            <a
              href="https://instagram.com/j.asteria13?igshid=MzRlODBiNWFlZA=="
              className="footer-item"
            >
              <li className="footer-icon">
              <div className="icon-instagram  icon-footer-size"></div>
              </li>
            </a>
            <a href="https://wa.me/79247354213" className="footer-item">
              <li className="footer-icon ">
              <div className="icon-whatsapp icon-footer-size"></div>
              </li>
            </a>
            <a href="https://t.me/j_asteria" className="footer-item">
              <li className="footer-icon icon">
              <div className="icon-telegram  icon-footer-size"></div>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};
