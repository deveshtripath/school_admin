import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";

export default function NotFound() {
  return (
    <div className="authWrap">
      <Card title="Page Not Found">
        <div className="muted">This route doesn’t exist in the demo UI.</div>
        <div style={{ marginTop: 12 }}>
          <Link to="/login">
            <Button variant="secondary">Go to Login</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

