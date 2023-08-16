import React, { useState, useEffect } from "react";
import "../styles/App.css";
import EmailForm from "./EmailForm";
import QRCodeDisplay from "./QRCodeDisplay";
import { useSelector } from "react-redux";

const Step4 = () => {
  const [showQRCode, setShowQRCodeLocal] = useState(false);
  const {
    name,
    selectedColorPhone,
    phoneLayoutUrl,
    selectedCheckboxes,
  
  } = useSelector((state) => state.config);

  // useEffect(() => {
  //   if (!qrCodeGenerated) {
  //     setShowQRCodeLocal(false);
  //   }
  // }, [qrCodeGenerated]);

  return (
    <div className="step4">
      <p className="description">Get your App:</p>

      {showQRCode ? (
        <QRCodeDisplay
          qrCodeValue={{
            name,
            selectedColorPhone,
            phoneLayoutUrl,
            selectedCheckboxes,
          }}
        />
      ) : (
        <EmailForm setShowQRCodeLocal={setShowQRCodeLocal} />
      )}
    </div>
  );
};

export default Step4;
