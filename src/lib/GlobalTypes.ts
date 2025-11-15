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

export type ButtonType = {
  name: string;
  href: string;
  variant: "primary" | "secondary";
}

export type GenericHeroData = {
  title: React.ReactNode;
  description: React.ReactNode;
  primaryButton?: ButtonType;
  secondaryButton?: ButtonType;
  images: {
    image1: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    image2: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    image3: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
}


