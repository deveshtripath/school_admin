import React from "react";
import { demo } from "../../lib/demoData.js";
import Card from "../../components/ui/Card.jsx";
import ChartPlaceholder from "../../components/ui/ChartPlaceholder.jsx";
import PageHead from "../../components/ui/PageHead.jsx";

export default function SubjectProgressGraph() {
  return (
    <>
      <PageHead title="Subject Progress Graph" subtitle="Track progress by subject (graph placeholders)." />

      <div className="grid cols-2">
        {demo.subjects.slice(0, 4).map((s) => (
          <Card key={s} title={`${s} Progress`}>
            <ChartPlaceholder label={`${s} Trend (Placeholder)`} />
          </Card>
        ))}
      </div>
    </>
  );
}

