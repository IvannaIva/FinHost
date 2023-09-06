import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import EmailForm from "./EmailForm";
import CardCulc from "./CardCulc";
import { setAllStepsCompleted, clearState } from "../../store/calculateSlice";

const Estimation = ({}) => {
  const allStepsCompleted = useSelector(
    (state) => state.calculate.allStepsCompleted
  );
  const dispatch = useDispatch();


  return (
    <div className="calculate-finish">
      <h2>
        The estimation provided below is approximate and provided for a general
        understanding of our prices
      </h2>

      <CardCulc/>
     
      <div className="calculate-finish-text">
        <h3>We can provide you with the exact estimation for free.</h3>
        <p>
          Just leave your email in the form below if you are interested. You can
          share your thoughts about the app you have in mind and we would be
          happy to provide you with our feedback about the way of realization,
          prices, time, and whatever else you might need. No strings attached ;)
        </p>
      </div>
      <EmailForm />
    </div>
  );
};

export default Estimation;
