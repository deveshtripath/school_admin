import React, { useState } from "react";
import { useUI } from "../../lib/useUI.js";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Panel from "../../components/ui/Panel.jsx";
import { Field, Select } from "../../components/ui/Field.jsx";
import Icon from "../../components/Icon.jsx";

export default function TopicBasedQuizSystem() {
  const { pushToast } = useUI();
  const [topic, setTopic] = useState("Linear Equations");
  const [count, setCount] = useState("10");

  return (
    <>
      <PageHead title="Topic-Based Quiz System" subtitle="Start a quiz and view feedback preview (demo UI)." />

      <div className="grid cols-2">
        <Card title="Quiz Setup">
          <div className="form">
            <div className="formRow">
              <Field label="Topic">
                <Select value={topic} onChange={(e) => setTopic(e.target.value)}>
                  <option>Fractions</option>
                  <option>Linear Equations</option>
                  <option>Motion</option>
                </Select>
              </Field>
              <Field label="Questions">
                <Select value={count} onChange={(e) => setCount(e.target.value)}>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                </Select>
              </Field>
            </div>
            <Button onClick={() => pushToast("Quiz (Demo)", `Quiz run isn’t implemented. Setup: ${topic}, ${count} questions.`)}>
              <Icon name="check" /> Start Quiz
            </Button>
            <div className="muted" style={{ fontSize: 12 }}>
              Quiz run is not implemented; button shows demo toast.
            </div>
          </div>
        </Card>

        <Card title="Feedback Preview">
          <Panel title="After-Quiz Feedback (Placeholder)">
            <div className="muted" style={{ whiteSpace: "pre-wrap" }}>
              {`Score: 8/10\nStrong: Solving equations\nImprove: Word problems — translate statements to equations.\n\nNext: Try 5 word-problem questions (Demo).`}
            </div>
          </Panel>
        </Card>
      </div>
    </>
  );
}

