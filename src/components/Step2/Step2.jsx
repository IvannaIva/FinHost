import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedStateApp } from "../../store/calculateSlice";

const StateData = [
  { label: "I have a basic idea what my app should look like" },
  {
    label:
      "I have an exact specification for all the features but it might change during the development",
  },
  {
    label:
      "I have solid uderstanding what my app should look like but I still need to specify the functionality of particular features",
  },
  {
    label:
      "I have an exact specification and expect that nothing will change during the process",
  },
];

function Step2({setIsSomethingSelected}) {
  // const [selectedStateApp, setSelectedStateApp] = React.useState("");

  const dispatch = useDispatch();
  const selectedStateApp = useSelector(
    (state) => state.calculate.selectedStateApp
  );

  const handlePlatformSelect = (stateLabel) => {
    setIsSomethingSelected(true);
    dispatch(setSelectedStateApp(stateLabel));
    console.info(`Selected platform: ${stateLabel}`);
  };

  return (
    <Box className="calculate-box">
      <p>What the state of your app?</p>
      <Stack className="calculate-grid ">
        {StateData.map((state, index) => (
          <Chip
            style={{ height: "15vh" }}
            label={state.label}
            onClick={() => handlePlatformSelect(state.label)}
            className={`calculate-chip ${
              selectedStateApp === state.label ? "selected" : ""
            }`}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default Step2;
