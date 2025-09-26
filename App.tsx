import React from "react";
import LoanCalculator from "./components/LoanCalculator";
import RatesPanel from "./components/RatesPanel";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#2563eb" }}>
        Loan & Finance Calculator
      </h1>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ flex: 1 }}>
          <LoanCalculator />
        </div>
        <div style={{ flex: 1 }}>
          <RatesPanel />
        </div>
      </div>
    </div>
  );
}