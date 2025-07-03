import React from "react";
import NavBar from "../NavBar";
import HeroSection from "./Sections/HeroSection";
import VerticalLine from "../VerticalLine";
import OurMissonSection from "./Sections/OurMissonSection";
import ResultsSection from "./Sections/ResultsSection";
import ImageShowCase from "./Sections/ImageShowCase";
import { FeaturesSection } from "./Sections/FeaturesSection";
import HelpSection from "./Sections/HelpSection";
import QuestionSection from "./Sections/QuestionSection";
import Footer from "../Footer";

const HomePage = () => {
  
  return (
    <section >
      <NavBar />
      <HeroSection />
      <VerticalLine />
      <OurMissonSection />
      <ResultsSection />
      <ImageShowCase />
      <FeaturesSection />
      <VerticalLine />
      <HelpSection />
      <VerticalLine />
      <QuestionSection/>
      <Footer/>
    </section>
  );
};

export default HomePage;
