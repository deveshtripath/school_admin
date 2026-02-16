import React from "react";

export default function PageHead({ title, subtitle, actions }) {
  return (
    <div className="pageHead">
      <div>
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {actions ? <div className="pageActions">{actions}</div> : null}
    </div>
  );
}

