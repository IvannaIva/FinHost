import React, { useState } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import { ReactSVG } from "react-svg";

const StyledFileInput = styled("input")({
  display: "none",
});

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (selectedFile) {
        setError("Only one file can be uploaded");
      } else if (!file.type.startsWith("image/")) {
        setError("Please upload an image file");
      } else {
        setSelectedFile(file);
        setError("");
        // Тут ви можете виконати додаткові дії з файлом
        console.log("Selected file:", file);
      }
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <div>
        <Input placeholder="Name" value={name} onChange={handleNameChange} />
        <StyledFileInput
          type="file"
          id="file-input"
          accept="image/*"
          onChange={handleFileChange}
        />
        <label htmlFor="file-input">
          <ReactSVG src={require("../img/drop.svg").default} />
        </label>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div>
        {/* Ось тут може бути ваш макет телефону */}
        <ReactSVG src={require("../img/iPhone15.svg").default} />
        <div className="name-text">
          {name} {/* Виведіть ім'я зверху в макеті телефону */}
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
