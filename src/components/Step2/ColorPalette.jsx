import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid"; // Додайте імпорт Grid
import "../styles/App.css";

const ColorPalette = ({ colors, selectedColorPhone, onChange }) => {
  return (
    <RadioGroup
      name="color-palette"
      value={selectedColorPhone}
      onChange={(event) => onChange(event.target.value)}
      className="colorPalette-wrap"
    >
      <Grid container spacing={2} className="color-grid">
        {colors.map((color) => (
          <Grid item xs={12} md={6} key={color}>
            <FormControlLabel
              value={color}
              control={<Radio />}
              label={
                <div className="color-option">
                  <img
                    src={`/assets/images/palette/${color}.png`}
                    alt={color}
                  />
                </div>
              }
            />
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
};

export default ColorPalette;
