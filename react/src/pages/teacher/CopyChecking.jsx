import React, { useState } from "react";
import { useUI } from "../../lib/useUI.js";
import Badge from "../../components/ui/Badge.jsx";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Panel from "../../components/ui/Panel.jsx";
import { Field, Input, Textarea } from "../../components/ui/Field.jsx";
import Icon from "../../components/Icon.jsx";

export default function CopyChecking() {
  const { pushToast } = useUI();
  const [preview, setPreview] = useState("Q1) …\nQ2) …\nQ3) … (placeholder)");
  const [finalMarks, setFinalMarks] = useState("34");
  const [feedback, setFeedback] = useState("Good structure. Add steps for Q2 and show reasoning for 2 marks.");

  return (
    <>
      <PageHead title="AI Copy Checking" subtitle="Upload an answer sheet and review suggested marks (demo UI only)." />

      <div className="split">
        <Card title="Upload & Review">
          <div className="form">
            <Button
              variant="secondary"
              onClick={() => pushToast("Upload (Demo)", "Upload is a UI placeholder; no files are stored.")}
            >
              <Icon name="upload" /> Upload Answer Sheet
            </Button>

            <Field label="Answer Preview">
              <Textarea value={preview} onChange={(e) => setPreview(e.target.value)} />
            </Field>

            <div className="formRow">
              <Field label="Suggested Marks (Demo)">
                <Input value="34 / 40" readOnly />
              </Field>
              <Field label="Editable Final Marks">
                <Input value={finalMarks} onChange={(e) => setFinalMarks(e.target.value)} placeholder="e.g., 35" />
              </Field>
            </div>

            <Field label="Feedback Comments">
              <Textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
            </Field>

            <Button onClick={() => pushToast("Finalized (Demo)", `Final marks set to ${finalMarks}. Feedback saved in UI only.`)}>
              <Icon name="check" /> Finalize
            </Button>
          </div>
        </Card>

        <div className="grid">
          <Card title="Rubric / Notes">
            <Panel title="Evaluation Rubric (Placeholder)">
              <div className="muted">
                • Accuracy (60%) • Steps & Working (25%) • Presentation (10%) • Neatness (5%)<br />
                This panel is a UI placeholder for rubric configuration.
              </div>
            </Panel>
          </Card>

          <Card title="Secure Handling">
            <div className="statusRow">
              <Badge tone="success" label="Storage" value="Encrypted upload (UI)" />
              <Badge tone="info" label="Retention" value="30 days (Demo)" />
            </div>
            <div className="muted" style={{ marginTop: 10 }}>
              UI-only indicators — no backend storage is implemented.
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

