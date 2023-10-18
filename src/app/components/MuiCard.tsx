import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { SkillBodyT } from "../skill/page";
import roter from "@/app/styles/CardRotator.module.scss";

export default function MuiCard(props: SkillBodyT) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.src}
          alt="green iguana"
          className={roter.card__logo}
        />
        <CardContent className={roter.card__content}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={roter.card__element__title}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={roter.card__element__body}
          >
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
