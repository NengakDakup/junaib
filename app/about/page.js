import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import OurTeamMembers from "@/components/OurTeamMembers";
import ProjectAcheivements from "@/components/ProjectAcheivements";
import WhatWeAre from "@/components/WhatWeAre";
import React from "react";

const About = () => {
  return (
    <>
      <Header />

      <AboutHero />
      
      <WhatWeAre />

      <HowItWorks />

      <div className="mt-20">
        <ProjectAcheivements />
      </div>

      <div className="mt-20 mb-20">
        <OurTeamMembers />
      </div>

      <Footer />
    </>
  );
};

export default About;
