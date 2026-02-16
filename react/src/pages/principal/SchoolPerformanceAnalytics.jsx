import React from "react";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import ChartPlaceholder from "../../components/ui/ChartPlaceholder.jsx";
import Pill from "../../components/ui/Pill.jsx";
import StatCard from "../../components/ui/StatCard.jsx";

export default function SchoolPerformanceAnalytics() {
  return (
    <>
      <PageHead title="School Performance Analytics" subtitle="High-level performance indicators (placeholder graphs & cards)." />

      <div className="grid cols-3">
        <Card title="Overall Performance">
          <ChartPlaceholder label="Overall Score Trend (Placeholder)" />
        </Card>

        <Card title="Subject Performance">
          <div className="grid cols-2">
            <StatCard title="Math" value="78%" meta={<Pill tone="ok">Improving</Pill>} />
            <StatCard title="Science" value="74%" meta={<Pill tone="warn">Needs focus</Pill>} />
            <StatCard title="English" value="82%" meta={<Pill tone="ok">Stable</Pill>} />
            <StatCard title="Social" value="69%" meta={<Pill tone="warn">Mixed</Pill>} />
          </div>
        </Card>

        <Card title="Attendance Summary">
          <StatCard title="Attendance (Demo)" value="92%" meta={<Pill tone="ok">This month</Pill>} />
          <div style={{ marginTop: 12 }}>
            <ChartPlaceholder label="Attendance Trend (Placeholder)" />
          </div>
        </Card>
      </div>
    </>
  );
}

