import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPlatform } from "../../store/calculateSlice";

const PlatformData = [
  { label: "iOS" },
  { label: "Android" },
  { label: "Cross platform (Android + iOS)" },
];

function Step1({setIsSomethingSelected}) {
  // const [selectedPlatform, setSelectedPlatform] = React.useState("");
  const dispatch = useDispatch();
  const selectedPlatform = useSelector(
    (state) => state.calculate.selectedPlatform
  );

  const handlePlatformSelect = (platformLabel) => {
    setIsSomethingSelected(true);
    dispatch(setSelectedPlatform(platformLabel));
    console.info(`Selected platform: ${platformLabel}`);
  };

  return (
    <Box className="calculate-box">
      <p>Which platform will you use for mobile app development?</p>
      <Stack className="calculate-grid ">
        {PlatformData.map((platform, index) => (
          <Chip
            label={platform.label}
            onClick={() => handlePlatformSelect(platform.label)}
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
