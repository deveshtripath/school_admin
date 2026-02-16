import React, { useState } from "react";
import { useUI } from "../../lib/useUI.js";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Panel from "../../components/ui/Panel.jsx";
import { Field, Select } from "../../components/ui/Field.jsx";
import Icon from "../../components/Icon.jsx";

export default function HomeworkGenerator() {
  const { pushToast } = useUI();
  const [topic, setTopic] = useState("Linear Equations");
  const [preview, setPreview] = useState("");

  function generate() {
    setPreview(
      `Homework Set (Placeholder)\n\nTopic: ${topic}\n\n1) Solve 5 practice questions\n2) Attempt 2 word problems\n3) Write 3 key takeaways\n\nSubmission: Next class (Demo)`
    );
    pushToast("Generated", "Homework preview updated (placeholder).");
  }

  return (
    <>
      <PageHead title="Homework Generator" subtitle="Create topic-based homework tasks (demo UI only)." />

      <div className="split">
        <Card title="Topic Selection">
          <div className="form">
            <Field label="Topic">
              <Select value={topic} onChange={(e) => setTopic(e.target.value)}>
                <option>Linear Equations</option>
                <option>Fractions</option>
                <option>Motion & Force</option>
                <option>Grammar: Tenses</option>
              </Select>
            </Field>
            <Button onClick={generate}>
              <Icon name="spark" /> Generate Homework
            </Button>
          </div>
        </Card>

        <Card title="Homework Preview">
          <Panel title="Preview">
            <div className="muted" style={{ whiteSpace: "pre-wrap" }}>
              {preview || "Pick a topic and click Generate to preview a homework set (demo)."}
            </div>
          </Panel>
        </Card>
      </div>
    </>
  );
}

