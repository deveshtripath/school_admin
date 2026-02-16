import React from "react";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import ChartPlaceholder from "../../components/ui/ChartPlaceholder.jsx";

export default function TermComparisonDashboard() {
  return (
    <>
      <PageHead title="Term Comparison Dashboard" subtitle="Term 1 vs Term 2 comparison (graph placeholders)." />

      <div className="grid cols-2">
        <Card title="Term 1 vs Term 2">
          <ChartPlaceholder label="Term Comparison (Placeholder)" />
        </Card>
        <Card title="Highlights (Demo)">
          <div className="muted">
            • Math improved by <b>+6%</b> (demo)
            <br />• Science unchanged (demo)
            <br />• Attendance improved by <b>+2%</b> (demo)
          </div>
          <div style={{ marginTop: 12 }}>
            <ChartPlaceholder label="Attendance Comparison (Placeholder)" />
          </div>
        </Card>
      </div>
    </>
  );
}

