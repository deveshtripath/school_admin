import React, { useMemo, useState } from "react";
import { demo } from "../../lib/demoData.js";
import Card from "../../components/ui/Card.jsx";
import DataTable from "../../components/ui/DataTable.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Pill from "../../components/ui/Pill.jsx";
import { Field, Select } from "../../components/ui/Field.jsx";

export default function ClassWisePerformanceReport() {
  const classOptions = useMemo(() => demo.classList, []);
  const [cls, setCls] = useState(classOptions[2]);

  return (
    <>
      <PageHead title="Class-Wise Performance Report" subtitle="Select a class and view student rankings (demo table)." />

      <Card title="Class Selector">
        <div className="formRow">
          <Field label="Class">
            <Select value={cls} onChange={(e) => setCls(e.target.value)}>
              {classOptions.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </Select>
          </Field>
          <Field label="Term">
            <Select defaultValue="Term 2">
              <option>Term 1</option>
              <option>Term 2</option>
            </Select>
          </Field>
        </div>
        <div className="muted" style={{ marginTop: 10 }}>
          Showing ranking for <b>{cls}</b> (demo).
        </div>
      </Card>

      <div style={{ marginTop: 16 }}>
        <Card title="Student Ranking Table">
          <DataTable columns={["Rank", "Student", "Score", "Indicator"]}>
            {demo.students.map((s, idx) => {
              const score = 90 - idx * 3;
              const tone = score >= 80 ? "ok" : score >= 70 ? "warn" : "danger";
              const label = score >= 80 ? "Strong" : score >= 70 ? "Average" : "At risk";
              return (
                <tr key={s.id}>
                  <td className="td">{idx + 1}</td>
                  <td className="td">
                    <b style={{ color: "rgba(255,255,255,0.9)" }}>{s.name}</b>
                    <div className="tdMuted">
                      {s.cls} • Roll {s.roll}
                    </div>
                  </td>
                  <td className="td">{score}%</td>
                  <td className="td">
                    <Pill tone={tone}>{label}</Pill>
                  </td>
                </tr>
              );
            })}
          </DataTable>
        </Card>
      </div>
    </>
  );
}

