import dashboardIcon from "../assets/icons/dashboard-icon.svg";
import powerIcon from "../assets/icons/power-icon.svg";
import settingsIcon from "../assets/icons/settings-icon.svg";
import shoppingCartIcon from "../assets/icons/shopping-cart-icon.svg";
import suportIcon from "../assets/icons/suport-icon.svg";
import walletIcon from "../assets/icons/wallet-icon.svg";
import Button from "../components/Button";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>
          <span>e</span>Front
        </h1>
      </div>
      <nav className="nav">
        <a href="#">
          <Button active={true}>
            <img src={dashboardIcon} alt="dashboard icon" /> <p>Dashboard</p>
          </Button>
        </a>
        <a href="#">
          <Button>
            <img src={walletIcon} alt="dashboard icon" /> <p>Carteira</p>
          </Button>
        </a>
        <a href="#">
          <Button>
            <img src={shoppingCartIcon} alt="dashboard icon" />{" "}
            <p>Transações</p>
          </Button>
        </a>
        <a href="#">
          <Button>
            <img src={suportIcon} alt="dashboard icon" /> <p>Suporte</p>
          </Button>
        </a>
        <div className="separator" />
        <a href="#">
          <Button>
            <img src={settingsIcon} alt="dashboard icon" /> <p>Ajustes</p>
          </Button>
        </a>
        <a href="#">
          <Button bgColor="#F03D3D0F" color="#F03D3D">
            <img src={powerIcon} alt="dashboard icon" /> <p>Desconectar</p>
          </Button>
        </a>
      </nav>
    </div>
  );
}
