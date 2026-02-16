import React, { useState } from "react";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import { demo } from "../../lib/demoData.js";
import { Field, Select } from "../../components/ui/Field.jsx";

export default function WeakTopicHeatmap() {
  const [subject, setSubject] = useState(demo.subjects[0]);

  const levels = ["l1", "l2", "l2", "l3", "l1", "l4", "l3", "l2", "l2", "l1", "l3", "l2", "l4", "l3", "l2", "l1"];

  return (
    <>
      <PageHead title="Weak Topic Heatmap" subtitle="Visualize weak chapters/topics across students (placeholder visualization)." />

      <Card title="Filters">
        <div className="formRow">
          <Field label="Subject">
            <Select value={subject} onChange={(e) => setSubject(e.target.value)}>
              {demo.subjects.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </Select>
          </Field>
          <Field label="Assessment">
            <Select defaultValue="Mid Term">
              <option>Unit Test 1</option>
              <option>Mid Term</option>
              <option>Unit Test 2</option>
            </Select>
          </Field>
        </div>
        <div className="muted" style={{ marginTop: 10 }}>
          Viewing heatmap for <b>{subject}</b> (demo).
        </div>
      </Card>

      <div className="grid cols-2" style={{ marginTop: 16 }}>
        <Card title="Heatmap Visualization (Placeholder)">
          <div className="muted" style={{ marginBottom: 10 }}>
            Darker cells indicate weaker topics (demo).
          </div>
          <div className="heatmap" aria-label="Heatmap placeholder">
            {levels.map((l, idx) => (
              <div key={idx} className={`heatCell ${l}`} />
            ))}
          </div>
        </Card>

        <Card title="Insights (Demo)">
          <div className="muted">
            • Algebraic Expressions: <b>Needs revision</b>
            <br />• Fractions: <b>Mixed performance</b>
            <br />• Word Problems: <b>High variance</b>
            <br />
            <br />
            This panel is UI-only — no analytics engine.
          </div>
        </Card>
      </div>
    </>
  );
}

