import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { homeOne, homeTwo, homeThree } from "./data";

import Article from "./Article/Article";

import useStyles from "./styles";

const Articles = () => {
  const { header, root } = useStyles();
  return (
    <Grid className={root} container id="Articles">
      <Typography className={header} variant="h2">
        Articles
      </Typography>
      <Article
        title={homeOne.headline}
        description={homeOne.description}
        link={homeOne.link}
        image={homeOne.img}
      />
      <Article
        title={homeTwo.headline}
        description={homeTwo.description}
        link={homeTwo.link}
        image={homeTwo.img}
        imageFirst
      />
      <Article
        title={homeThree.headline}
        description={homeThree.description}
        link={homeThree.link}
        image={homeThree.img}
      />
    </Grid>
  );
};

export default Articles;
