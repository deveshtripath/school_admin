import React from "react";
import Card from "../../components/ui/Card.jsx";
import ChartPlaceholder from "../../components/ui/ChartPlaceholder.jsx";
import NotificationCard from "../../components/ui/NotificationCard.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Panel from "../../components/ui/Panel.jsx";

export default function AIMistakeAnalyzer() {
  return (
    <>
      <PageHead title="AI Mistake Analyzer" subtitle="See common mistake categories and feedback (UI only)." />

      <div className="grid cols-2">
        <Card title="Mistake Categories (Demo)">
          <div className="grid">
            <NotificationCard title="Concept Error" body="Revisit definitions and examples (Demo)." icon="spark" />
            <NotificationCard title="Calculation Slip" body="Double-check arithmetic and signs (Demo)." icon="spark" />
            <NotificationCard title="Skipped Steps" body="Show working to earn partial marks (Demo)." icon="spark" />
          </div>
        </Card>

        <Card title="Feedback Preview">
          <Panel title="Sample Feedback">
            <div className="muted" style={{ whiteSpace: "pre-wrap" }}>
              {`Q2: You applied the right formula, but missed unit conversion.\nTip: Convert km/h → m/s before substituting.\n\nNext: Attempt 10 mixed numericals (Demo).`}
            </div>
          </Panel>
          <div style={{ marginTop: 12 }}>
            <ChartPlaceholder label="Mistake Trend (Placeholder)" />
          </div>
        </Card>
      </div>
    </>
  );
}

