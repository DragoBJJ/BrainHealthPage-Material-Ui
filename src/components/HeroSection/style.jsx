import { makeStyles } from "@material-ui/core/styles";
import heroImage from "../../assets/images/heroImage.jpg";

export default makeStyles(theme => ({
  MainPost: {
    position: "relative",
    marginTop: "120px",
    height: "500px",
    color: "#fff",
    boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
    backgroundImage: `url(${heroImage})`,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  PostContent: {
    padding: theme.spacing(3),
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(10),
      "& h2": {
        fontSize: "45px"
      },
      "& q": {
        fontSize: "32px"
      }
    }
  }
}));
