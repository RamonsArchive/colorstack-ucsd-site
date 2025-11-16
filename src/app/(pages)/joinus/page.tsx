import React from "react";
import GenericHero from "@/src/components/GenericHero";
import { joinusHeroData } from "@/src/constants/joinus_index";
import WhyJoinUs from "@/src/components/WhyJoinUs";
import MembershipForm from "@/src/components/MembershipForm";
import FAQ from "@/src/components/FAQ";
const JoinUsPage = () => {
  return (
    <div className="flex items-center w-full">
      <div className="flex flex-col gap-26 w-full max-w-full">
        <div className="flex flex-col gap-10 xs:p-5 lg:p-10">
          <GenericHero heroData={joinusHeroData} />
        </div>
        <div className="flex flex-col gap-26 p-5 lg:p-10">
          <WhyJoinUs />
          <MembershipForm />
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage;
