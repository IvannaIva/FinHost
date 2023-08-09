import React, { useState } from "react";
import { Box } from "@mui/material";
import { Input } from "@mui/material";
import FileUpload from "./FileUpload";

function Step1() {


  return (
    <Box>
      <p>Enter the name of Application:</p>
      {/* <Input /> */}
      <FileUpload/>
    </Box>
  );
}

export default Step1;
