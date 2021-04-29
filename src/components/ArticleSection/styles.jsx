import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ breakpoints }) => ({
  root: {
    backgroundColor: "#fffdd0"
  },
  header: {
    padding: "40px 0 0 0 ",
    margin: "auto",
    letterSpacing: "12px",
    [breakpoints.down("xs")]: {
      fontSize: "45px"
    }
  }
}));
