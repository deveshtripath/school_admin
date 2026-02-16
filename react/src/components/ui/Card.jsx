import React from "react";

export default function Card({ title, right, children }) {
  return (
    <section className="card">
      {(title || right) && (
        <div className="cardHead">
          <h3 className="cardTitle">{title}</h3>
          {right ? <div>{right}</div> : null}
        </div>
      )}
      <div className="cardBody">{children}</div>
    </section>
  );
}

