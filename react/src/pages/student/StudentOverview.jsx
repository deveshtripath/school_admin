import React from "react";
import { demo } from "../../lib/demoData.js";
import Card from "../../components/ui/Card.jsx";
import ChartPlaceholder from "../../components/ui/ChartPlaceholder.jsx";
import NotificationCard from "../../components/ui/NotificationCard.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Pill from "../../components/ui/Pill.jsx";
import StatCard from "../../components/ui/StatCard.jsx";

export default function StudentOverview() {
  return (
    <>
      <PageHead title="Personal Performance Dashboard" subtitle="Your scores, goals, and next practice set (demo UI)." />

      <div className="kpiGrid">
        <StatCard title="Overall Score (Demo)" value="80%" meta={<Pill tone="ok">Improving</Pill>} />
        <StatCard title="Quiz Streak (Demo)" value="5 days" meta={<Pill tone="ok">Keep going</Pill>} />
        <StatCard title="Weak Topics (Demo)" value="3" meta={<Pill tone="warn">Practice</Pill>} />
        <StatCard title="Next Test (Demo)" value="In 6 days" meta={<Pill tone="ok">Prepare</Pill>} />
      </div>

      <div className="grid cols-3" style={{ marginTop: 16 }}>
        <Card title="Progress Chart">
          <ChartPlaceholder label="Weekly Progress (Placeholder)" />
        </Card>

        <Card title="Score Cards">
          <div className="grid">
            <StatCard title="Math" value="82" meta={<Pill tone="ok">Strong</Pill>} />
            <StatCard title="Science" value="74" meta={<Pill tone="warn">Revise</Pill>} />
          </div>
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

