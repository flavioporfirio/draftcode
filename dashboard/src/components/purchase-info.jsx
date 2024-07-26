import "./purchase-info.css";

export function PurchaseInfo({ id, date, buyerName, state, price, situation }) {
  return (
    <div className="row-container">
      <tr className="row-container-data">
        <td>
          <p class="col-id">{id}</p>
          <p class="col-date">{date}</p>
          <p class="col-buyer">{buyerName}</p>
          <p class="col-state">{state}</p>
          <p class="col-price">R$ {price}</p>
          <div className="situation col-situation">
            <div
              className={
                situation === "Aprovado"
                  ? "approved"
                  : situation === "Em análise"
                  ? "pending"
                  : situation === "Reprovado"
                  ? "denied"
                  : ""
              }
            />
            <p>{situation}</p>
          </div>
        </td>
      </tr>
      <tr>
        <div className="separator" />
      </tr>
    </div>
  );
}
