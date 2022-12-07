import logo from "../assets/logo.png";
import "../Styles/Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo-kasa" alt="logo kasa" />
      <nav>
        <ul>
          <li>Accueil</li>
          <li>A Propos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
