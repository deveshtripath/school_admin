import React from "react";

export default function IconButton({ className = "", ...props }) {
  return <button className={`iconBtn ${className}`} {...props} />;
}

