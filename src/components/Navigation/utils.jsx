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
