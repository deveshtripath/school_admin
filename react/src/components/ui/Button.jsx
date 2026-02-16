import React from "react";

export default function Button({ variant = "primary", className = "", ...props }) {
  const cls =
    variant === "secondary"
      ? `btn btnSecondary ${className}`
      : variant === "danger"
        ? `btn btnDanger ${className}`
        : `btn ${className}`;
  return <button className={cls} {...props} />;
}

