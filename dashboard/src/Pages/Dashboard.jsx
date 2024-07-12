import notificationBell from "../assets/icons/notification-bell.svg";
import searchIcon from "../assets/icons/search.svg";
import profileImg from "../assets/profile-img.jpeg";
import Graphics from "../components/Graphics";
import Resume from "../components/Resume";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <header>
        <div className="account-info">
          <h1>Ola, Iuri</h1>
          <p>Aqui estão as informações sobre suas vendas.</p>
        </div>
        <div className="account-container">
          <div>
            <img src={searchIcon} alt="search icon" />
          </div>
          <div className="notification-bell">
            <img src={notificationBell} alt="notificaion bell icon" />
            <div className="notify-alert" />
          </div>
          <div className="profile-info">
            <img src={profileImg} alt="profile image" />
            <p>Iuri Silva</p>
          </div>
        </div>
      </header>
      <div className="graphics">
        <Graphics />
        <Resume />
      </div>
      <div className="resume"></div>
      <div className="buyer-list-container">
        <ul></ul>
      </div>
    </div>
  );
}
