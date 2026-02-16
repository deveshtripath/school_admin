import React, { useMemo, useState } from "react";
import { demo } from "../../lib/demoData.js";
import { useUI } from "../../lib/useUI.js";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import DataTable from "../../components/ui/DataTable.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Badge from "../../components/ui/Badge.jsx";
import Icon from "../../components/Icon.jsx";

export default function AttendanceManagement() {
  const { pushToast } = useUI();
  const initial = useMemo(() => Object.fromEntries(demo.students.map((s, i) => [s.id, i % 5 !== 0])), []);
  const [present, setPresent] = useState(initial);

  function toggle(sid) {
    setPresent((p) => ({ ...p, [sid]: !p[sid] }));
  }

  return (
    <>
      <PageHead
        title="Attendance Management"
        subtitle="Mark present/absent for today (demo toggles)."
        actions={
          <Button onClick={() => pushToast("Saved (Demo)", "Attendance saved in UI only.")}>
            <Icon name="check" /> Save Attendance
          </Button>
        }
      />

      <Card title="Student List">
        <div className="muted" style={{ marginBottom: 10 }}>
          Toggle buttons are UI-only. “Bunk detection” labels are placeholders.
        </div>
        <DataTable columns={["Student", "Present / Absent", "Bunk Detection"]}>
          {demo.students.map((s, idx) => (
            <tr key={s.id}>
              <td className="td">
                <b style={{ color: "rgba(255,255,255,0.9)" }}>{s.name}</b>
                <div className="tdMuted">Roll {s.roll}</div>
              </td>
              <td className="td">
                <Button variant="secondary" onClick={() => toggle(s.id)}>
                  {present[s.id] ? "Present" : "Absent"}
                </Button>
              </td>
              <td className="td">
                {idx % 4 === 0 ? <Badge tone="warn" label="Bunk detection" value="Flag" /> : <Badge tone="info" label="Status" value="Normal" />}
              </td>
            </tr>
          ))}
        </DataTable>
      </Card>
    </>
  );
}

