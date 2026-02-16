import React from "react";
import { useUI } from "../../lib/useUI.js";
import { demo } from "../../lib/demoData.js";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import ChartPlaceholder from "../../components/ui/ChartPlaceholder.jsx";
import DataTable from "../../components/ui/DataTable.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Pill from "../../components/ui/Pill.jsx";
import Icon from "../../components/Icon.jsx";

export default function SubjectWiseMarksReport() {
  const { pushToast } = useUI();
  return (
    <>
      <PageHead
        title="Subject-Wise Marks Report"
        subtitle="Marks table with performance indicators (demo)."
        actions={
          <Button variant="secondary" onClick={() => pushToast("Download (Demo)", "This is a UI placeholder; no file is generated.")}>
            <Icon name="download" /> Download Report
          </Button>
        }
      />

      <div className="grid cols-2">
        <Card title="Marks Table">
          <DataTable columns={["Subject", "Marks", "Indicator"]}>
            {demo.subjects.map((s, i) => {
              const score = 84 - i * 4;
              const tone = score >= 80 ? "ok" : "warn";
              return (
                <tr key={s}>
                  <td className="td">
                    <b style={{ color: "rgba(255,255,255,0.9)" }}>{s}</b>
                  </td>
                  <td className="td">{score}</td>
                  <td className="td">
                    <Pill tone={tone}>{tone === "ok" ? "Good" : "Focus"}</Pill>
                  </td>
                </tr>
              );
            })}
          </DataTable>
        </Card>
        <Card title="Performance Graph">
          <ChartPlaceholder label="Subject Comparison (Placeholder)" />
        </Card>
      </div>
    </>
  );
}

