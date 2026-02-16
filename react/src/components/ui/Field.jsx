import React from "react";

export function Field({ label, children }) {
  return (
    <div className="field">
      {label ? <label className="label">{label}</label> : null}
      {children}
    </div>
  );
}

export function Input(props) {
  return <input className="input" {...props} />;
}

export function Select(props) {
  return <select className="select" {...props} />;
}

export function Textarea(props) {
  return <textarea className="textarea" {...props} />;
}

