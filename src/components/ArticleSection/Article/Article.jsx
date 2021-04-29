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
  const props = {
    flexDirection: `${imageFirst ? "row" : "row-reverse"}`
  };

  const {
    card,
    cardImage,
    cardDetails,
    linkContainer,
    avatarLink,
    Title,
    Description
  } = useStyles(props);
  return (
    <Grid item>
      <Card className={card}>
        <CardMedia className={cardImage} image={image} title={title} />

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

            <Typography className={Title} variant="h4" gutterBottom>
              {title}
            </Typography>
            <Typography className={Description} variant="h6" gutterBottom>
              {description}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
};

export default Article;
