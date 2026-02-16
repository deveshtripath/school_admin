import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DEFAULT_ROUTE, ROLE } from "../lib/config.js";
import { demo } from "../lib/demoData.js";
import { saveRole } from "../lib/storage.js";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import PageHead from "../components/ui/PageHead.jsx";
import Panel from "../components/ui/Panel.jsx";
import { Field, Input, Select } from "../components/ui/Field.jsx";
import RBACModal from "../layout/RBACModal.jsx";
import Toast from "../components/ui/Toast.jsx";
import Icon from "../components/Icon.jsx";

export default function Login() {
  const navigate = useNavigate();
  const [roleKey, setRoleKey] = useState("teacher");
  const [rbacOpen, setRbacOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const roleOptions = useMemo(
    () => [
      { value: "teacher", label: ROLE.teacher },
      { value: "principal", label: ROLE.principal },
      { value: "parent", label: ROLE.parent },
      { value: "student", label: ROLE.student }
    ],
    []
  );

  function pushToast(title, body) {
    setToast({ title, body });
    window.setTimeout(() => setToast(null), 2600);
  }

  function onLogin() {
    saveRole(roleKey);
    pushToast("Login (Demo)", `Signed in as ${ROLE[roleKey]}.`);
    navigate(DEFAULT_ROUTE[roleKey], { replace: true });
  }

  return (
    <div className="authWrap">
      <div className="authGrid">
        <div className="hero">
          <h1 className="heroTitle">{demo.schoolName}</h1>
          <p className="heroText">
            Frontend-only school management platform UI (demo). Includes role-based dashboards, navigation flow, reusable
            components, and placeholder data — no backend, no database, no real AI.
          </p>

          <div className="grid" style={{ marginTop: 16 }}>
            <Card title="System Status">
              <div className="statusRow">
                <Badge tone="success" label="Secure Cloud Storage" value="Connected (Demo)" />
                <Badge tone="info" label="Data Encryption" value="Enabled (Demo)" />
                <Badge tone="warn" label="RBAC Policy" value="UI Only" />
              </div>
              <div className="muted" style={{ marginTop: 10 }}>
                Tip: Select a role and click <b>Login</b> to jump directly into that role’s dashboard.
              </div>
            </Card>

            <Card title="What you can explore">
              <div className="grid cols-2">
                <Panel title="Teacher (Admin)">
                  <div className="muted">Lesson plans, papers, answer keys, copy checking UI, attendance, results.</div>
                </Panel>
                <Panel title="Principal / Management">
                  <div className="muted">Analytics, weak student list, teacher productivity, calendar management.</div>
                </Panel>
                <Panel title="Parent">
                  <div className="muted">Marks & graphs, attendance %, homework tracker, PTM and announcements.</div>
                </Panel>
                <Panel title="Student">
                  <div className="muted">Personal dashboard, progress, practice generator, quiz UI, feedback preview.</div>
                </Panel>
              </div>
            </Card>
          </div>
        </div>

        <div className="login">
          <PageHead title="Login" subtitle="Demo behavior: clicking Login immediately signs you in (UI only) and routes by role." />

          <div className="form">
            <Field label="Email">
              <Input type="email" placeholder="demo@school.com" defaultValue="demo@school.com" />
            </Field>
            <Field label="Password">
              <Input type="password" placeholder="••••••••" defaultValue="demopass" />
            </Field>
            <Field label="Role">
              <Select value={roleKey} onChange={(e) => setRoleKey(e.target.value)}>
                {roleOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </Select>
            </Field>

            <div className="statusRow" style={{ justifyContent: "flex-start", marginTop: 4 }}>
              <Button onClick={onLogin}>
                <Icon name="spark" /> Login
              </Button>
              <Button variant="secondary" onClick={() => setRbacOpen(true)}>
                <Icon name="shield" /> View RBAC
              </Button>
            </div>

            <div className="muted" style={{ fontSize: 12 }}>
              This login is UI-only: no validation, no server calls.
            </div>
          </div>
        </div>
      </div>

      {rbacOpen ? <RBACModal onClose={() => setRbacOpen(false)} /> : null}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}

