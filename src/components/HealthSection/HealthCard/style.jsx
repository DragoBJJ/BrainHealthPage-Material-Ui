import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  cardHealth: {
    position: "relative",
    width: "360px",
    height: "460px",
    backgroundColor: "#1d1d1d",
    borderRadius: "20px",
    transition: "all 0.3s ease-in-out",
    boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
    color: "#fff",
    "&:hover": {
      transform: "scale(1.05)"
    }
  },
  cardMedia: {
    position: "absolute",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    height: "200px",
    width: "200px"
  }
});
