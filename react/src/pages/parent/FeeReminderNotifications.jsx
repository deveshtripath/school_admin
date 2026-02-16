import React from "react";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import NotificationCard from "../../components/ui/NotificationCard.jsx";
import Badge from "../../components/ui/Badge.jsx";
import ChartPlaceholder from "../../components/ui/ChartPlaceholder.jsx";

export default function FeeReminderNotifications() {
  return (
    <>
      <PageHead title="Fee Reminder Notifications" subtitle="Fee reminders and payment status (UI only)." />

      <div className="grid cols-2">
        <Card title="Reminders (Demo)">
          <div className="grid">
            <NotificationCard title="Monthly Fee Due" body="Due date: 20th • Amount: $60 (Demo)." icon="bell" />
            <NotificationCard title="Receipt" body="Download receipt (UI placeholder)." icon="download" />
          </div>
        </Card>
        <Card title="Status">
          <div className="statusRow">
            <Badge tone="warn" label="Status" value="Pending (Demo)" />
            <Badge tone="info" label="Last Paid" value="Jan 2026 (Demo)" />
          </div>
          <div style={{ marginTop: 12 }}>
            <ChartPlaceholder label="Payment History (Placeholder)" />
          </div>
        </Card>
      </div>
    </>
  );
}

