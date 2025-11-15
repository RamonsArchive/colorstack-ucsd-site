import React from "react";
import GenericHero from "@/src/components/GenericHero";
import { aboutHeroData } from "@/src/constants/about_index";
import OurValues from "@/src/components/OurValues";
import WhatWeDo from "@/src/components/WhatWeDo";
import OurTeam from "@/src/components/OurTeam";
const AboutPage = () => {
  return (
    <div className="flex items-center w-full">
      <div className="flex flex-col gap-26 w-full max-w-full">
        <div className="flex flex-col gap-10 xs:p-5 lg:p-10">
          <GenericHero heroData={aboutHeroData} />
        </div>

        <div className="flex flex-col gap-26 p-5 lg:p-10">
          <OurValues />
          <WhatWeDo />
          <OurTeam />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
