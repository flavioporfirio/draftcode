import menuHamburguer from "./assets/menu-hamburguer.svg";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="menu">
        <img src={menuHamburguer} alt="menu icon" />
        <div className="separator" />
      </div>
      <div className="social-link">
        <a href="#">social</a>
        <div className="separator" />
      </div>
    </div>
  );
}
