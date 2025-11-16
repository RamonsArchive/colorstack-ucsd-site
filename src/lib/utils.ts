import { ActionState } from "./GlobalTypes";

export const parseServerActionResponse = <T>(response: ActionState<T>) => {
  return JSON.parse(JSON.stringify(response));
};

/**
 * Formats an ISO 8601 date string to a readable time format (e.g., "7:00pm" or "8:00am")
 * @param dateTimeString - ISO 8601 date string (e.g., "2024-10-04T17:00:00-07:00")
 * @returns Formatted time string (e.g., "5:00pm") or empty string if invalid
 */
export const formatTime = (
  dateTimeString: string | undefined | null
): string => {
  if (!dateTimeString) return "";

  try {
    const date = new Date(dateTimeString);

    // Check if date is valid
    if (isNaN(date.getTime())) return "";

    // Format to 12-hour time with am/pm
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const displayHours = hours % 12 || 12; // Convert 0 to 12 for midnight
    const displayMinutes = minutes.toString().padStart(2, "0");

    return `${displayHours}:${displayMinutes}${ampm}`;
  } catch {
    return "";
  }
};

/**
 * Formats an ISO 8601 date string to a readable date format (e.g., "October 4, 2024")
 * @param dateTimeString - ISO 8601 date string
 * @returns Formatted date string or empty string if invalid
 */
export const formatDate = (
  dateTimeString: string | undefined | null
): string => {
  if (!dateTimeString) return "";

  try {
    const date = new Date(dateTimeString);

    // Check if date is valid
    if (isNaN(date.getTime())) return "";

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "";
  }
};

/**
 * Checks if two ISO 8601 date strings are on the same day
 * @param dateTimeString1 - First ISO 8601 date string
 * @param dateTimeString2 - Second ISO 8601 date string
 * @returns True if both dates are on the same day
 */
export const isSameDay = (
  dateTimeString1: string | undefined | null,
  dateTimeString2: string | undefined | null
): boolean => {
  if (!dateTimeString1 || !dateTimeString2) return false;

  try {
    const date1 = new Date(dateTimeString1);
    const date2 = new Date(dateTimeString2);

    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) return false;

    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  } catch {
    return false;
  }
};

export const createMemberId = (name: string, title: string): string => {
  const nameSlug = name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special chars
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with single

  const titleSlug = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  return `${nameSlug}-${titleSlug}`;
};
