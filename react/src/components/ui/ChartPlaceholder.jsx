import React from "react";

export default function ChartPlaceholder({ label }) {
  return (
    <div className="chart" aria-label={label}>
      <div className="chartLabel">{label}</div>
    </div>
  );
}

