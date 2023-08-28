import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { ReactSVG } from "react-svg";

const StyledFileInput = styled("input")({
  display: "none",
});

function FileUpload({ onFileChange, name, selectedFile, onDeleteImage }) {
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    setError("");
    const file = event.target.files[0];
    if (file) {
      if (name) {
        setError(
          "Either name or logo can be submitted. Please delete name in order to upload the logo."
        );
      } else if (!file.type.startsWith("image/")) {
        setError("Please upload an image file");
      } else if (file.size > 20 * 1024) {
        // Check if file is larger than 5 MB
        setError("File too large!");
      } else {
        const fileWithObjectURL = {
          file,
          objectURL: URL.createObjectURL(file),
        };
        onFileChange(fileWithObjectURL);
      }
    }
  };

  const handleDeleteImage = () => {
    onDeleteImage();
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
          {!selectedFile ? (
            <ReactSVG
              src="/assets/images/drop_add.svg"
              className="drop-image"
            />
          ) : (
            <ReactSVG
              src="/assets/images/drop.svg"
              className="drop-image"
              onClick={handleDeleteImage}
            />
          )}

          {!selectedFile ? (
            <ReactSVG
              src="/assets/images/drop_add_small.svg"
              className="drop-image-small"
            />
          ) : (
            <ReactSVG
              src="/assets/images/drop_small.svg"
              className="drop-image-small"
              onClick={handleDeleteImage}
            />
          )}
        </label>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default FileUpload;
