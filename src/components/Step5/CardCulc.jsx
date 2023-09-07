import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { calculateHoursAndPrice } from "./CalculateHoursAndPrice"

export default function CardCulc() {
  const { totalHourMin, totalHourMax, totalPriceMin, totalPriceMax } = calculateHoursAndPrice();


  return (
    <div className="card-culc">
      {" "}
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <AccessTimeOutlinedIcon />
            <Typography gutterBottom variant="h5" component="div">
              Hours of development
            </Typography>
            <Typography variant="h6" color="text.bold">
            {totalHourMin}$
            </Typography>
            <Typography variant="h6" color="text.bold">
             {totalHourMax}$
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <PaidOutlinedIcon />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cost of building your app
            </Typography>
            <Typography variant="h6" color="text.bold">
            {totalPriceMin} USD
            </Typography>
            <Typography variant="h6" color="text.bold">
            {totalPriceMax} USD
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
