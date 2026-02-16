import React from "react";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import NotificationCard from "../../components/ui/NotificationCard.jsx";

export default function ParentWeakAreaReport() {
  const levels = ["l2", "l3", "l2", "l4", "l1", "l3", "l2", "l2", "l4", "l3", "l1", "l2", "l3", "l2", "l2", "l1"];
  return (
    <>
      <PageHead title="Weak Area Report" subtitle="Weak topics and recommended focus areas (UI placeholders)." />

      <div className="grid cols-2">
        <Card title="Weak Topics (Demo)">
          <div className="grid">
            <NotificationCard title="Fractions" body="Low accuracy on word problems (Demo)." icon="flag" />
            <NotificationCard title="Motion" body="Needs concept clarity + numericals practice (Demo)." icon="flag" />
            <NotificationCard title="Grammar: Tenses" body="Revise rules + attempt 10 practice questions (Demo)." icon="flag" />
          </div>
        </Card>
        <Card title="Heatmap (Placeholder)">
          <div className="muted" style={{ marginBottom: 10 }}>
            Darker = weaker (demo)
          </div>
          <div className="heatmap" aria-label="Heatmap placeholder">
            {levels.map((l, idx) => (
              <div key={idx} className={`heatCell ${l}`} />
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

