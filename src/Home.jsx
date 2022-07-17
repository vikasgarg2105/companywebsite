import React from "react";
import About from "./components/About/About";
import ArtificialIntelligence from "./components/ArtificialIntelligence/ArtificialIntelligence";
import Clients from "./components/Clients/Clients";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/Howitworks/HowItWorks";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/Whychooseus/WhyChooseUs";
import Team from "./components/Team/Team";

const Home = () => {
  document.title = "Home - BluAmbition Pvt. Ltd.";
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <ArtificialIntelligence />
      <Team/>
      <Clients />
    </>
  );
};

export default Home;
