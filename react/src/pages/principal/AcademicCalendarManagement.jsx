import React, { useMemo, useState } from "react";
import { useUI } from "../../lib/useUI.js";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Button from "../../components/ui/Button.jsx";
import ChartPlaceholder from "../../components/ui/ChartPlaceholder.jsx";
import NotificationCard from "../../components/ui/NotificationCard.jsx";
import { Field, Input } from "../../components/ui/Field.jsx";
import Icon from "../../components/Icon.jsx";

export default function AcademicCalendarManagement() {
  const { pushToast } = useUI();

  const [events, setEvents] = useState([
    { date: "2026-02-18", title: "Unit Test (Demo)" },
    { date: "2026-02-21", title: "Sports Day (Demo)" },
    { date: "2026-02-25", title: "PTM (Demo)" }
  ]);

  const [date, setDate] = useState("2026-02-28");
  const [title, setTitle] = useState("");

  const sorted = useMemo(() => events.slice().sort((a, b) => a.date.localeCompare(b.date)), [events]);

  function addEvent() {
    if (!date || !title.trim()) {
      pushToast("Missing fields", "Please enter date and event title (demo).");
      return;
    }
    setEvents((e) => [...e, { date, title: title.trim() }]);
    setTitle("");
    pushToast("Added", "Calendar event added (demo).");
  }

  return (
    <>
      <PageHead title="Academic Calendar Management" subtitle="Add events and preview the calendar (demo local state)." />

      <div className="split">
        <Card title="Add Event">
          <div className="form">
            <div className="formRow">
              <Field label="Date">
                <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              </Field>
              <Field label="Event Title">
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Annual Day" />
              </Field>
            </div>
            <Button onClick={addEvent}>
              <Icon name="calendar" /> Add Event
            </Button>
            <div className="muted" style={{ fontSize: 12 }}>
              Events are stored in-memory for this demo session.
            </div>
          </div>
        </Card>

        <Card title="Calendar Preview">
          <ChartPlaceholder label="Month View Placeholder" />
          <div className="grid" style={{ marginTop: 12 }}>
            {sorted.map((e) => (
              <NotificationCard key={`${e.date}-${e.title}`} title={e.title} body={`Date: ${e.date}`} icon="calendar" />
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

