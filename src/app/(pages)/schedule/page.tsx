import GenericHero from "@/src/components/GenericHero";
import { scheduleHeroData } from "@/src/constants/schedule_index";
import React from "react";
import FullSchedule from "@/src/components/FullSchedule";
import EventTypes from "@/src/components/EventTypes";
const SchedulePage = () => {
  return (
    <div className="flex items-center w-full">
      <div className="flex flex-col gap-26 w-full max-w-full">
        <div className="flex flex-col gap-10 xs:p-5 lg:p-10">
          <GenericHero heroData={scheduleHeroData} />
        </div>
        <div className="flex flex-col gap-26 p-5 lg:p-10">
          <FullSchedule />
          <EventTypes />
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
