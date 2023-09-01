import React, { useState } from "react";
import EmailForm from "./EmailForm";

import "../styles/App.css"; // Імпортуйте ваші стилі CSS
import Loading from "./Loading";

const Step4 = () => {
  const [showQRCode, setShowQRCodeLocal] = useState(false);


  return (
    <div className="center-container">
      {showQRCode ? (
        <Loading />
      ) : (
        <div>
          <p className="description">Get your App:</p>
          <EmailForm setShowQRCodeLocal={setShowQRCodeLocal} />
        </div>
      )}
    </div>
  );
};

export default Step4;
