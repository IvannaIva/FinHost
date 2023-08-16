import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { toggleCheckbox } from "../../store/configSlice";

const checkboxData = [
  { label: "p2p transfers", defaultChecked: true },
  { label: "Uk local transfers" },
  { label: "SWIFT" },
  { label: "Cards", defaultChecked: true },
  { label: "Internal Payments By Phone Number" },
  { label: "Recipients" },
  { label: "Fee System", defaultChecked: true },
  { label: "Data Analytics" },
];

const formatLabel = (label) => {
  return label.toLowerCase().replace(/ /g, "_");
};

const CheckboxListFeatures = () => {
  const dispatch = useDispatch();

  const selectedCheckboxes = useSelector(
    (state) => state.config.selectedCheckboxes
  );

  const handleCheckboxChange = (label) => {
    dispatch(toggleCheckbox(label));
  };

  return (
    <FormGroup className="check-list">
      <Grid container spacing={2} className="grid-container">
        {checkboxData.map((checkbox, index) => (
          <Grid item xs={12} md={6} key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={
                    selectedCheckboxes[formatLabel(checkbox.label)] === true
                  }
                  onChange={() =>
                    handleCheckboxChange(formatLabel(checkbox.label))
                  }
                />
              }
              label={checkbox.label}
            />
          </Grid>
        ))}
      </Grid>
    </FormGroup>
  );
};

export default CheckboxListFeatures;
