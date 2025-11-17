"use server";
import { CalendarEvent } from "../GlobalTypes";
import { parseServerActionResponse } from "../utils";

export const fetchUpcomingEvents = async () => {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    const calendarId = process.env.GOOGLE_CALENDAR_ID;
    if (!apiKey || !calendarId) {
      console.error("Missing GOOGLE_API_KEY or GOOGLE_CALENDAR_ID");
      return parseServerActionResponse({
        status: "ERROR",
        error: "Missing GOOGLE_API_KEY or GOOGLE_CALENDAR_ID",
        data: null,
      });
    }
    const url = new URL(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        calendarId
      )}/events`
    );

    const timeMin = new Date().toISOString();

    url.searchParams.set("key", apiKey);
    url.searchParams.set("timeMin", timeMin);
    url.searchParams.set("singleEvents", "true");
    url.searchParams.set("orderBy", "startTime");
    url.searchParams.set("maxResults", "3");

    const res = await fetch(url.toString(), {
      //cache: "no-store",
      next: { revalidate: 300 }, // Or cache for 5 minutes
    });
    if (!res.ok) {
      return parseServerActionResponse({
        status: "ERROR",
        error: res.statusText,
        data: null,
      });
    }
    const data = await res.json();
    return parseServerActionResponse({
      status: "SUCCESS",
      error: null,
      data: data.items as CalendarEvent[],
    });
  } catch (error) {
    // Better error handling - log the actual error
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error fetching calendar events:", errorMessage);

    return parseServerActionResponse({
      status: "ERROR",
      error: errorMessage,
      data: null,
    });
  }
};
