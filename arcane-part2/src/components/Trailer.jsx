import playButton from "../assets/play-button.svg";
import "./trailer.css";

export default function Trailer({ trailerNumber, bgImg }) {
  return (
    <div className="trailer" style={{ backgroundImage: `url("${bgImg}")` }}>
      <img src={playButton} alt="trailer background" />
      <p>{trailerNumber}</p>
    </div>
  );
}
