import React, { useMemo, useState } from "react";
import { demo } from "../../lib/demoData.js";
import { useUI } from "../../lib/useUI.js";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Button from "../../components/ui/Button.jsx";
import Panel from "../../components/ui/Panel.jsx";
import { Field, Input, Select } from "../../components/ui/Field.jsx";
import Icon from "../../components/Icon.jsx";

export default function LessonPlanGenerator() {
  const { pushToast } = useUI();
  const [cls, setCls] = useState(demo.classList[2]);
  const [subject, setSubject] = useState(demo.subjects[0]);
  const [chapter, setChapter] = useState("");
  const [preview, setPreview] = useState("");

  const classOptions = useMemo(() => demo.classList, []);
  const subjectOptions = useMemo(() => demo.subjects, []);

  function generate() {
    const ch = chapter?.trim() || "Chapter (Demo)";
    setPreview(
      `Lesson Plan (Placeholder)\n\nClass: ${cls}\nSubject: ${subject}\nChapter: ${ch}\n\n1) Learning Objectives\n- Define key terms\n- Solve 3 guided examples\n\n2) Warm-up (5 min)\n- Quick recap quiz\n\n3) Teaching Flow (25 min)\n- Concept explanation + board work\n- Pair activity\n\n4) Assessment (10 min)\n- Exit ticket (3 questions)\n\n5) Homework\n- Practice set (demo)`
    );
    pushToast("Generated", "Lesson plan preview updated (placeholder).");
  }

  return (
    <>
      <PageHead title="Lesson Plan Generator" subtitle="Create a structured lesson plan outline for a class and chapter (demo)." />

      <div className="split">
        <Card title="Inputs">
          <div className="form">
            <div className="formRow">
              <Field label="Class">
                <Select value={cls} onChange={(e) => setCls(e.target.value)}>
                  {classOptions.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </Select>
              </Field>
              <Field label="Subject">
                <Select value={subject} onChange={(e) => setSubject(e.target.value)}>
                  {subjectOptions.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </Select>
              </Field>
            </div>
            <Field label="Chapter">
              <Input value={chapter} onChange={(e) => setChapter(e.target.value)} placeholder="e.g., Algebraic Expressions" />
            </Field>
            <Button onClick={generate}>
              <Icon name="spark" /> Generate
            </Button>
          </div>
        </Card>

        <Card title="Generated Lesson Plan (Preview)">
          <Panel title="Preview">
            <div className="muted" style={{ whiteSpace: "pre-wrap" }}>
              {preview || "Select inputs and click Generate to see a placeholder lesson plan preview (no real AI)."}
            </div>
          </Panel>
        </Card>
      </div>
    </>
  );
}

