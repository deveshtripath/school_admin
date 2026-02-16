import React from "react";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import NotificationCard from "../../components/ui/NotificationCard.jsx";
import ChartPlaceholder from "../../components/ui/ChartPlaceholder.jsx";

export default function TeacherFeedbackViewer() {
  return (
    <>
      <PageHead title="Teacher Feedback Viewer" subtitle="View teacher feedback and next steps (demo)." />

      <div className="grid cols-2">
        <Card title="Feedback Cards">
          <div className="grid">
            <NotificationCard title="Math Teacher" body="Focus on showing steps for 2-mark questions (Demo)." icon="check" />
            <NotificationCard title="Science Teacher" body="Revise formulas and attempt extra numericals (Demo)." icon="check" />
            <NotificationCard title="English Teacher" body="Improve paragraph structure; practice comprehension (Demo)." icon="check" />
          </div>
        </Card>
        <Card title="Summary">
          <div className="muted">UI-only viewer; no messaging backend is implemented.</div>
          <div style={{ marginTop: 12 }}>
            <ChartPlaceholder label="Feedback Trend (Placeholder)" />
          </div>
        </Card>
      </div>
    </>
  );
}

