import React from "react";
import Icon from "../Icon.jsx";

export default function NotificationCard({ title, body, icon = "bell" }) {
  return (
    <div className="notif">
      <div className="stamp" aria-hidden="true">
        <Icon name={icon} />
      </div>
      <div className="notifText">
        <div className="notifTitle">{title}</div>
        <div className="notifBody">{body}</div>
      </div>
    </div>
  );
}

