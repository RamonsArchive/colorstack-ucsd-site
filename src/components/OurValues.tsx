import React from "react";
import { ourValuesData } from "@/src/constants/about_index";
import TitleSection from "./TitleSection";
import SkinnyCard from "./SkinnyCard";

const OurValues = () => {
  const { titleSection, cards } = ourValuesData;
  return (
    <div className="flex flex-col gap-10 w-full">
      <TitleSection title={titleSection.title} index={titleSection.index} />
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
        {cards.map((card) => (
          <SkinnyCard key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
};

export default OurValues;
