import React from "react";
import { ReactSVG } from "react-svg";
import ImageIcon from "@mui/icons-material/Image";
import Typography from "@mui/material/Typography";
import PhoneLayoutSVG from "./PhoneLayoutSVG";
// import { SvgLoader, SvgProxy } from 'react-svgmt';

function PhoneLayout({ name, selectedFile }) {
  return (
    <div className="phone-layout">
      <div>
        <ReactSVG src={"/assets/images/iPhone15.svg"} />
      </div>
      <div className="name-text">
        {name}
        {/* <PhoneLayoutSVG name={name} /> */}
      </div>
      <div className="image-or-text">
        {selectedFile ? (
          <img src={URL.createObjectURL(selectedFile)} alt="Uploaded" />
        ) : null}
      </div>
    </div>
  );
}

export default PhoneLayout;
