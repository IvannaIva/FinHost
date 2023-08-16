import React from "react";
import { styled } from "@mui/material/styles";
import { ReactSVG } from "react-svg";

const StyledFileInput = styled("input")({
  display: "none",
});

function FileUpload({ selectedFile, onFileChange }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileChange(file);
  };

  return (
    <div className="fileUpload">
      <p className="description">Or browse your logo:</p>
      <div className="fileUploadInput">
        <StyledFileInput
          type="file"
          id="file-input"
          accept="image/*"
          onChange={handleFileChange}
        />
        <label htmlFor="file-input">
          <ReactSVG src="/assets/images/drop.svg" className="drop-image" />

          <ReactSVG
            src="/assets/images/drop_small.svg"
            className="drop-image-small"
          />
        </label>
      </div>
    </div>
  );
}

export default FileUpload;
