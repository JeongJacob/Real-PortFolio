import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import skill from "@/app/styles/Skill.module.scss";

export default function MuiCard({
  src,
  title,
  body,
}: {
  src: string;
  title: string;
  body: string;
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={src}
          alt="green iguana"
          className={skill.card__element}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
