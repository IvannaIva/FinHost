import React from "react";
import { ReactSVG } from "react-svg";
import Grid from "@mui/material/Grid";
import "../styles/App.css";
import CheckboxListFeatures from "./CheckboxListFeatures";
import { useDispatch, useSelector } from "react-redux";
import { setColorPhone, setPhoneLayout } from "../../store/configSlice";

const Step3 = () => {
  //  const dispatch = useDispatch();

  const phoneLayoutUrl = useSelector((state) => state.config.phoneLayoutUrl);

  return (
    <Grid container spacing={2} alignItems="flex-start" justifyContent="center">
      <Grid item xs={12} md={8}>
        <div className="check-list-wrap">
          <p className="description">Conficurate list of features:</p>

          <CheckboxListFeatures />
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <ReactSVG src={phoneLayoutUrl} alt="Selected Phone" />
      </Grid>
    </Grid>
  );
};

export default Step3;
