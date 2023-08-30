import React from "react";

import PhoneLayoutSVG from "./PhoneLayoutSVG";

function PhoneLayout({ name, selectedFile }) {
  return (
    <div className="phone-layout">
      <PhoneLayoutSVG name={name} selectedFile={selectedFile} />

      {/* <ReactSVG src={"/assets/images/iPhone15.svg"} /> */}

      <div className="interactive-wrapper">
        <div className=" interactive-content">
          {" "}
          {name ? <p className="name-text">{name}</p> : null}
        </div>
      </div>
    </div>
  );
}

export default PhoneLayout;
