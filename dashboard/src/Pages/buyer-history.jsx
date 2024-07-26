import { PurchaseInfo } from "../components/purchase-info";
import "./buyer-history.css";

export function BuyerHistory() {
  return (
    <div className="buyer-history">
      <h1>Histórico de compradores</h1>
      <table>
        <thead>
          <tr>
            <th class="col-id">ID</th>
            <th class="col-date">Data</th>
            <th class="col-buyer">Nome</th>
            <th class="col-state">Localização</th>
            <th class="col-price">Valor</th>
            <th class="col-situation">Situação</th>
          </tr>
        </thead>
        <tbody>
          <PurchaseInfo
            id="#12345"
            date="02/08/2023"
            buyerName="Roberto Santos"
            state="Rio Grande do Sul"
            price="15,00"
            situation="Aprovado"
          />
          <PurchaseInfo
            id="#67890"
            date="03/08/2023"
            buyerName="Beatriz Rodrigues"
            state="Salvador"
            price="15,00"
            situation="Em análise"
          />
        </tbody>
      </table>
    </div>
  );
}
