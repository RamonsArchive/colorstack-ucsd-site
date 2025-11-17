import React from "react";

export const homeHeroData = {
  title: (
    <>
      The San Diego Color<span className="text-primary-500">S</span>tack Chapter
      is Here!
    </>
  ),
  description: (
    <>
      Interested in joining the only Black & Hispanic software engineering club
      at UCSD? Look no further than Color
      <span className="text-primary-500">S</span>tack — we welcome everyone!
      Fill out a membership form and come say hi at our next event!
    </>
  ),
  aboutButton: {
    name: "About Us",
    href: "/about",
    variant: "primary",
  },
  joinButton: {
    name: "Join Us",
    href: "/joinus",
    variant: "secondary",
  },
  images: {
    image1: {
      src: "/Board/Executive/emilynguyen_pres.jpg",
      alt: "Home Image 1",
      width: 100,
      height: 100,
    },
    image2: {
      src: "/Board/Executive/Arturo_vpo.jpg",
      alt: "Home Image 2",
      width: 100,
      height: 100,
    },
    image3: {
      src: "/Board/Development/ramon_mcdarghmitchell.png",
      alt: "Home Image 3",
      width: 100,
      height: 100,
    },
  },
};

export const WhereWeGoneData = {
  titleSection: {
    id: "where-we-gone",
    index: 1,
    title: "Where We've Gone",
  },
  logos: [
    { id: "google", name: "Google", href: "https://www.google.com" },
    { id: "apple", name: "Apple", href: "https://www.apple.com" },
    { id: "meta", name: "Meta", href: "https://www.meta.com" },
    {
      id: "qualcomm-institute",
      name: "Qualcomm Institute",
      href: "https://qi.ucsd.edu/",
    },
  ],
};

export const PartnersData = {
  titleSection: {
    id: "partners",
    index: 2,
    title: "Partners",
  },
  logos: [
    {
      id: "clutchstudio",
      name: "Clutch Studio",
      href: "https://clutchstudio.dev",
    },
    {
      id: "digitalrevolution",
      name: "Digital Revolution",
      href: "https://digitalrevolution.foundation",
    },
    {
      id: "qualcomm",
      name: "Qualcomm",
      href: "https://www.qualcomm.com",
    },
    {
      id: "cse",
      name: "CSE",
      href: "https://cse.ucsd.edu",
    },
  ],
};

export const UpcomingEventsData = {
  titleSection: {
    id: "upcoming-events",
    index: 3,
    title: "Upcoming Events",
  },
};

export const OurMissionData = {
  titleSection: {
    id: "our-mission",
    index: 4,
    title: "Our Mission",
  },
  textCards: [
    {
      id: "description1",
      text: (
        <>
          Color<span className="text-primary-500">S</span>tack at UCSD is
          dedicated to increasing the number of Black and Latinx Computer
          Science graduates entering the tech industry.
        </>
      ),
    },
    {
      id: "description2",
      text: (
        <>
          We provide mentorship, technical workshops, career development
          resources, and a supportive community to help our members succeed in
          their academic and professional journeys.
        </>
      ),
    },
  ],
};

export const homeTitleSections = {
  mission: {
    id: "mission",
    index: 4,
    title: "Our Mission",
  },
};

// Logo paths - using folder-based SVGs for maintainability
export const logoPaths: Record<string, string> = {
  // WhereWeGone logos
  google: "/WhereWeGone/google.svg",
  apple: "/WhereWeGone/apple.svg",
  meta: "/WhereWeGone/facebook.png",
  "qualcomm-institute": "/WhereWeGone/qualcomm_institute_logo.jpeg",
  // Partners logos
  clutchstudio: "/Partners/clutchstudio.svg",
  digitalrevolution: "/Partners/digitalrevolution.svg",
  qualcomm: "/Partners/qualcomm-logo.svg",
  cse: "/Partners/CSE-Icon.png",
};
