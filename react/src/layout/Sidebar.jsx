import React from "react";
import { NavLink } from "react-router-dom";
import { demo } from "../lib/demoData.js";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import Icon from "../components/Icon.jsx";

export default function Sidebar({ navItems, onOpenRBAC, onLogout }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brandLogo" aria-hidden="true" />
        <div className="brandMeta">
          <div className="brandTitle">School Admin</div>
          <div className="brandSub">{demo.schoolName}</div>
        </div>
      </div>

      <nav className="nav" aria-label="Sidebar">
        <div className="navLabel">Navigation</div>
        {navItems.map((item) => (
          <NavLink
            key={item.key}
            to={item.to}
            className={({ isActive }) => (isActive ? "navItem navItemActive" : "navItem")}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebarFooter">
        <div className="statusRow">
          <Badge tone="success" label="Cloud" value="Secure (Demo)" />
          <Badge tone="info" label="Encryption" value="ON (Demo)" />
        </div>

        <div className="sidebarActions">
          <Button variant="secondary" onClick={onOpenRBAC}>
            <Icon name="shield" /> RBAC
          </Button>
          <Button variant="secondary" onClick={onLogout}>
            <Icon name="logout" /> Logout
          </Button>
        </div>
      </div>
    </aside>
  );
}

