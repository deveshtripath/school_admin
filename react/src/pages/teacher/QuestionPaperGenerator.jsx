import React, { useMemo, useState } from "react";
import { demo } from "../../lib/demoData.js";
import { useUI } from "../../lib/useUI.js";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Button from "../../components/ui/Button.jsx";
import Panel from "../../components/ui/Panel.jsx";
import { Field, Select } from "../../components/ui/Field.jsx";
import Icon from "../../components/Icon.jsx";

export default function QuestionPaperGenerator() {
  const { pushToast } = useUI();
  const [cls, setCls] = useState(demo.classList[2]);
  const [subject, setSubject] = useState(demo.subjects[0]);
  const [marks, setMarks] = useState("40");
  const [difficulty, setDifficulty] = useState("Balanced");
  const [preview, setPreview] = useState("");

  const classOptions = useMemo(() => demo.classList, []);
  const subjectOptions = useMemo(() => demo.subjects, []);

  function generate() {
    setPreview(
      `Question Paper (Placeholder)\n\nClass: ${cls}\nSubject: ${subject}\nTotal Marks: ${marks}\nDifficulty: ${difficulty}\n\nSection A (MCQ)\n1) …\n2) …\n\nSection B (Short)\n3) …\n4) …\n\nSection C (Long)\n5) …\n\n(Preview only — no real AI or PDF generation)`
    );
    pushToast("Generated", "Question paper preview updated (placeholder).");
  }

  function download() {
    pushToast("Download (Demo)", "This is a UI placeholder; no file is generated.");
  }

  return (
    <>
      <PageHead title="Question Paper Generator" subtitle="Build a paper structure with marks and difficulty (demo UI)." />

      <div className="split">
        <Card title="Configuration">
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
            <div className="formRow">
              <Field label="Total Marks">
                <Select value={marks} onChange={(e) => setMarks(e.target.value)}>
                  <option>20</option>
                  <option>40</option>
                  <option>60</option>
                  <option>80</option>
                </Select>
              </Field>
              <Field label="Difficulty">
                <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                  <option>Easy</option>
                  <option>Balanced</option>
                  <option>Hard</option>
                </Select>
              </Field>
            </div>
            <div className="statusRow">
              <Button onClick={generate}>
                <Icon name="spark" /> Generate
              </Button>
              <Button variant="secondary" onClick={download}>
                <Icon name="download" /> Download PDF
              </Button>
            </div>
            <div className="muted" style={{ fontSize: 12 }}>
              Download is a UI placeholder; no file is generated.
            </div>
          </div>
        </Card>

        <Card title="Question Preview Panel">
          <Panel title="Preview">
            <div className="muted" style={{ whiteSpace: "pre-wrap" }}>
              {preview || "Generate to preview a demo question paper outline (no PDF generation)."}
            </div>
          </Panel>
        </Card>
      </div>
    </>
  );
}

