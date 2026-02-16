import React, { useState } from "react";
import { useUI } from "../../lib/useUI.js";
import { demo } from "../../lib/demoData.js";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Panel from "../../components/ui/Panel.jsx";
import { Field, Select } from "../../components/ui/Field.jsx";
import Icon from "../../components/Icon.jsx";

export default function PersonalizedPracticeGenerator() {
  const { pushToast } = useUI();
  const [subject, setSubject] = useState(demo.subjects[0]);
  const [topic, setTopic] = useState("Fractions");
  const [difficulty, setDifficulty] = useState("Balanced");

  return (
    <>
      <PageHead title="Personalized Practice Generator" subtitle="Preview a practice set and difficulty (demo UI)." />

      <div className="split">
        <Card title="Controls">
          <div className="form">
            <Field label="Subject">
              <Select value={subject} onChange={(e) => setSubject(e.target.value)}>
                {demo.subjects.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </Select>
            </Field>
            <Field label="Focus Topic">
              <Select value={topic} onChange={(e) => setTopic(e.target.value)}>
                <option>Fractions</option>
                <option>Linear Equations</option>
                <option>Motion</option>
                <option>Grammar</option>
              </Select>
            </Field>
            <Field label="Difficulty">
              <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option>Easy</option>
                <option>Balanced</option>
                <option>Hard</option>
              </Select>
            </Field>
            <Button onClick={() => pushToast("Generated (Demo)", `Practice preview for ${subject} / ${topic} (${difficulty}) is a placeholder.`)}>
              <Icon name="spark" /> Generate Practice
            </Button>
          </div>
        </Card>

        <Card title="Practice Question Preview">
          <Panel title="Preview">
            <div className="muted" style={{ whiteSpace: "pre-wrap" }}>
              {`1) Solve: 3x - 7 = 11\n2) Simplify: (2a + 3) - (a - 5)\n3) Word problem: A train travels...\n\n(Placeholder set — not AI-generated)\n\nSelected: ${subject} • ${topic} • ${difficulty}`}
            </div>
          </Panel>
        </Card>
      </div>
    </>
  );
}

