import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { setNeedDesign, addStepData } from "../../store/calculateSlice";

const DesignData = [
  { label: "Yes", hourMin: 2, hourMax: 3, priceMin: 300, priceMax: 420},
  {
    label: "No", hourMin: 0, hourMax: 0, priceMin: 0, priceMax: 0
  },
];

function Step3({setIsSomethingSelected, activeStep}) {
  //const [ needDesign, setNeedDesign] = React.useState("");

  const dispatch = useDispatch();
  const needDesign = useSelector((state) => state.calculate.needDesign);

  const handleDesign = (designLabel) => {
    setIsSomethingSelected(true);
    dispatch(setNeedDesign(designLabel.label));
    dispatch(addStepData({ step: activeStep, data: designLabel }));
    console.info(`Selected platform: ${designLabel}`);
  };

  return (
    <Box className="calculate-box">
      <p>Do you need a design?</p>
      <Stack className="calculate-grid ">
        {DesignData.map((design, index) => (
          <Chip
            label={design.label}
            onClick={() => handleDesign(design)}
            className={`calculate-chip ${
              needDesign === design.label ? "selected" : ""
            }`}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default Step3;
