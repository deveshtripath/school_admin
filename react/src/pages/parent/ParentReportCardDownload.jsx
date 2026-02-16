import React from "react";
import { useUI } from "../../lib/useUI.js";
import { demo } from "../../lib/demoData.js";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import ChartPlaceholder from "../../components/ui/ChartPlaceholder.jsx";
import PageHead from "../../components/ui/PageHead.jsx";
import Panel from "../../components/ui/Panel.jsx";
import Icon from "../../components/Icon.jsx";

export default function ParentReportCardDownload() {
  const { pushToast } = useUI();
  return (
    <>
      <PageHead
        title="Report Card Download"
        subtitle="Download report card and view preview (UI only)."
        actions={
          <Button variant="secondary" onClick={() => pushToast("Download (Demo)", "This is a UI placeholder; no file is generated.")}>
            <Icon name="download" /> Download Report
          </Button>
        }
      />

      <div className="grid cols-2">
        <Card title="Preview">
          <Panel title="Report Card (Demo Preview)">
            <div className="muted" style={{ whiteSpace: "pre-wrap" }}>
              {`Student: Aarav Sharma (Class 8)\nTerm: ${demo.termLabel}\n\nMath: 82\nScience: 74\nEnglish: 86\nAttendance: 93%\n\nRemarks: Good progress. Needs more practice in numericals.`}
            </div>
          </Panel>
        </Card>
        <Card title="Graphs">
          <ChartPlaceholder label="Term-wise Performance (Placeholder)" />
        </Card>
      </div>
    </>
  );
}

