import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  appBar: {
    height: "100px",
    borderRadius: "5px",
    justifyContent: "center",
    backgroundColor: "#fffdd0",
    color: `${theme.palette.info.main}`,
    transition: "all 0.5s ease-in-out"
  },
  navBarLogo: {
    fontSize: "50px"
  },
  toolBar: {
    justifyContent: "space-between"
  },
  iconScrollUp: {
    position: "absolute",
    bottom: "-80vh",
    right: "30px",
    fontSize: "50px",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.5)",
      cursor: "pointer"
    }
  },
  button: {
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.2)"
    }
  }
}));
