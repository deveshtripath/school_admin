import React from "react";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import NotificationCard from "../../components/ui/NotificationCard.jsx";

export default function PTMNotifications() {
  return (
    <>
      <PageHead title="PTM Notifications" subtitle="Upcoming PTM schedules and reminders (demo notification UI)." />

      <Card title="Notifications">
        <div className="grid">
          <NotificationCard title="PTM Confirmed" body="Friday 4:00 PM • Room 204 (Demo)." icon="bell" />
          <NotificationCard title="Agenda" body="Discuss performance in Science + Attendance (Demo)." icon="bell" />
          <NotificationCard title="Reschedule Option" body="Request a new slot (UI placeholder)." icon="bell" />
        </div>
      </Card>
    </>
  );
}

