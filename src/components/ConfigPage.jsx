import React from "react";
import "./styles/App.css";

import VerticalLinearStepper from "./VerticalLinearStepper";
import Estimation from "./Step5/Estimation"


function ConfigPage() {

  const [allStepsCompleted, setAllStepsCompleted] = React.useState(false); 


  return (
    <div className="container">
      <div className="calculate_title"><h1>Calculate Price</h1></div>
      {allStepsCompleted ? 
          // <div className="email-form-container">
            <Estimation />
          // </div>
        : 
      <VerticalLinearStepper setAllStepsCompleted={setAllStepsCompleted}/>}
    </div>
  );
}

export default ConfigPage;
