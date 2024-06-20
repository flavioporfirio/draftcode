import bell from "./assets/bell.svg";
import Button from "./components/Button";
import "./info.css";

export default function Info() {
  return (
    <div className="serie-info">
      <div className="info-container">
        <div className="title">
          <h1>Arcane</h1>
          <h1>parte 2</h1>
        </div>
        <div className="notify">
          <Button padding="1.2rem 3.2rem 1.2rem 3.2rem" btnColor="#0080c8">
            <img src={bell} alt="bell icon" />
            <p>avise-me</p>
          </Button>
          <Button
            padding="1.2rem 3.2rem 1.2rem 3.2rem"
            type="false"
            btnColor="none"
          >
            adicionar na lista
          </Button>
        </div>
      </div>

      <div className="socials">
        <a href="#">Instagram</a>
        <a href="#"> twitter</a>
        <a href="#">facebook</a>
      </div>
    </div>
  );
}
