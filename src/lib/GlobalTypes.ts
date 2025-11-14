export type ActionState<T> = {
    status: "SUCCESS" | "ERROR",
    error: string | null,
    data: T | null,
  }

// Logo type definition
export type Logo = {
    id: string;
    name: string;
    href: string; 
  };
  

export type CalendarEvent = {
    id?: string;
    summary?: string;
    description?: string;
    start: { dateTime?: string; date?: string };
    end: { dateTime?: string; date?: string };
    location?: string;
    htmlLink?: string;
  };

