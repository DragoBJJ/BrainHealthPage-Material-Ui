import { makeStyles } from "@material-ui/core";

export default makeStyles(({ breakpoints }) => ({
  paper: {
    position: "relative",
    marginTop: "50px",
    paddingTop: "50px",
    backgroundColor: "#fffdd0"
  },
  header: {
    letterSpacing: "12px",
    textAlign: "center",
    [breakpoints.down("xs")]: {
      fontSize: "45px"
    }
  }
}));
