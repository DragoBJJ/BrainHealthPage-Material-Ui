import React, { useState } from "react";

import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

import { Fade, Menu, MenuItem, Button } from "@material-ui/core";
import useStyles from "./style";

export const FadeMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { button, fadeMenu } = useStyles();

  const handleClick = e => setAnchorEl(e.currentTarget);

  const handleClose = e => setAnchorEl(setAnchorEl(null));

  return (
    <>
      <Button
        className={fadeMenu}
        variant="contained"
        size="large"
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="fade-menu"
        elevation={3}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
        TransitionComponent={Fade}
      >
        <MenuItem
          className={button}
          component={Link}
          onClick={handleClose}
          color="inherit"
          to="Articles"
          duration={500}
          smooth={true}
          spy={true}
          offset={-80}
          activeClass="active"
        >
          Articles
        </MenuItem>
        <MenuItem
          className={button}
          component={Link}
          onClick={handleClose}
          color="inherit"
          to="BrainHealth"
          duration={500}
          smooth={true}
          spy={true}
          offset={-80}
          activeClass="active"
        >
          Health
        </MenuItem>
        <MenuItem
          component={Link}
          className={button}
          onClick={handleClose}
          color="inherit"
          to="Mentors"
          duration={500}
          smooth={true}
          spy={true}
          offset={-80}
          activeClass="active"
        >
          Mentors
        </MenuItem>
        <MenuItem className={button} component={NavLink} to="/form">
          Sign In
        </MenuItem>
      </Menu>
    </>
  );
};

export const scrollToUp = scroll => {
  scroll.scrollToTop();
};

export const updateScroll = (setIcon, setNavbar) => {
  if (window.scrollY > 150) {
    setNavbar(true);
  } else {
    setNavbar(false);
  }
  if (window.scrollY > 5400) {
    setIcon(true);
  } else {
    setIcon(false);
  }
};
