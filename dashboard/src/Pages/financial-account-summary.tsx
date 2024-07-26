import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";
import { FinanceAccountInfo } from "../components/finance-account-info";
import "./financial-account-summary.css";

export function FinancialAccountSummary() {
  return (
    <div className="financial-account-summary">
      <FinanceAccountInfo>
        <h3>Total de vendas</h3>
        <span>R$ 3.265,21</span>
        <div className="status-container">
          <TrendingUp size="18px" color="#0BB07B" />
          <p>+11%</p>
        </div>
      </FinanceAccountInfo>
      <FinanceAccountInfo>
        <h3>Total líquido</h3>
        <span>R$ 2.825,58</span>
        <div className="status-container">
          <TrendingUp size="18px" color="#0BB07B" />
          <p>+15%</p>
        </div>
      </FinanceAccountInfo>
      <FinanceAccountInfo>
        <h3>Compras canceladas</h3>
        <span>R$ 130,00</span>
        <div className="status-container trending-down">
          <TrendingDown size="18px" color="#F03D3D" />
          <p> -80%</p>
        </div>
      </FinanceAccountInfo>
      <FinanceAccountInfo>
        <h3>Reembolsos</h3>
        <span>R$ 345,00</span>
        <div className="status-container trending-down">
          <TrendingDown size="18px" color="#F03D3D" />
          <p> -78%</p>
        </div>
      </FinanceAccountInfo>
    </div>
  );
}
