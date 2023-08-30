import React from "react";
import { ReactSVG } from "react-svg";
import ImageIcon from "@mui/icons-material/Image";
import Typography from "@mui/material/Typography";
import PhoneLayoutSVG from "./PhoneLayoutSVG";
// import { SvgLoader, SvgProxy } from 'react-svgmt';

function PhoneLayout({ name, selectedFile }) {
  return (
    <div className="phone-layout">
      <PhoneLayoutSVG name={name} selectedFile={selectedFile} />

      {/* <ReactSVG src={"/assets/images/iPhone15.svg"} /> */}

      {/* <div className="interactive-wrapper">
        <div className=" interactive-content"> {name ? <p className="name-text">{name}</p> : null}</div>

        {selectedFile ? (
          // <img src={URL.createObjectURL(selectedFile)} alt="Uploaded" />
          <img src={selectedFile.objectURL} alt="Uploaded" />
        ) : null}
      </div> */}
    </div>
  );
}

export default PhoneLayout;
