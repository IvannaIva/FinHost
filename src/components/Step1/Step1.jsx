import React, { useState } from "react";
import { Grid } from "@mui/material";
import NameInput from "./NameInput";
import FileUpload from "./FileUpload";
import PhoneLayout from "./PhoneLayout";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../store/configSlice";


function Step1() {
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const name = useSelector(
    (state) => state.config.name
  );


  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleFileChange = (file) => {
    if (file) {
      if (selectedFile) {
        setError("Only one file can be uploaded");
      } else if (!file.type.startsWith("image/")) {
        setError("Please upload an image file");
      } else {
        setSelectedFile(file);
        setError("");
        console.log("Selected file:", file);
      }
    }
  };

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item>
        <div className="step1_name_file">
          <NameInput name={name} handleNameChange={handleNameChange} selectedFile={selectedFile}/>
          <FileUpload selectedFile={selectedFile} onFileChange={handleFileChange} />
        </div>
      </Grid>
      <Grid item>
        <PhoneLayout name={name} selectedFile={selectedFile} />
      </Grid>
    </Grid>
  );
}

export default Step1;
