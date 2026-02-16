import React from "react";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import NotificationCard from "../../components/ui/NotificationCard.jsx";

export default function SchoolAnnouncements() {
  return (
    <>
      <PageHead title="School Announcements" subtitle="Announcements feed (demo)." />

      <Card title="Announcement Cards">
        <div className="grid">
          <NotificationCard title="Sports Day" body="Inter-house events on Saturday (Demo)." icon="bell" />
          <NotificationCard title="Library Week" body="Book fair open all week (Demo)." icon="bell" />
          <NotificationCard title="Uniform Reminder" body="Winter uniform mandatory (Demo)." icon="bell" />
        </div>
      </Card>
    </>
  );
}

