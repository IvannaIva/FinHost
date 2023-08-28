import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import { useDispatch } from "react-redux";
import { setQRCodeGenerated, clearState } from "../../store/configSlice";
import { ReactSVG } from "react-svg";
import { Button } from "@mui/material";
import style from "../HorizontalLinearStepper.module.css";

const DownloadDisplay = ({ qrCodeValue }) => {
  const [showQRCode, setShowQRCodeLocal] = useState(false);
  const dispatch = useDispatch();

  console.log(qrCodeValue);
  return (
    <div className="download">
      <ReactSVG
        src={"/assets/images/download.svg"}
        
      />
      <div className = "downloadButt" ><Button className={style.buttons}
       onClick={() => window.location.href = "https://www.google.com"}>
        <p className="downlButt">Download</p></Button></div>
    </div>
  );
};

export default DownloadDisplay;
