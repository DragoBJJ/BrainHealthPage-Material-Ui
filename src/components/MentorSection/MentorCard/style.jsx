import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ breakpoints, spacing, palette }) => ({
  card: {
    display: "flex",
    height: "800px",
    justifyContent: "space-around",
    padding: spacing(2),
    backgroundColor: "#fffdd0",
    [breakpoints.down("sm")]: {
      padding: spacing(4),
      flexDirection: "column",
      height: "auto"
    }
  },
  cardDetails: {
    flex: 0.7,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-around"
  },
  mentorImage: {
    marginTop: "120px",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    [breakpoints.down("sm")]: {
      margin: " 50px auto",
      width: "250px",
      height: "250px"
    }
  },
  linkWrapper: {
    display: "flex",
    marginTop: "20px",
    justifyContent: "center"
  },
  link: {
    transition: "all 0.3s ease-in-out",
    marginRight: " 10px",
    "&:hover": {
      transform: `scale(1.5)`
    }
  }
}));
