import React from "react";
import Modal from "../components/ui/Modal.jsx";
import Card from "../components/ui/Card.jsx";
import Badge from "../components/ui/Badge.jsx";
import DataTable from "../components/ui/DataTable.jsx";

export default function RBACModal({ onClose }) {
  const matrix = [
    { feature: "Lesson Plan / Homework Generators", teacher: "Full", principal: "View", parent: "—", student: "—" },
    { feature: "Paper / Answer Key Generators", teacher: "Full", principal: "View", parent: "—", student: "—" },
    { feature: "AI Copy Checking (UI)", teacher: "Full", principal: "Audit", parent: "—", student: "—" },
    { feature: "Results Finalization / Publish (UI)", teacher: "Full", principal: "Approve", parent: "View", student: "View" },
    { feature: "Analytics & Reports", teacher: "View", principal: "Full", parent: "View", student: "View" },
    { feature: "Academic Calendar Management", teacher: "View", principal: "Full", parent: "View", student: "View" }
  ];

  return (
    <Modal title="Role-Based Access Control (UI)" onClose={onClose}>
      <Card
        title="Access Matrix (Placeholder)"
        right={
          <div className="statusRow">
            <Badge tone="success" label="Storage" value="Secure (Demo)" />
            <Badge tone="info" label="Encryption" value="Enabled (Demo)" />
          </div>
        }
      >
        <div className="muted" style={{ marginBottom: 10 }}>
          Frontend-only view of an RBAC policy table (no backend enforcement).
        </div>
        <DataTable columns={["Feature", "Teacher", "Principal", "Parent", "Student"]} minWidth={900}>
          {matrix.map((r) => (
            <tr key={r.feature}>
              <td className="td">
                <b style={{ color: "rgba(255,255,255,0.9)" }}>{r.feature}</b>
              </td>
              <td className="td tdMuted">{r.teacher}</td>
              <td className="td tdMuted">{r.principal}</td>
              <td className="td tdMuted">{r.parent}</td>
              <td className="td tdMuted">{r.student}</td>
            </tr>
          ))}
        </DataTable>
      </Card>

      <div className="grid cols-3" style={{ marginTop: 14 }}>
        <Card title="Secure Cloud Storage">
          <div className="statusRow">
            <Badge tone="success" label="Status" value="Connected (Demo)" />
          </div>
        </Card>
        <Card title="Data Encryption">
          <div className="statusRow">
            <Badge tone="info" label="Status" value="Enabled (Demo)" />
          </div>
        </Card>
        <Card title="Audit Trail">
          <div className="muted">UI placeholder for logs & audit (not implemented).</div>
        </Card>
      </div>
    </Modal>
  );
}

