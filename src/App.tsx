import * as React from "react";
import "./styles.css";

import GNB from "./components/GNB";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="App">
      <GNB name="DASHBOARD" />
      <Dashboard />
    </div>
  );
}
