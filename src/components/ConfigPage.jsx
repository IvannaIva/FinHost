import React from "react";
import "./styles/App.css";
import HorizontalLinearStepper from "./HorizontalLinearStepper";

function ConfigPage() {
  return (
    <div className="config_wrap">
      <div className="config_top">
        <h1 className="config_title">
          CONFIGURE AND INSTALL YOUR OWN MOBILE BANKING APP
        </h1>
      </div>
      <HorizontalLinearStepper />
    </div>
  );
}

export default ConfigPage;
