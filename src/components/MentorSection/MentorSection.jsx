import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";

import MentorCard from "./MentorCard/MentorCard";
import { Huberman, eagleman, JacobRiis } from "./data";

const MentorSection = () => {
  const { paper, header } = useStyles();
  return (
    <Paper className={paper} id="Mentors">
      <Typography className={header} variant="h2">
        Mentors
      </Typography>
      <Grid container>
        <MentorCard
          title={Huberman.title}
          citate={Huberman.citate}
          description={Huberman.description}
          cardImage={Huberman.image}
          youtube={Huberman.youtube}
          instagram={Huberman.instagram}
        />
        <MentorCard
          title={eagleman.title}
          citate={eagleman.citate}
          description={eagleman.description}
          cardImage={eagleman.image}
          youtube={eagleman.youtube}
          instagram={eagleman.instagram}
          imageFirst
        />
        <MentorCard
          title={JacobRiis.title}
          citate={JacobRiis.citate}
          description={JacobRiis.description}
          cardImage={JacobRiis.image}
        />
      </Grid>
    </Paper>
  );
};

export default MentorSection;
