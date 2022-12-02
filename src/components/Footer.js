import logo from "../assets/logo_white.png";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} className="logo-kasa-white" alt="logo kasa white" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
