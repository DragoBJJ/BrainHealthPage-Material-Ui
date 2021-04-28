import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";

import { HealthCardData } from "./data";
import useStyles from "./styles";

import HealthCard from "./HealthCard/HealthCard";

const HealthSection = () => {
  const { healthAvatar, paper, header } = useStyles();

  return (
    <Paper className={paper} id="BrainHealth">
      <Typography className={header} variant="h2">
        Brain Health
      </Typography>
      <div className={healthAvatar} />
      <Grid container justify="center" spacing={6}>
        <HealthCard
          title={HealthCardData[0].title}
          srcImage={HealthCardData[0].image}
          description={HealthCardData[0].desc}
        />
        <HealthCard
          title={HealthCardData[1].title}
          srcImage={HealthCardData[1].image}
          description={HealthCardData[1].desc}
        />
        <HealthCard
          title={HealthCardData[2].title}
          srcImage={HealthCardData[2].image}
          description={HealthCardData[2].desc}
        />
      </Grid>
    </Paper>
  );
};

export default HealthSection;
