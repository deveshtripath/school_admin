import React from "react";
import { useUI } from "../../lib/useUI.js";
import { demo } from "../../lib/demoData.js";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import ChartPlaceholder from "../../components/ui/ChartPlaceholder.jsx";
import NotificationCard from "../../components/ui/NotificationCard.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Pill from "../../components/ui/Pill.jsx";
import StatCard from "../../components/ui/StatCard.jsx";
import Icon from "../../components/Icon.jsx";

export default function ParentOverview() {
  const { pushToast } = useUI();

  return (
    <>
      <PageHead
        title="Child Performance Overview"
        subtitle="Overview of marks, attendance, and notices (placeholder graphs)."
        actions={
          <Button variant="secondary" onClick={() => pushToast("Download (Demo)", "This is a UI placeholder; no file is generated.")}>
            <Icon name="download" /> Download Report
          </Button>
        }
      />

      <div className="kpiGrid">
        <StatCard title="Overall Score (Demo)" value="79%" meta={<Pill tone="ok">Trending up</Pill>} />
        <StatCard title="Attendance (Demo)" value="93%" meta={<Pill tone="ok">This month</Pill>} />
        <StatCard title="Homework Pending (Demo)" value="2" meta={<Pill tone="warn">Due soon</Pill>} />
        <StatCard title="New Notices (Demo)" value="3" meta={<Pill tone="ok">Unread</Pill>} />
      </div>

      <div className="grid cols-3" style={{ marginTop: 16 }}>
        <Card title="Performance Graph">
          <ChartPlaceholder label="Score Trend (Placeholder)" />
        </Card>
        <Card title="Attendance Graph">
          <ChartPlaceholder label="Attendance Trend (Placeholder)" />
        </Card>
        <Card title="Notifications">
          <div className="grid">
            {demo.notifications.map((n) => (
              <NotificationCard key={n.title} title={n.title} body={n.body} />
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

