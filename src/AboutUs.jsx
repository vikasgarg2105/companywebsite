import React from "react";
import About from "./components/About/About";
import PageTitle from "./components/pageTitle/PageTitle";
import Team from "./components/Team/Team";
import WhyChooseUs from "./components/Whychooseus/WhyChooseUs";

const AboutUs = () => {
  document.title = "About Us";
  return (
    <>
      <PageTitle Pagename="About Us" />
      <About css="d-none" />
      <WhyChooseUs />
      <Team />
    </>
  );
};

export default AboutUs;
