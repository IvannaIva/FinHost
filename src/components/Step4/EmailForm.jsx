import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button,Input } from "@mui/material";
import style from "../HorizontalLinearStepper.module.css";
import { useDispatch } from "react-redux";
import { setQRCodeGenerated } from "../../store/configSlice";
import Loading from "./Loading";

const EmailQRCodeGenerator = ({ setShowQRCodeLocal }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const handleGenerateQRCode = () => {
    console.log("email", email);
    if (isValid || email) {
     
      dispatch(setQRCodeGenerated(true)); // Показати QR-код
      setShowQRCodeLocal(true);
    }
  };

  return (
    <div className="step4-form">
      <form onSubmit={handleSubmit(handleGenerateQRCode)}>
        <Input 
          label="Enter Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <div className="buttonQr">
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleGenerateQRCode}
          disabled={!isValid || !email}
          className={style.buttons}
        >
           <p  className={style.buttonNext}>   Generate QR code</p>
         
        </Button>
        </div>
      </form>
      
    </div>
  );
};

export default EmailQRCodeGenerator;
