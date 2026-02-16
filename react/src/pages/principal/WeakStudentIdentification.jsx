import React from "react";
import { demo } from "../../lib/demoData.js";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import NotificationCard from "../../components/ui/NotificationCard.jsx";
import ChartPlaceholder from "../../components/ui/ChartPlaceholder.jsx";
import Pill from "../../components/ui/Pill.jsx";

export default function WeakStudentIdentification() {
  const list = demo.students.slice(0, 6);
  return (
    <>
      <PageHead title="Weak Student Identification" subtitle="Identify at-risk students with warning indicators (UI placeholders)." />

      <div className="grid cols-2">
        <Card title="At-Risk Student List">
          <div className="grid">
            {list.map((s, i) => (
              <NotificationCard
                key={s.id}
                title={s.name}
                body={i % 2 ? "Performance warning: Low consistency (Demo)." : "Performance warning: Attendance risk (Demo)."}
                icon="flag"
              />
            ))}
          </div>
        </Card>

        <Card title="Performance Warning Indicators">
          <div className="muted">
            <div style={{ marginBottom: 8 }}>
              <Pill tone="danger">High risk</Pill> — multiple low scores + absences
            </div>
            <div style={{ marginBottom: 8 }}>
              <Pill tone="warn">Medium risk</Pill> — subject-specific weakness
            </div>
            <div>
              <Pill tone="ok">Stable</Pill> — consistent performance
            </div>
          </div>
          <div style={{ marginTop: 12 }}>
            <ChartPlaceholder label="Risk Trend (Placeholder)" />
          </div>
        </Card>
      </div>
    </>
  );
}

