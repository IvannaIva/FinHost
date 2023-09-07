import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { toggleTypeAuthentication, addStepData } from "../../store/calculateSlice";

const typeAuthData = [
  { label: "Email", hourMin: 2, hourMax: 3, priceMin: 300, priceMax: 420 },
  {
    label: "Phone Number",
    hourMin: 2,
    hourMax: 3,
    priceMin: 300,
    priceMax: 420,
  },
  {
    label: "Facebook",
    hourMin: 2,
    hourMax: 3,
    priceMin: 300,
    priceMax: 420,
  },
  { label: "Apple", hourMin: 2, hourMax: 3, priceMin: 300, priceMax: 420 },
  { label: "Google", hourMin: 2, hourMax: 3, priceMin: 300, priceMax: 420 },

  {
    label: "SAML",
    hourMin: 2,
    hourMax: 3,
    priceMin: 300,
    priceMax: 420,
  },
  {
    label: "2-Factor authenticator",
    hourMin: 2,
    hourMax: 3,
    priceMin: 300,
    priceMax: 420,
  },
  {
    label: "Other",
    hourMin: 2,
    hourMax: 3,
    priceMin: 300,
    priceMax: 420,
  },
  {
    label: "I don't need",
    hourMin: 2,
    hourMax: 3,
    priceMin: 300,
    priceMax: 420,
  },
];

function Step5({ setIsSomethingSelected, activeStep }) {
  // const [typeAuthentication, setTypeAuthentication] = React.useState([]);

  const dispatch = useDispatch();
  const typeAuthentication = useSelector(
    (state) => state.calculate.typeAuthentication
  );

  const handleDesign = (typeAuthLabel) => {
    setIsSomethingSelected(true);
    dispatch(toggleTypeAuthentication(typeAuthLabel.label));
    dispatch(addStepData({ step: activeStep, data: typeAuthLabel }));
    console.info(`Selected platform: ${typeAuthLabel}`);
  };

  return (
    <Box className="calculate-box">
      <p>What type of authentication do you need in your app?</p>
      <Stack className="calculate-grid ">
        {typeAuthData.map((type, index) => (
          <Chip
            variant="outlined"
            label={type.label}
            onClick={() => handleDesign(type)}
            className={`calculate-chip ${
              typeAuthentication === type.label ? "selected" : ""
            }`}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default Step5;
