"use client";
import React from "react";
import { PartnersData } from "../constants/home_index";
import TitleSection from "./TitleSection";
import InfiniteScrollLogos from "./InfiniteScrollLogos";

const Partners = () => {
  return (
    <div className="flex flex-row gap-5 w-full items-center overflow-hidden">
      <TitleSection
        title={PartnersData.titleSection.title}
        index={PartnersData.titleSection.index}
      />
      <div className="flex-1 min-w-0 overflow-hidden max-w-full">
        <InfiniteScrollLogos logos={PartnersData.logos} />
      </div>
    </div>
  );
};

export default Partners;
