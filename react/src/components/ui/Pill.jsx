import React from "react";

export default function Pill({ tone = "info", children }) {
  const dotClass = tone === "ok" ? "dot dotOk" : tone === "warn" ? "dot dotWarn" : tone === "danger" ? "dot dotDanger" : "dot";
  return (
    <span className="pill">
      <span className={dotClass} />
      {children}
    </span>
  );
}

