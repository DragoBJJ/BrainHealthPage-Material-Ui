import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";

import useStyles from "./style";

const HeroSection = () => {
  const { MainPost, PostContent } = useStyles();

  return (
    <Paper className={MainPost}>
      <Grid container justify="center">
        <Grid className={PostContent} item md={8}>
          <Typography align="center" component="h2" variant="h2" gutterBottom>
            Your Brain can be better...
          </Typography>
          <Typography align="center" component="q" variant="h4" paragraph>
            There is nothing so distant that it is out of reach, and nothing so
            hidden that it cannot be discovered
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HeroSection;
