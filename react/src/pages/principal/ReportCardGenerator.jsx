import React, { useMemo, useState } from "react";
import { demo } from "../../lib/demoData.js";
import { useUI } from "../../lib/useUI.js";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Panel from "../../components/ui/Panel.jsx";
import { Field, Select } from "../../components/ui/Field.jsx";
import Icon from "../../components/Icon.jsx";

export default function ReportCardGenerator() {
  const { pushToast } = useUI();
  const classOptions = useMemo(() => demo.classList, []);
  const [cls, setCls] = useState(classOptions[2]);
  const [preview, setPreview] = useState("");

  function generate() {
    setPreview(
      `Report Card Preview (Placeholder)\n\nClass: ${cls}\nTerm: ${demo.termLabel}\n\n- Student list: ${demo.students.length} (demo)\n- Sections: Marks, Attendance, Remarks\n\nNote: Export is not implemented (UI only).`
    );
    pushToast("Generated", "Report card preview updated (placeholder).");
  }

  return (
    <>
      <PageHead title="Report Card Generator" subtitle="Generate report card previews for a class (UI only)." />

      <div className="split">
        <Card title="Select Class">
          <div className="form">
            <Field label="Class">
              <Select value={cls} onChange={(e) => setCls(e.target.value)}>
                {classOptions.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </Select>
            </Field>
            <div className="statusRow">
              <Button onClick={generate}>
                <Icon name="spark" /> Generate Report Card
              </Button>
              <Button
                variant="secondary"
                onClick={() => pushToast("Download (Demo)", "This is a UI placeholder; no file is generated.")}
              >
                <Icon name="download" /> Download
              </Button>
            </div>
            <div className="muted" style={{ fontSize: 12 }}>
              Download is a UI placeholder.
            </div>
          </div>
        </Card>

        <Card title="Preview Panel">
          <Panel title="Preview">
            <div className="muted" style={{ whiteSpace: "pre-wrap" }}>
              {preview || "Select class and click Generate to preview a demo report card layout (no PDF export)."}
            </div>
          </Panel>
        </Card>
      </div>
    </>
  );
}

