import React, { useMemo, useState } from "react";
import { demo } from "../../lib/demoData.js";
import { useUI } from "../../lib/useUI.js";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import DataTable from "../../components/ui/DataTable.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Pill from "../../components/ui/Pill.jsx";
import Icon from "../../components/Icon.jsx";

export default function ExamResultFinalization() {
  const { pushToast } = useUI();
  const base = useMemo(
    () => Object.fromEntries(demo.students.map((s) => [s.id, { math: "", science: "", english: "" }])),
    []
  );
  const [marks, setMarks] = useState(base);

  function update(sid, key, value) {
    setMarks((prev) => ({ ...prev, [sid]: { ...prev[sid], [key]: value } }));
  }

  return (
    <>
      <PageHead
        title="Exam Result Finalization"
        subtitle="Enter marks and publish results (demo UI)."
        actions={
          <Button onClick={() => pushToast("Published (Demo)", "Results are published in UI only.")}>
            <Icon name="check" /> Publish Result
          </Button>
        }
      />

      <Card title="Student List & Marks Entry">
        <div className="muted" style={{ marginBottom: 10 }}>
          Placeholder inputs only; no database persistence.
        </div>
        <DataTable columns={["Student", "Math", "Science", "English", "Status"]}>
          {demo.students.map((s) => (
            <tr key={s.id}>
              <td className="td">
                <b style={{ color: "rgba(255,255,255,0.9)" }}>{s.name}</b>
                <div className="tdMuted">
                  ID: {s.id} • Roll {s.roll}
                </div>
              </td>
              <td className="td">
                <input
                  className="tdInput"
                  value={marks[s.id].math}
                  onChange={(e) => update(s.id, "math", e.target.value)}
                  placeholder="0-100"
                />
              </td>
              <td className="td">
                <input
                  className="tdInput"
                  value={marks[s.id].science}
                  onChange={(e) => update(s.id, "science", e.target.value)}
                  placeholder="0-100"
                />
              </td>
              <td className="td">
                <input
                  className="tdInput"
                  value={marks[s.id].english}
                  onChange={(e) => update(s.id, "english", e.target.value)}
                  placeholder="0-100"
                />
              </td>
              <td className="td">
                <Pill tone="ok">Draft</Pill>
              </td>
            </tr>
          ))}
        </DataTable>
      </Card>
    </>
  );
}

