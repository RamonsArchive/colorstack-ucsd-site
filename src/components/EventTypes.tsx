import React from "react";
import TitleSection from "./TitleSection";
import { eventTypesData } from "../constants/schedule_index";
import SkinnyCard from "./SkinnyCard";

const EventTypes = () => {
  const { titleSection, eventTypes } = eventTypesData;
  return (
    <div className="flex flex-col gap-10 w-full">
      <TitleSection title={titleSection.title} index={titleSection.index} />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {eventTypes.map((eventType) => (
          <SkinnyCard key={eventType.title} card={eventType} />
        ))}
      </div>
    </div>
  );
};

export default EventTypes;
