import trailer1 from "./assets/trailers/trailer1.jpeg";
import trailer2 from "./assets/trailers/trailer2.jpeg";
import Button from "./components/Button";
import Trailer from "./components/Trailer";
import "./subscribe.css";

export default function Subscribe() {
  return (
    <div>
      <div className="entry-option">
        <Button btnColor="#0080c8" padding="0.8rem 3.2rem 0.8rem 3.2rem">
          inscreva-se
        </Button>
        <Button
          btnColor="none"
          padding="0.8rem 3.2rem 0.8rem 3.2rem"
          type="false"
        >
          entrar
        </Button>
      </div>
      <div className="trailer-container">
        <h3>trailers</h3>
        <ul className="trailer-list">
          <li>
            <a href="">
              <Trailer trailerNumber="#1" bgImg={trailer1} />
            </a>
          </li>
          <li>
            <a href="">
              <Trailer trailerNumber="#2" bgImg={trailer2} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
