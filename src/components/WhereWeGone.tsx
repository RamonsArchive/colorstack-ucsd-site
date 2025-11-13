"use client";

import React from "react";
import { LogoIcon, WhereWeGoneData } from "../constants/home_index";
import TitleSection from "./TitleSection";
import InfiniteScrollLogos from "./InfiniteScrollLogos";

const WhereWeGone = () => {
  return (
    <div className="flex flex-row gap-5 w-full items-center">
      <TitleSection
        title={WhereWeGoneData.titleSection.title}
        index={WhereWeGoneData.titleSection.index}
        isInfinite={true}
      />
      <InfiniteScrollLogos
        logos={WhereWeGoneData.logos}
        LogoIcon={(id) => <LogoIcon id={id} />}
      />
    </div>
  );
};

export default WhereWeGone;
