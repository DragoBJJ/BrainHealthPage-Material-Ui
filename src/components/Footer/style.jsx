import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  footer: {
    position: "relative",
    marginTop: " 20px",
    backgroundColor: "#fffdd0",
    padding: theme.spacing(6, 0),
    boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`
  },
  Title: {
    letterSpacing: "5px"
  }
}));