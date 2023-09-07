import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";

import { useDispatch } from "react-redux";
import { clearState, clearCalculate } from "../../store/calculateSlice";
import "../VerticalLinearStepper.css";

const EmailForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  //   useEffect(() => {
  //     dispatch(clearState());

  //  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  useEffect(() => {
    if (isValid || email) {
      dispatch(clearState());
    }
  }, [isValid]);

  const handleGenerateSubmit = () => {
    // dispatch(clearCalculate());
    console.log("email", email);
    if (isValid || email) {
      window.location.href = "https://www.google.com";
    }
  };

  return (
    <div className="email-form">
      <form onSubmit={handleSubmit(handleGenerateSubmit)}>
        <TextField
          // label="Enter Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          // variant="outlined"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          error={!!errors.email}
          helperText={errors.email?.message}
          className="custom-textfield"
        />
        <div className="buttonEstimat">
          <Button
            type="submit"
            onClick={handleGenerateSubmit}
            disabled={!isValid || !email}
            className="calculateButtonEstimate"
          >
            <p>Get free estimate</p>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
