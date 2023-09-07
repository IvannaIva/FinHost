import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPlatform, addStepData } from "../../store/calculateSlice";

const PlatformData = [
  { label: "iOS", hourMin: 2, hourMax: 3, priceMin: 300, priceMax: 420 },
  { label: "Android", hourMin: 1, hourMax: 2, priceMin: 200, priceMax: 230},
  { label: "Cross platform (Android + iOS)", hourMin: 4, hourMax: 5, priceMin: 1000, priceMax: 500 },
];

function Step1({setIsSomethingSelected, activeStep}) {
  // const [selectedPlatform, setSelectedPlatform] = React.useState("");
  const dispatch = useDispatch();
  const selectedPlatform = useSelector(
    (state) => state.calculate.selectedPlatform
  );

  const handlePlatformSelect = (platform) => {
    setIsSomethingSelected(true);
     dispatch(setSelectedPlatform(platform.label));
    
    dispatch(addStepData({ step: activeStep, data: platform }));
    console.info(`Selected platform: ${platform}`);
  };

  return (
    <Box className="calculate-box">
      <p>Which platform will you use for mobile app development?</p>
      <Stack className="calculate-grid ">
        {PlatformData.map((platform, index) => (
          <Chip
            label={platform.label}
            onClick={() => handlePlatformSelect(platform)}
            className={`calculate-chip ${
              selectedPlatform === platform.label ? "selected" : ""
            }`}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default Step1;
