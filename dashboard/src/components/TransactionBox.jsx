import "./transaction-box.css";

export default function TransationBox({ day, value }) {
  return (
    <div className="transaction-box">
      <p>{day}</p>
      <p>R$ {value}</p>
    </div>
  );
}
