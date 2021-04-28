import React from "react";

import Navigation from "../components/Navigation/Nagivation";
import HeroSection from "../components/HeroSection/HeroSection";
import ArticleSection from "../components/ArticleSection/Articles";
import HealthSection from "../components/HealthSection/HealthSection";
import MentorSection from "../components/MentorSection/MentorSection";
import Footer from "../components/Footer/Footer";

import { Container, CssBaseline } from "@material-ui/core";

const PageTemplate = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <header>
          <Navigation />
        </header>
        <main>
          <HeroSection />
          <ArticleSection />
          <HealthSection />
          <MentorSection />
        </main>
        <footer>
          <Footer
            title="Jakub Pawelski"
            description="Learn, son, all the time"
          />
        </footer>
      </Container>
    </>
  );
};

export default PageTemplate;
