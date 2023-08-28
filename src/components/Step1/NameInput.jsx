import React, { useState } from "react";
import Input from "@mui/material/Input";
import "../styles/App.css";

function NameInput({ name, handleNameChange, iconUploaded }) {
  // const [nameEntered, setNameEntered] = useState(Boolean(name));

  //  const hasSelectedFile = selectedFile !== null;

  return (
    <div className="nameAplic">
      <p className="description">Enter the name of Application:</p>
      <div className="input_name">
        <Input
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          className="custom-input"
          // disabled={hasSelectedFile}
        />
        {/* {nameEntered && (
        <p style={{ color: "red" }}>Logo is uploaded. Delete it to enter name.</p>
      )} */}
      </div>
    </div>
  );
}

export default NameInput;
