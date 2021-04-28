import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ breakpoints, spacing, palette }) => ({
  card: {
    display: "flex",
    height: "700px",
    justifyContent: "space-around",
    padding: spacing(6),
    backgroundColor: "#fffdd0",
    [breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto"
    }
  },
  cardDetails: {
    flex: 0.7,
    textAlign: "center"
  },
  cardImage: {
    marginTop: "150px",
    width: "350px",
    height: "350px",
    [breakpoints.down("sm")]: {
      margin: "auto",
      width: "250px",
      height: "250px"
    }
  },
  linkContainer: {
    display: "flex",
    margin: "auto",
    marginBottom: "20px",
    height: "80px",
    width: "80px",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease-in-out",
    color: `${palette.info.main}`,
    "&:hover": {
      border: `1px solid ${palette.info.main}`
    },
    [breakpoints.down("sm")]: {
      margin: "30px auto"
    }
  },
  avatarLink: {
    color: `${palette.info.main}`
  }
}));
