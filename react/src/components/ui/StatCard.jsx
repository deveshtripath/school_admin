import React from "react";
import Card from "./Card.jsx";

export default function StatCard({ title, value, meta }) {
  return (
    <Card title={title}>
      <div className="statValue">{value}</div>
      <div className="statLabel">{meta}</div>
    </Card>
  );
}

