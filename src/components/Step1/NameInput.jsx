import React from "react";
import Input from "@mui/material/Input";

function NameInput({ value, onChange }) {
  return (
    <Input
      placeholder="Name"
      value={value}
      onChange={onChange}
    />
  );
}

export default NameInput;
