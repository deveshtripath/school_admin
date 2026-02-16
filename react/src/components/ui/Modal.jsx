import React from "react";
import IconButton from "./IconButton.jsx";

export default function Modal({ title, children, onClose }) {
  return (
    <div className="modalBackdrop" onMouseDown={onClose} role="presentation">
      <div className="modal" role="dialog" aria-modal="true" aria-label={title} onMouseDown={(e) => e.stopPropagation()}>
        <div className="modalHead">
          <b>{title}</b>
          <IconButton onClick={onClose} aria-label="Close">
            Close
          </IconButton>
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
}

