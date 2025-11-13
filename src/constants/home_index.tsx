import React from "react";
import { Logo } from "../utils/GlobalTypes";

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
      src: "/Assets/ramon_mcdarghmitchell.png",
      alt: "Home Image 1",
      width: 100,
      height: 100,
    },
    image2: {
      src: "/Assets/ramon_mcdarghmitchell.png",
      alt: "Home Image 2",
      width: 100,
      height: 100,
    },
    image3: {
      src: "/Assets/ramon_mcdarghmitchell.png",
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
  ],
};

export const homeTitleSections = {
  upcomingEvents: {
    id: "upcoming-events",
    index: 3,
    title: "Upcoming Events",
  },
  mission: {
    id: "mission",
    index: 4,
    title: "Our Mission",
  },
};

// Logo paths - using folder-based SVGs for maintainability
export const logoPaths: Record<string, string> = {
  // WhereWeGone logos
  google: "/Assets/WhereWeGone/google.svg",
  apple: "/Assets/WhereWeGone/apple.svg",
  meta: "/Assets/WhereWeGone/facebook.png",
  "qualcomm-institute": "/Assets/WhereWeGone/qualcomm_institute_logo.jpeg",
  // Partners logos
  clutchstudio: "/Assets/Partners/clutchstudio.svg",
  digitalrevolution: "/Assets/Partners/digitalrevolution.svg",
  qualcomm: "/Assets/Partners/qualcomm-logo.svg",
};
