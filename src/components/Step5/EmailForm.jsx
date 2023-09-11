import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";



import "../VerticalLinearStepper.css";

const EmailForm = () => {

  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();



  const handleGenerateSubmit = () => {

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
