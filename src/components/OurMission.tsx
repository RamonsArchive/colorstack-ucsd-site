import React from "react";
import { OurMissionData } from "../constants/home_index";
import TitleSection from "./TitleSection";
import TextCard from "./TextCard";

const OurMission = () => {
  const { titleSection, textCards } = OurMissionData;
  return (
    <div className="flex flex-col gap-10 w-full">
      <TitleSection title={titleSection.title} index={titleSection.index} />
      <TextCard texts={textCards} />
    </div>
  );
};

export default OurMission;
