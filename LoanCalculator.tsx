import React, { useState } from "react";

export default function LoanCalculator() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(5);

  const monthlyRate = rate / 100 / 12;
  const months = years * 12;
  const emi =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px" }}>
      <h2 style={{ color: "#dc2626" }}>🧮 Loan Calculator</h2>
      <label>
        Loan Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <br /><br />
      <label>
        Interest Rate (%):
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(+e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <br /><br />
      <label>
        Years:
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(+e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <br /><br />
      <h3>
        Monthly Installment (EMI):{" "}
        <span style={{ color: "#2563eb" }}>
          {emi.toFixed(2)} PKR
        </span>
      </h3>
    </div>
  );
}