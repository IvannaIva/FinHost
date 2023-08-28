import React, { useState, useEffect } from "react";
import EmailForm from "./EmailForm";
import QRCodeDisplay from "./QRCodeDisplay";
import DownloadDisplay from "./Download";
import { useSelector } from "react-redux";
import useWindowWidth from "../hooks/useWindowWidth";
import "../styles/App.css"; // Імпортуйте ваші стилі CSS

const Step4 = () => {
  const [showQRCode, setShowQRCodeLocal] = useState(false);
  const windowWidth = useWindowWidth();
  const {
    name,
    selectedColorPhone,
    phoneLayoutUrl,
    selectedCheckboxes,
  } = useSelector((state) => state.config);

  return (
    <div className="center-container"> {/* Додайте цей контейнер */}
      {windowWidth > 768 ? (
        showQRCode ? (
          <QRCodeDisplay
            qrCodeValue={{
              name,
              selectedColorPhone,
              phoneLayoutUrl,
              selectedCheckboxes,
            }}
            className="drop-image"
          />
        ) : (
          <div>
            <p className="description">Get your App:</p>
            <EmailForm setShowQRCodeLocal={setShowQRCodeLocal} />
          </div>
        )
      ) : (
        showQRCode ? (
          <DownloadDisplay />
        ) : (
        <div>
          <p className="description">Get your App:</p>
          <EmailForm setShowQRCodeLocal={setShowQRCodeLocal} />
  
        </div>
        )
      )}
    </div>
  );
};

export default Step4;
