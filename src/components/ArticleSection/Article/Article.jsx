import React from "react";
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";

import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Link
} from "@material-ui/core";
import useStyles from "./style";

const Article = ({ title, description, link, image, imageFirst }) => {
  const {
    card,
    cardImage,
    cardDetails,
    linkContainer,
    avatarLink
  } = useStyles();
  return (
    <Grid item>
      <Card className={card}>
        {imageFirst && (
          <CardMedia className={cardImage} image={image} title={title} />
        )}
        <div className={cardDetails}>
          <CardContent>
            <div className={linkContainer}>
              <Link
                className={avatarLink}
                href={`https://${link}`}
                variant="body1"
                underline="none"
              >
                <LocalLibraryOutlinedIcon style={{ fontSize: 40 }} />
                More...
              </Link>
            </div>

            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {description}
            </Typography>
          </CardContent>
        </div>
        {!imageFirst && (
          <CardMedia className={cardImage} image={image} title={title} />
        )}
      </Card>
    </Grid>
  );
};

export default Article;
