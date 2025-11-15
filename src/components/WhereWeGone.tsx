"use client";

import React from "react";
import { WhereWeGoneData } from "../constants/home_index";
import TitleSection from "./TitleSection";
import InfiniteScrollLogos from "./InfiniteScrollLogos";

const WhereWeGone = () => {
  return (
    <div className="flex flex-col xs:flex-row gap-5 w-full items-start xs:items-center overflow-hidden">
      <TitleSection
        title={WhereWeGoneData.titleSection.title}
        index={WhereWeGoneData.titleSection.index}
        isInfinite={false}
      />
      <div className="flex-1 min-w-0 overflow-hidden max-w-full">
        <InfiniteScrollLogos logos={WhereWeGoneData.logos} direction="left" />
      </div>
    </div>
  );
};

export default WhereWeGone;
