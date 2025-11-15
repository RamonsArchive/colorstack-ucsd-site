"use client";
import React from "react";
import { PartnersData } from "../constants/home_index";
import TitleSection from "./TitleSection";
import InfiniteScrollLogos from "./InfiniteScrollLogos";

const Partners = () => {
  return (
    <>
      <div className="hidden xs:flex flex-col xs:flex-row gap-5 w-full items-start xs:items-center overflow-hidden">
        <div className="flex-1 min-w-0 overflow-hidden max-w-full">
          <InfiniteScrollLogos logos={PartnersData.logos} direction="right" />
        </div>
        <TitleSection
          title={PartnersData.titleSection.title}
          index={PartnersData.titleSection.index}
          isInfinite={false}
        />
      </div>
      <div className="flex xs:hidden flex-col xs:flex-row gap-5 w-full items-start xs:items-center overflow-hidden">
        <TitleSection
          title={PartnersData.titleSection.title}
          index={PartnersData.titleSection.index}
          isInfinite={false}
        />
        <div className="flex-1 min-w-0 overflow-hidden max-w-full">
          <InfiniteScrollLogos logos={PartnersData.logos} direction="right" />
        </div>
      </div>
    </>
  );
};

export default Partners;
