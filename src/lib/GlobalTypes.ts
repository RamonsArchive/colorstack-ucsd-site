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


export type FooterLinkItem = {
    id: string;
    name: string;
    href: string;
    email?: never;
};

export type FooterEmailItem = {
    id: string;
    name: string;
    email: string;
    href?: never;
};

export type FooterItem = FooterLinkItem | FooterEmailItem;

export type FooterDataType = {
    index: number;
    title: string;
    data: FooterItem[];
}



