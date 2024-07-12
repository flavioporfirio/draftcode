import TransationBox from "./TransactionBox";
import "./resume.css";

export default function Resume() {
  return (
    <div className="resume">
      <h1>Histórico de transações</h1>
      <div className="transaction-box-container">
        <TransationBox day="Ontem" value="-540,32" />
        <TransationBox day="Quinta-feira" value="-273,90" />
        <TransationBox day="Segunda-feira" value="-1.456,20" />
      </div>
    </div>
  );
}
