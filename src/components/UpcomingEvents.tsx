"use client";
import React from "react";
import { CalendarEvent } from "../lib/GlobalTypes";
import EventCard from "./EventCard";
import { UpcomingEventsData } from "../constants/home_index";
import TitleSection from "./TitleSection";

const UpcomingEvents = ({
  upcomingEvents,
}: {
  upcomingEvents: CalendarEvent[];
}) => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <TitleSection
        title={UpcomingEventsData.titleSection.title}
        index={UpcomingEventsData.titleSection.index}
      />
      {upcomingEvents && upcomingEvents.length > 0 ? (
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center p-10 text-2xl font-bold text-text-primary">
          No upcoming events
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
