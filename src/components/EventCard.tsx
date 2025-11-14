"use client";
import React from "react";
import { CalendarEvent } from "../lib/GlobalTypes";
import { formatTime, formatDate, isSameDay } from "../lib/utils";
import Link from "next/link";

const EventCard = ({ event }: { event: CalendarEvent }) => {
  const { start, end, summary, description, location } = event;

  const formattedStartTime = formatTime(start?.dateTime);
  const formattedEndTime = formatTime(end?.dateTime);
  const formattedStartDate = formatDate(start?.dateTime);
  const formattedEndDate = formatDate(end?.dateTime);
  const sameDay = isSameDay(start?.dateTime, end?.dateTime);

  // Truncate long descriptions
  const truncateDescription = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  return (
    <Link
      href={event.htmlLink || "/schedule"}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 bg-bg-secondary p-6 rounded-4xl shadow-lg border border-border-medium hover:border-white hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Title - More prominent */}
      <div className="pb-2 border-b border-border-medium group-hover:border-white transition-colors duration-300">
        <h3 className="text-2xl font-semibold text-text-primary group-hover:text-text-primary transition-colors duration-300">
          {summary || "Untitled Event"}
        </h3>
      </div>

      {/* Description */}
      {description ? (
        <div className="flex flex-col gap-1.5">
          <p className="text-text-secondary font-semibold text-xs uppercase tracking-wide opacity-70">
            Description
          </p>
          <p className="text-text-secondary font-regular text-sm leading-relaxed">
            {truncateDescription(description)}
          </p>
        </div>
      ) : (
        <p className="text-text-secondary font-regular text-sm">
          No description available
        </p>
      )}

      {/* Location */}
      {location ? (
        <div className="flex flex-col gap-1.5">
          <p className="text-text-secondary font-semibold text-xs uppercase tracking-wide opacity-70">
            Location
          </p>
          <p className="text-text-secondary font-regular text-sm">{location}</p>
        </div>
      ) : (
        <p className="text-text-secondary font-regular text-sm">
          No location available
        </p>
      )}

      {/* Date & Time - Combined if same day */}
      {(formattedStartDate && formattedStartTime) ||
      (formattedEndDate && formattedEndTime) ? (
        <div className="flex flex-col gap-1.5 pt-2 border-t border-border-medium group-hover:border-white transition-colors duration-300">
          <p className="text-text-secondary font-semibold text-xs uppercase tracking-wide opacity-70">
            When
          </p>
          <div className="flex flex-col gap-1">
            {sameDay &&
            formattedStartDate &&
            formattedStartTime &&
            formattedEndTime ? (
              <p className="text-text-secondary font-regular text-sm">
                {formattedStartDate} • {formattedStartTime} - {formattedEndTime}
              </p>
            ) : (
              <>
                {formattedStartDate && formattedStartTime && (
                  <p className="text-text-secondary font-regular text-sm">
                    <span className="font-medium">Start:</span>{" "}
                    {formattedStartDate} at {formattedStartTime}
                  </p>
                )}
                {formattedEndDate && formattedEndTime && (
                  <p className="text-text-secondary font-regular text-sm">
                    <span className="font-medium">End:</span> {formattedEndDate}{" "}
                    at {formattedEndTime}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        <p className="text-text-secondary font-regular text-sm">
          No date and time available
        </p>
      )}
    </Link>
  );
};

export default EventCard;
