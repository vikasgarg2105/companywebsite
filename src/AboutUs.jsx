import React from "react";
import About from "./components/About/About";
import PageTitle from "./components/pageTitle/PageTitle";
import Team from "./components/Team/Team";
import WhyChooseUsAbout from "./components/Whychooseusabout/WhyChooseUsAbout";

const AboutUs = () => {
  document.title="About Us";
  return (
    <>
      <PageTitle Pagename="About Us" />
      <About css="d-none" />
      <WhyChooseUsAbout />
      <Team />
    </>
  );
};

export default AboutUs;
