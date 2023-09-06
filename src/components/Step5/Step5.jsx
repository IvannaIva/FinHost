import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedStateApp } from "../../store/calculateSlice";

const typeAuthData = [
  { label: "Email" },
  {
    label: "Phone Number",
  },
  {
    label: "Facebook",
  },
  { label: "Apple" },
  { label: "Google" },

  {
    label: "SAML",
  },
  {
    label: "2-Factor authenticator",
  },
  {
    label: "Other",
  },
  { label: "I don't need" },
];

function Step5({setIsSomethingSelected}) {
  const [typeAuthentication, setTypeAuthentication] = React.useState([]);

  const dispatch = useDispatch();
  const selectedPlatform = useSelector(
    (state) => state.calculate.selectedPlatform
  );

  const handleDesign = (typeAuthLabel) => {
    setIsSomethingSelected(true);
    setTypeAuthentication(typeAuthLabel);
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
            onClick={() => handleDesign(type.label)}
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
