import React from "react";
import IconButton from "./IconButton.jsx";

export default function Toast({ toast, onClose }) {
  if (!toast) return null;
  return (
    <div className="toast" role="status" aria-live="polite">
      <div className="toastMsg">
        <div className="toastTitle">{toast.title}</div>
        <div className="toastBody">{toast.body}</div>
      </div>
      <IconButton onClick={onClose} aria-label="Close toast">
        Close
      </IconButton>
    </div>
  );
}

