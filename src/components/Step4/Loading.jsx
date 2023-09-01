import React, { useState, useEffect } from "react";
import QRCodeDisplay from "./QRCodeDisplay";
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
import useWindowWidth from "../hooks/useWindowWidth";
import DownloadDisplay from "./Download";

function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const windowWidth = useWindowWidth();
  const { name, selectedColorPhone, phoneLayoutUrl, selectedCheckboxes } =
    useSelector((state) => state.config);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {windowWidth > 768 ? (
        isLoading ? (
          <div className="loader-container">
            <ReactSVG src={"/assets/images/Loading.svg"} />
            <p>Your mobile app build is preparing</p>
          </div>
        ) : (
          <QRCodeDisplay
            qrCodeValue={{
              name,
              selectedColorPhone,
              phoneLayoutUrl,
              selectedCheckboxes,
            }}
            className="drop-image"
          />
        )
      ) : isLoading ? (
        <div className="loader-container">
          <ReactSVG src={"/assets/images/Loading.svg"} />
          <p>Your mobile app build is preparing</p>
        </div>
      ) : (
        <DownloadDisplay />
      )}
    </div>
  );
}

export default Loading;
