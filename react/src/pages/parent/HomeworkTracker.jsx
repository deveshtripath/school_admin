import React from "react";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import NotificationCard from "../../components/ui/NotificationCard.jsx";
import ChartPlaceholder from "../../components/ui/ChartPlaceholder.jsx";

export default function HomeworkTracker() {
  return (
    <>
      <PageHead title="Homework Tracker" subtitle="Track assigned homework and submissions (placeholder cards)." />

      <div className="grid cols-2">
        <Card title="Assignments (Demo)">
          <div className="grid">
            <NotificationCard title="Math — Linear Equations" body="Due: Tomorrow • Status: Pending (Demo)" icon="doc" />
            <NotificationCard title="Science — Motion Worksheet" body="Due: Friday • Status: Submitted (Demo)" icon="doc" />
            <NotificationCard title="English — Grammar Practice" body="Due: Monday • Status: Pending (Demo)" icon="doc" />
          </div>
        </Card>
        <Card title="Progress Graph">
          <ChartPlaceholder label="Homework Completion (Placeholder)" />
        </Card>
      </div>
    </>
  );
}

