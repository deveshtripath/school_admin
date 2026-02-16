import React from "react";

export default function Panel({ title, children }) {
  return (
    <div className="panel">
      {title ? <div className="panelTitle">{title}</div> : null}
      {children}
    </div>
  );
}

