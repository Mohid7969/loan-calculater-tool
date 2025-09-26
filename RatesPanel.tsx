import React from "react";
import { useQuery } from "@tanstack/react-query";

const RATES_URL =
  "https://raw.githubusercontent.com/Mohid7969/Loan-Finance-Calculator/3476ce61cac0e6ae50ef4c03791022678959a971/rates.json";

async function fetchRates() {
  const res = await fetch(RATES_URL);
  if (!res.ok) throw new Error("Failed to fetch rates");
  return res.json();
}

export default function RatesPanel() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["rates"],
    queryFn: fetchRates,
    refetchInterval: 60000
  });

  if (isLoading) return <p>Loading rates...</p>;
  if (error) return <p>❌ Failed to load rates</p>;

  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px" }}>
      <h2 style={{ color: "#16a34a" }}>📊 Live Rates</h2>
      <ul>
        <li><b>SBP Rate:</b> {data.sbpRate}%</li>
        <li><b>KIBOR Rate:</b> {data.kiborRate}%</li>
        <li><b>Murabaha Rate:</b> {data.murabahaRate}%</li>
      </ul>
    </div>
  );
}