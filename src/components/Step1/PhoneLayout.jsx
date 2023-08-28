import React from "react";
import { ReactSVG } from "react-svg";
import ImageIcon from "@mui/icons-material/Image";
import Typography from "@mui/material/Typography";
import PhoneLayoutSVG from "./PhoneLayoutSVG";
// import { SvgLoader, SvgProxy } from 'react-svgmt';

function PhoneLayout({ name, selectedFile }) {
  const showName = Boolean(name);
  const showIcon = Boolean(selectedFile);

  return (
    <div className="phone-layout">
      {/* <ReactSVG src="/assets/images/iPhone15.svg" />
      {showName && (
        <text x="50" y="50" font-size="16" font-family="Arial" fill="#000000">
          {name}
        </text>
      )} */}
      {/* <PhoneLayoutSVG name={name} /> */}

      <div>
        <ReactSVG src={"/assets/images/iPhone15.svg"} />
      </div>
      <div className="name-text">{name}</div>
      <div className="image-or-text">
        {selectedFile ? (
          // <img src={URL.createObjectURL(selectedFile)} alt="Uploaded" />
          <img src={selectedFile.objectURL} alt="Uploaded" />
        ) : null}
      </div>
    </div>
  );
}

export default PhoneLayout;
