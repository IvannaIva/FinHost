import React from "react";
import Input from "@mui/material/Input";
import "../styles/App.css";

function NameInput({ name, handleNameChange, selectedFile }) {

  const hasSelectedFile = selectedFile !== null;

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
        {hasSelectedFile && (
        <p style={{ color: "red" }}>Logo is uploaded. Delete it to enter name.</p>
      )}
      </div>
    </div>
  );
}

export default NameInput;
