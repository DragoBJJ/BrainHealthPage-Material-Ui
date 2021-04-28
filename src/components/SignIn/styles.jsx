import { makeStyles } from "@material-ui/core/styles";
import formImage from "../../assets/images/formImage.jpg";

export default makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  paper: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fffdd0",
    padding: "0 20px"
  },

  image: {
    backgroundImage: `url(${formImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.info.main
  },
  form: {
    width: "100%",
    height: "100%",
    marginTop: theme.spacing(1)
  }
}));
