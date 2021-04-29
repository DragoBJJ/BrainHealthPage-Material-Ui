import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  appBar: {
    height: "100px",
    width: "100%",
    borderRadius: "5px",
    justifyContent: "center",
    backgroundColor: "#fffdd0",
    color: `${theme.palette.info.main}`,
    transition: "all 0.5s ease-in-out"
  },
  fadeMenu: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      backgroundColor: "#fffdd0",
      border: "1px solid #1d1d1d",
      transition: "all 0.3s ease-in-out",
      letterSpacing: "6px",
      "&:hover": {
        backgroundColor: "#1d1d1d",
        border: "none",
        color: "#fff"
      }
    }
  },
  navBarLogo: {
    fontSize: "50px"
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
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
    backgroundColor: "#fffdd0",
    "&:hover": {
      transform: "scale(1.2)"
    }
  }
}));
