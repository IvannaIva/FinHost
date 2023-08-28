import React, { useState } from "react";


const NameAndIconInput = ({ name, handleNameChange, selectedFile, handleFileChange }) => {
  const [nameEntered, setNameEntered] = useState(Boolean(name));
  const [iconUploaded, setIconUploaded] = useState(Boolean(selectedFile));

  const handleIconChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleFileChange(file);
      setIconUploaded(true);
      setNameEntered(false);
    }
  };

  const handleNameInput = (event) => {
    const enteredName = event.target.value;
    if (enteredName) {
      setNameEntered(true);
      setIconUploaded(false);
      handleNameChange(enteredName);
    }
  };

  return (
    <div>
      {!nameEntered && (
        <input
          type="text"
          placeholder="Enter app name"
          value={name}
          onChange={handleNameInput}
        />
      )}
      {!iconUploaded && (
        <input
          type="file"
          accept="image/*"
          onChange={handleIconChange}
        />
      )}
      {nameEntered && iconUploaded && (
        <p className="error">Either name or logo can be submitted. Please delete name in order to upload the logo.</p>
      )}
    </div>
  );
};

export default NameAndIconInput;
