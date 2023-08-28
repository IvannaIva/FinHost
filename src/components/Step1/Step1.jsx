import React, { useState } from "react";
import { Grid } from "@mui/material";
import NameInput from "./NameInput";
import FileUpload from "./FileUpload";
import PhoneLayout from "./PhoneLayout";
import { useDispatch, useSelector } from "react-redux";
import { setName, setSelectedFile } from "../../store/configSlice";

function Step1({name, selectedFile}) {
  const dispatch = useDispatch();


  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    const enteredName = e.target.value;

    if (selectedFile) {
      setError(
        "Either name or logo can be submitted. Please delete name in order to upload the logo."
      );
    } else {
      dispatch(setName(enteredName));
    }
  };

  const onFileChange = (file) => {
    dispatch(setSelectedFile(file));
  };

  const onDeleteImage = () => {
    dispatch(setSelectedFile(null)); 
  };


  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item>
        <div className="step1_name_file">
          <NameInput
            name={name}
            handleNameChange={handleNameChange}
            
          />
          {error && <p className="error">{error}</p>}
          <FileUpload
            onFileChange={onFileChange}
            name={name}
            selectedFile={selectedFile}
            onDeleteImage={onDeleteImage}
          />
        </div>
      </Grid>
      <Grid item>
        <PhoneLayout name={name} selectedFile={selectedFile} />
      </Grid>
    </Grid>
  );
}

export default Step1;
