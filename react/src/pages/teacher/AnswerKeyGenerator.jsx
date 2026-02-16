import React, { useState } from "react";
import { useUI } from "../../lib/useUI.js";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Panel from "../../components/ui/Panel.jsx";
import Button from "../../components/ui/Button.jsx";
import Icon from "../../components/Icon.jsx";

export default function AnswerKeyGenerator() {
  const { pushToast } = useUI();
  const [keyText] = useState(
    `1) Q1: (a) …\n2) Q2: …\n\nMarking Scheme:\n- 1 mark each for MCQs\n- Partial credit for steps (demo)\n- Neatness + presentation as per rubric (demo)`
  );

  return (
    <>
      <PageHead title="Answer Key Generator" subtitle="Preview an answer key + marking scheme (demo UI)." />

      <div className="grid cols-2">
        <Card title="Question List Preview">
          <Panel title="Questions">
            <div className="muted" style={{ whiteSpace: "pre-wrap" }}>
              {`Section A (MCQ)\n1) Choose the correct option…\n2) Solve: 2x + 3 = 11\n\nSection B (Short)\n3) Define photosynthesis.\n4) Explain Newton’s second law.`}
            </div>
          </Panel>
        </Card>

        <Card
          title="Answer Key + Marking Scheme"
          right={
            <Button variant="secondary" onClick={() => pushToast("Download (Demo)", "This is a UI placeholder; no file is generated.")}>
              <Icon name="download" /> Download
            </Button>
          }
        >
          <Panel title="Key">
            <div className="muted" style={{ whiteSpace: "pre-wrap" }}>
              {keyText}
            </div>
          </Panel>
        </Card>
      </div>
    </>
  );
}

