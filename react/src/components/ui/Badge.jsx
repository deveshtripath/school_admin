import React from "react";

export default function Badge({ tone = "default", label, value }) {
  const toneClass =
    tone === "success"
      ? "badge badgeSuccess"
      : tone === "info"
        ? "badge badgeInfo"
        : tone === "warn"
          ? "badge badgeWarn"
          : tone === "danger"
            ? "badge badgeDanger"
            : "badge";

  return (
    <span className={toneClass}>
      <b>{label}</b> {value}
    </span>
  );
}

