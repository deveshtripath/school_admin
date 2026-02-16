import React, { useEffect, useMemo, useRef, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ROLE, ROLE_KEYS, DEFAULT_ROUTE } from "../lib/config.js";
import { clearRole, loadRole } from "../lib/storage.js";
import { demo } from "../lib/demoData.js";
import { navForRole } from "../lib/nav.js";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import NotificationsMenu from "./NotificationsMenu.jsx";
import RBACModal from "./RBACModal.jsx";
import Toast from "../components/ui/Toast.jsx";

function safeRoleKey(key) {
  return ROLE_KEYS.includes(key) ? key : null;
}

export default function RoleShell({ roleKey }) {
  const navigate = useNavigate();
  const location = useLocation();
  const storedRole = safeRoleKey(loadRole());

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [rbacOpen, setRbacOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(0);

  const navItems = useMemo(() => navForRole(roleKey), [roleKey]);
  const activeItem = useMemo(() => navItems.find((i) => location.pathname === i.to) || navItems[0], [navItems, location.pathname]);

  useEffect(() => {
    setDrawerOpen(false);
    setNotifOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function onKeydown(e) {
      if (e.key !== "Escape") return;
      setRbacOpen(false);
      setNotifOpen(false);
      setDrawerOpen(false);
    }
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, []);

  function pushToast(title, body) {
    window.clearTimeout(toastTimer.current);
    setToast({ title, body });
    toastTimer.current = window.setTimeout(() => setToast(null), 2800);
  }

  function logout() {
    clearRole();
    pushToast("Logged out", "Returned to login screen (demo).");
    navigate("/login", { replace: true });
  }

  const roleLabel = ROLE[roleKey] || "Role";

  if (!storedRole) return <Navigate to="/login" replace />;
  if (storedRole !== roleKey) return <Navigate to={DEFAULT_ROUTE[storedRole] || "/login"} replace />;

  return (
    <>
      <div className="shell">
        <Sidebar navItems={navItems} onOpenRBAC={() => setRbacOpen(true)} onLogout={logout} />
        <div className="main">
          <Topbar
            roleLabel={roleLabel}
            pageTitle={activeItem?.label || "Dashboard"}
            onToggleDrawer={() => setDrawerOpen((v) => !v)}
            onToggleNotifs={() => setNotifOpen((v) => !v)}
            notifOpen={notifOpen}
            onOpenRBAC={() => setRbacOpen(true)}
            onLogout={logout}
          >
            <NotificationsMenu items={demo.notifications} onClose={() => setNotifOpen(false)} />
          </Topbar>

          <main className="content">
            <Outlet context={{ pushToast }} />
          </main>
        </div>
      </div>

      {/* Mobile drawer */}
      {drawerOpen ? <div className="overlay" onMouseDown={() => setDrawerOpen(false)} role="presentation" /> : null}
      <div className={`drawer ${drawerOpen ? "drawerOpen" : ""}`}>
        <Sidebar navItems={navItems} onOpenRBAC={() => setRbacOpen(true)} onLogout={logout} />
      </div>

      {rbacOpen ? <RBACModal onClose={() => setRbacOpen(false)} /> : null}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </>
  );
}

