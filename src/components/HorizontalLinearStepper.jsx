import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import style from "./HorizontalLinearStepper.module.css";
import { useSelector } from "react-redux";

const steps = ["1", "2", "3", "4"]; // Список кроків

const HorizontalLinearStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const name = useSelector((state) => state.config.name);


  const selectedFile = useSelector((state) => state.config.selectedFile);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const isNameEmpty = name.trim() === "";

  return (
    <div className="stepper_wrap">
      <Box>
        <Stepper activeStep={activeStep} className="custom-stepper">
          {steps.map((label, index) => (
            <Step key={label}>
              <div
                className={`${style.customStep} ${
                  activeStep === index && style.activeStep
                }`}
              >
                {label}
                {/* <StepLabel ></StepLabel> */}
              </div>
            </Step>
          ))}
        </Stepper>
        <div className="step_wrap">
          {/* <Typography>{steps[activeStep]}</Typography> */}
          {activeStep === 0 && (
            <Step1 name={name} selectedFile={selectedFile} />
          )}
          {activeStep === 1 && <Step2 />}
          {activeStep === 2 && <Step3 />}
          {activeStep === 3 && <Step4 />}
          <div className="but_wrap">
            {activeStep === steps.length - 1 ? null : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={isNameEmpty && !selectedFile}
                className={style.buttons}
              >
                <p className={style.buttonNext}> Next</p>
              </Button>
            )}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default HorizontalLinearStepper;
