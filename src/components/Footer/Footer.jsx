import React from "react";
import { Container, Typography } from "@material-ui/core";

import useStyles from "./style";

const Footer = ({ title, description }) => {
  const { footer, Title } = useStyles();

  return (
    <Container className={footer} maxWidth="xl">
      <Typography className={Title} align="center" variant="h5">
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        {description}
      </Typography>
      <Typography align="center" variant="body1">
        Copyright © {new Date().getFullYear()}
      </Typography>
    </Container>
  );
};

export default Footer;
