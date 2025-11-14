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
            })
        }
        const timeMin = new Date().toISOString();
        const url = new URL(
          `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
            calendarId
          )}/events`
        );
      
        url.searchParams.set("key", apiKey);
        //url.searchParams.set("timeMin", timeMin);
        url.searchParams.set("singleEvents", "true");
        url.searchParams.set("orderBy", "startTime");
        url.searchParams.set("maxResults", "3");
      
        const res = await fetch(url.toString(), {
            cache: "no-store",
            //next: { revalidate: 300 } // Or cache for 5 minutes
        });
        console.log("Response from Google Calendar API", res);
        console.log(res);
        if (!res.ok) {
            return parseServerActionResponse({
                status: "ERROR",
                error: res.statusText,
                data: null,
            })
        }
        const data = await res.json();
        console.log(data);
        return parseServerActionResponse({
            status: "SUCCESS",
            error: null,
            data: data.items as CalendarEvent[],
        })

    } catch (error) {
        return parseServerActionResponse({
            status: "ERROR",
            error: null,
            data: null,
        })
        
    }
    
}