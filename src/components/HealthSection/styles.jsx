import { makeStyles } from "@material-ui/core";
import book from "../../assets/images/book.svg";

export default makeStyles({
  paper: {
    position: "relative",
    marginTop: "50px",
    paddingTop: "50px",
    backgroundColor: "#fffdd0"
  },
  header: {
    letterSpacing: "12px",
    textAlign: "center"
  },
  healthAvatar: {
    height: "150px",
    width: "150px",
    backgroundImage: `url(${book})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50%",
    margin: "50px auto"
  }
});
