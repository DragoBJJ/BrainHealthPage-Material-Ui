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
  const { card, cardDetails, mentorImage, linkWrapper, link } = useStyles();

  return (
    <Grid item>
      <Card className={card}>
        {imageFirst && (
          <>
            <div>
              <CardMedia
                className={mentorImage}
                image={cardImage}
                title={title}
              />
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
          </>
        )}

        <CardContent className={cardDetails}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" component="q" gutterBottom>
            {citate}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {description}
          </Typography>
        </CardContent>

        {!imageFirst && (
          <>
            <div>
              <CardMedia
                className={mentorImage}
                image={cardImage}
                title={title}
              />
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
          </>
        )}
      </Card>
    </Grid>
  );
};

export default MentorCard;
