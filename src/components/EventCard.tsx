"use client";
import React from "react";
import { CalendarEvent } from "../lib/GlobalTypes";

const EventCard = ({ event }: { event: CalendarEvent }) => {
  return (
    <div className="bg-bg-secondary p-5 rounded-4xl shadow-lg border border-border-medium">
      <h3 className="text-xl font-medium text-text-primary">{event.summary}</h3>
      <p className="text-text-secondary font-regular">{event.description}</p>
      <p className="text-text-secondary font-regular">
        Location: {event.location}
      </p>
      <p className="text-text-secondary font-regular">
        Start: {event.start.dateTime}
      </p>
      <p className="text-text-secondary font-regular">
        End: {event.end.dateTime}
      </p>
    </div>
  );
};

export default EventCard;
