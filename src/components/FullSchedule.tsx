import React from "react";
import { fullScheduleData } from "../constants/schedule_index";
import TitleSection from "./TitleSection";
const FullSchedule = () => {
  const { titleSection } = fullScheduleData;
  return (
    <div className="flex flex-col gap-10 w-full">
      <TitleSection title={titleSection.title} index={titleSection.index} />
      <div className="rounded-4xl overflow-hidden shadow-lg">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_de540ce00910ac62f0cfb64e5121aea89310070a4cc3abb8af1ce9f87df1c796%40group.calendar.google.com&ctz=America%2FLos_Angeles&showTitle=1&showNav=1&showDate=1&showTabs=1&showCalendars=1"
          style={{ border: 0 }}
          width="100%"
          height="600"
        />
      </div>
    </div>
  );
};

export default FullSchedule;
