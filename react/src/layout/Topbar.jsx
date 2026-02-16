import React from "react";
import Badge from "../components/ui/Badge.jsx";
import IconButton from "../components/ui/IconButton.jsx";
import Icon from "../components/Icon.jsx";

export default function Topbar({
  roleLabel,
  pageTitle,
  onToggleDrawer,
  onToggleNotifs,
  notifOpen,
  onOpenRBAC,
  onLogout,
  children
}) {
  return (
    <header className="topbar">
      <div className="crumbs">
        <IconButton className="mobileOnly" onClick={onToggleDrawer} aria-label="Open menu">
          <Icon name="menu" />
        </IconButton>
        <span className="rolePill">{roleLabel}</span>
        <span className="pageTitle">{pageTitle}</span>
      </div>

      <div className="topbarRight">
        <span className="desktopOnly">
          <Badge tone="success" label="Secure Cloud Storage" value="Connected" />
        </span>
        <span className="desktopOnly">
          <Badge tone="info" label="Data Encryption" value="Enabled" />
        </span>

        <div style={{ position: "relative" }}>
          <IconButton onClick={onToggleNotifs} aria-label="Notifications">
            <Icon name="bell" />
          </IconButton>
          {notifOpen ? children : null}
        </div>

        <IconButton onClick={onOpenRBAC} aria-label="RBAC">
          <Icon name="shield" />
        </IconButton>
        <IconButton onClick={onLogout} aria-label="Logout">
          <Icon name="logout" />
        </IconButton>
      </div>
    </header>
  );
}

