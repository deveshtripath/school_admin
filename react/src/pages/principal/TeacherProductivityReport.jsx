import React from "react";
import { demo } from "../../lib/demoData.js";
import Card from "../../components/ui/Card.jsx";
import DataTable from "../../components/ui/DataTable.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Pill from "../../components/ui/Pill.jsx";

export default function TeacherProductivityReport() {
  return (
    <>
      <PageHead title="Teacher Productivity Report" subtitle="Track activity and outputs (demo counts)." />

      <Card title="Teacher Activity Table">
        <DataTable columns={["Teacher", "Papers Generated Count", "Evaluations Completed Count", "Indicator"]}>
          {demo.teachers.map((t, i) => {
            const papers = 8 + i * 2;
            const evals = 24 + i * 6;
            const tone = i % 2 ? "ok" : "warn";
            return (
              <tr key={t.name}>
                <td className="td">
                  <b style={{ color: "rgba(255,255,255,0.9)" }}>{t.name}</b>
                  <div className="tdMuted">{t.subject}</div>
                </td>
                <td className="td">{papers}</td>
                <td className="td">{evals}</td>
                <td className="td">
                  <Pill tone={tone}>{tone === "ok" ? "On track" : "Review"}</Pill>
                </td>
              </tr>
            );
          })}
        </DataTable>
      </Card>
    </>
  );
}

