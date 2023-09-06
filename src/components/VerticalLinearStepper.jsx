import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useDispatch } from "react-redux";
import { Circle } from "@mui/icons-material"; 
import Button from "@mui/material/Button";

import Step2 from "./Step2/Step2";
import Step1 from "./Step1/Step1";
import Step4 from "./Step4/Step4";
import Step3 from "./Step3/Step3";
import Step5 from "./Step5/Step5";
import "./VerticalLinearStepper.css";
import { setAllStepsCompleted } from "../store/calculateSlice";
import style from "./styles/buttons.module.css";

const steps = [
  {
    label: "Platform",
  },
  {
    label: "State of app",
  },
  {
    label: "Design",
  },
  {
    label: "Prototype",
  },
  {
    label: "Authentication",
  },
];



export default function VerticalLinearStepper({ setAllStepsCompleted }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isSomethingSelected, setIsSomethingSelected] = React.useState(true);
  const colorBasic = '#03d6a1';
  const dispatch = useDispatch();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setAllStepsCompleted(true);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setIsSomethingSelected(false);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    // <div className="calculate_wrap">
    <Box sx={{ maxWidth: 400 }} className="calculate_wrap">
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className="calculate_left"
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel  
            // className={index <= activeStep && "active-label"}
            StepIconComponent={Circle} // Використовуємо кругову іконку
            style={{
              color: index <= activeStep ? colorBasic : "grey", // Змінюємо колір активного кроку
            }}
            >
            <span style={{
              color: index <= activeStep ? colorBasic : "black", // Змінюємо колір активного кроку
            }}>{ step.label}</span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="calculate-right">
        {/* <Typography>{steps[activeStep]}</Typography> */}
        {activeStep === 0 && (
          <Step1 setIsSomethingSelected={setIsSomethingSelected} />
        )}
        {activeStep === 1 && (
          <Step2 setIsSomethingSelected={setIsSomethingSelected} />
        )}
        {activeStep === 2 && (
          <Step3 setIsSomethingSelected={setIsSomethingSelected} />
        )}
        {activeStep === 3 && (
          <Step4 setIsSomethingSelected={setIsSomethingSelected} />
        )}
        {activeStep === 4 && (
          <Step5 setIsSomethingSelected={setIsSomethingSelected} />
        )}

        <div className="buttons">
          {activeStep === 0 ? (
            <Button onClick={handleNext} className="calculateButtonNext">
              <p> Next</p>
            </Button>
          ) : (
            <div className="buttonsNextSkip">
              <Button onClick={handleBack} className="calculateButtonBack">
                <p> Back</p>
              </Button>
              <Button
                onClick={handleNext}
                className={
                  isSomethingSelected
                    ? "calculateButtonNext"
                    : "calculateButtonSkip"
                }
              >
                <p> {isSomethingSelected ? "Next" : "Skip"}</p>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Box>
    // </div>
  );
}
