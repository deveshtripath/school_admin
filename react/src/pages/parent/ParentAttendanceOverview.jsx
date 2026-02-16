import React from "react";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import ChartPlaceholder from "../../components/ui/ChartPlaceholder.jsx";
import Badge from "../../components/ui/Badge.jsx";
import Pill from "../../components/ui/Pill.jsx";

export default function ParentAttendanceOverview() {
  return (
    <>
      <PageHead title="Attendance Overview" subtitle="Attendance percentage, trend graph, and alerts (demo)." />

      <div className="grid cols-2">
        <Card title="Attendance Percentage">
          <div className="statValue">93%</div>
          <div className="statLabel">
            <Pill tone="ok">On track (Demo)</Pill>
          </div>
          <div className="statusRow" style={{ marginTop: 12 }}>
            <Badge tone="info" label="Late Arrivals" value="2 (Demo)" />
            <Badge tone="warn" label="Absences" value="1 (Demo)" />
          </div>
        </Card>
        <Card title="Trend Graph">
          <ChartPlaceholder label="Attendance Over Time (Placeholder)" />
        </Card>
      </div>
    </>
  );
}

