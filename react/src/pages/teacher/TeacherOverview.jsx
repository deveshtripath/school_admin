import React from "react";
import { Link } from "react-router-dom";
import { demo } from "../../lib/demoData.js";
import Badge from "../../components/ui/Badge.jsx";
import Card from "../../components/ui/Card.jsx";
import NotificationCard from "../../components/ui/NotificationCard.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Pill from "../../components/ui/Pill.jsx";
import StatCard from "../../components/ui/StatCard.jsx";
import Button from "../../components/ui/Button.jsx";
import ChartPlaceholder from "../../components/ui/ChartPlaceholder.jsx";

export default function TeacherOverview() {
  return (
    <>
      <PageHead
        title="Dashboard Overview"
        subtitle="Quick snapshot of your classes, upcoming tasks, and AI-assisted tools (UI only)."
        actions={<Badge tone="warn" label={demo.termLabel} value="Active" />}
      />

      <div className="kpiGrid">
        <StatCard title="Classes Assigned" value="4" meta={<Pill tone="ok">Up to date</Pill>} />
        <StatCard title="Papers Generated (Demo)" value="12" meta={<Pill tone="ok">This term</Pill>} />
        <StatCard title="Copies Pending Review (Demo)" value="8" meta={<Pill tone="warn">Needs attention</Pill>} />
        <StatCard title="Attendance Alerts (Demo)" value="3" meta={<Pill tone="warn">Today</Pill>} />
      </div>

      <div className="grid cols-3" style={{ marginTop: 16 }}>
        <Card title="Upcoming Schedule">
          <div className="muted">• Class 8: Algebra (10:30) • Class 7: Fractions (12:10) • Lab: Science (2:00)</div>
          <div style={{ marginTop: 12 }}>
            <ChartPlaceholder label="Day Timeline (Placeholder)" />
          </div>
        </Card>

        <Card title="Notifications">{demo.notifications.map((n) => <NotificationCard key={n.title} title={n.title} body={n.body} />)}</Card>

        <Card title="Quick Actions">
          <div className="statusRow">
            <Link to="/teacher/lesson-plan">
              <Button variant="secondary">Lesson Plan</Button>
            </Link>
            <Link to="/teacher/question-paper">
              <Button variant="secondary">Question Paper</Button>
            </Link>
            <Link to="/teacher/attendance">
              <Button variant="secondary">Attendance</Button>
            </Link>
          </div>
          <div className="muted" style={{ marginTop: 10, fontSize: 12 }}>
            All actions are demo UI only.
          </div>
        </Card>
      </div>
    </>
  );
}

