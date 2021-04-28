import React, { useState, useEffect } from "react";

import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";

import { AppBar, Toolbar, Button } from "@material-ui/core";

import { BiBrain } from "react-icons/bi";
import useStyles from "./style";

import { scrollToUp, updateScroll } from "./utils";

const Nagivation = () => {
  const { navBarLogo, toolBar, appBar, iconScrollUp, button } = useStyles();

  const [isVisibleIcon, setVisibleIcon] = useState(false);
  const [isVisibleNavbar, setVisibleNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      updateScroll(setVisibleIcon, setVisibleNavbar)
    );
  }, []);

  return (
    <AppBar
      position="fixed"
      style={{ opacity: `${isVisibleNavbar ? "0.8" : "1"}` }}
      className={appBar}
    >
      <Toolbar className={toolBar}>
        <BiBrain className={navBarLogo} />
        <Button
          className={button}
          component={Link}
          color="inherit"
          to="Articles"
          duration={500}
          smooth={true}
          spy={true}
          offset={-80}
          activeClass="active"
        >
          Articles
        </Button>
        <Button
          className={button}
          component={Link}
          color="inherit"
          to="BrainHealth"
          duration={500}
          smooth={true}
          spy={true}
          offset={-80}
          activeClass="active"
        >
          BrainHealth
        </Button>
        <Button
          className={button}
          component={Link}
          color="inherit"
          to="Mentors"
          duration={500}
          smooth={true}
          spy={true}
          offset={-80}
          activeClass="active"
        >
          Mentors
        </Button>

        <Button
          component={NavLink}
          to="/form"
          variant="outlined"
          color="inherit"
        >
          Sign In
        </Button>
        {isVisibleIcon && (
          <BiBrain
            onClick={() => scrollToUp(scroll)}
            className={iconScrollUp}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nagivation;
