import React from "react";
import useStyles from "./style";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Link,
  Typography
} from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const MentorCard = ({
  title,
  citate,
  description,
  cardImage,
  imageFirst,
  youtube,
  instagram
}) => {
  const props = {
    flexDirection: `${imageFirst ? "row" : "row-reverse"}`
  };

  const {
    card,
    cardDetails,
    mentorImage,
    linkWrapper,
    link,
    Citate,
    Description
  } = useStyles(props);

  return (
    <Grid item>
      <Card className={card}>
        <div>
          <CardMedia className={mentorImage} image={cardImage} title={title} />
          {youtube && (
            <div className={linkWrapper}>
              <Link href={`https://${youtube}`} className={link}>
                <YouTubeIcon
                  style={{ fontSize: 50, color: "hsl(0, 72%, 51%)" }}
                />
              </Link>
              <Link href={`https://${instagram}`} className={link}>
                <InstagramIcon style={{ fontSize: 50, color: "#1d1d1d" }} />
              </Link>
            </div>
          )}
        </div>

        <CardContent className={cardDetails}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography
            className={Citate}
            variant="h5"
            component="q"
            style={{ marginTop: "30px" }}
            gutterBottom
          >
            {citate}
          </Typography>
          <Typography
            className={Description}
            variant="h6"
            style={{ marginTop: "30px" }}
            gutterBottom
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MentorCard;
