import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedStateApp, addStepData } from "../../store/calculateSlice";

const StateData = [
  { label: "I have a basic idea what my app should look like",
  hourMin: 2, hourMax: 3, priceMin: 300, priceMax: 420 },
  {
    label:
      "I have an exact specification for all the features but it might change during the development",
  
  hourMin: 4, hourMax: 3, priceMin: 500, priceMax: 600},
  {
    label:
      "I have solid uderstanding what my app should look like but I still need to specify the functionality of particular features",
      hourMin: 1, hourMax: 3, priceMin: 250, priceMax: 420},
  {
    label:
      "I have an exact specification and expect that nothing will change during the process",
      hourMin: 2, hourMax: 3, priceMin: 330, priceMax: 5000},
];

function Step2({setIsSomethingSelected, activeStep}) {
  // const [selectedStateApp, setSelectedStateApp] = React.useState("");

  const dispatch = useDispatch();
  const selectedStateApp = useSelector(
    (state) => state.calculate.selectedStateApp
  );

  const handlePlatformSelect = (stateLabel) => {
    setIsSomethingSelected(true);
    dispatch(setSelectedStateApp(stateLabel.label));
    dispatch(addStepData({ step: activeStep, data: stateLabel }));
    console.info(`Selected platform: ${stateLabel}`);
  };

  return (
    <Box className="calculate-box">
      <p>What the state of your app?</p>
      <Stack className="calculate-grid ">
        {StateData.map((stateLabel, index) => (
          <Chip
            style={{ height: "15vh" }}
            label={stateLabel.label}
            onClick={() => handlePlatformSelect(stateLabel)}
            className={`calculate-chip ${
              selectedStateApp === stateLabel.label ? "selected" : ""
            }`}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default Step2;
