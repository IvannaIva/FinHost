import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { setPrototype } from "../../store/calculateSlice";

const PrototypeData = [
  { label: "Yes" },
  {
    label: "No",
  },
];

function Step4({setIsSomethingSelected}) {
  //const [ prototype, setPrototype] = React.useState("");

  const dispatch = useDispatch();

  const prototype = useSelector((state) => state.calculate.prototype);

  const handleDesign = (prototypeLabel) => {
    setIsSomethingSelected(true);
    dispatch(setPrototype(prototypeLabel));
    console.info(`Selected platform: ${prototypeLabel}`);
  };

  return (
    <Box className="calculate-box">
      <p>Do you have a prototype of your app?</p>
      <Stack className="calculate-grid ">
        {PrototypeData.map((prot, index) => (
          <Chip
            label={prot.label}
            onClick={() => handleDesign(prot.label)}
            className={`calculate-chip ${
              prototype === prot.label ? "selected" : ""
            }`}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default Step4;
