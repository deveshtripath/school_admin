import React from "react";
import Button from "../components/ui/Button.jsx";
import NotificationCard from "../components/ui/NotificationCard.jsx";

export default function NotificationsMenu({ items, onClose }) {
  return (
    <div className="menu" role="menu" aria-label="Notifications">
      <div className="menuHead">
        <b>Notifications</b>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </div>
      <div className="menuBody">
        {items.map((n) => (
          <NotificationCard key={n.title} title={n.title} body={n.body} />
        ))}
        <div className="muted" style={{ fontSize: 12 }}>
          Demo only — notifications are static UI placeholders.
        </div>
      </div>
    </div>
  );
}

