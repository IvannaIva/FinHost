import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import { useDispatch } from "react-redux";
import { setQRCodeGenerated, clearState } from "../../store/configSlice";

const QRCodeDisplay = ({ qrCodeValue }) => {
  const [showQRCode, setShowQRCodeLocal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(clearState());

  }, []);

  console.log(qrCodeValue);
  return (
    <div className="qrCode">
      <h3>Scan QR CODE:</h3>
      <QRCode value={JSON.stringify(qrCodeValue)} />
    </div>
  );
};

export default QRCodeDisplay;
