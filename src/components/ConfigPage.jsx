import React from "react";
import "./styles/App.css";
import HorizontalLinearStepper from "./HorizontalLinearStepper";

function ConfigPage() {
  return (
    <div className="config_wrap">
      <div className="config_top">
        <h1 className="config_title">Configure and install your own mobile banking app</h1>
      </div>
      <HorizontalLinearStepper />
    </div>
  );
}

export default ConfigPage;
