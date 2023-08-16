import React from "react";
import { ReactSVG } from "react-svg";
import ColorPalette from "./ColorPalette";
import Grid from "@mui/material/Grid";
import "../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { setColorPhone, setPhoneLayout } from "../../store/configSlice";

const Step2 = () => {
  const colors = [
    "light_red",
    "dark_red",
    "light_green",
    "dark_green",
    "light_blue",
    "dark_blue",
  ];

  const dispatch = useDispatch();
  const selectedColorPhone = useSelector(
    (state) => state.config.selectedColorPhone
  );
  const phoneLayoutUrl = useSelector((state) => state.config.phoneLayoutUrl);

  const handleColorChange = (color) => {
    dispatch(setColorPhone(color));
    dispatch(setPhoneLayout(`/assets/images/phones/${color}.svg`));
  };

  return (
    <Grid container spacing={2} alignItems="flex-start" justifyContent="center">
      <Grid item xs={12} md={8}>
        {/* <div className="colorPalette-wrap"> */}
          <p className="description">Select App palette:</p>

          <ColorPalette
            colors={colors}
            selectedColorPhone={selectedColorPhone}
            onChange={handleColorChange}
          />
        {/* </div> */}
      </Grid>
      <Grid item xs={12} md={4}>
        <ReactSVG src={phoneLayoutUrl} alt="Selected Phone" />
      </Grid>
    </Grid>
  );
};

export default Step2;
