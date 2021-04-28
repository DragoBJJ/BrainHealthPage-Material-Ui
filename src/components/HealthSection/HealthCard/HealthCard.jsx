import React from "react";
import useStyles from "./style";

import {
  Grid,
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const HealthCard = ({ title, srcImage, description }) => {
  const { cardHealth, cardMedia, cardContent } = useStyles();

  return (
    <Grid item>
      <Card className={cardHealth} style={{ textAlign: "center" }}>
        <CardHeader title={title} />
        <CardActionArea style={{ height: "100%" }}>
          <CardMedia className={cardMedia} image={srcImage} />
          <CardContent className={cardContent}>
            <Typography
              variant="body1"
              paragraph
              style={{ marginTop: "150px" }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default HealthCard;
