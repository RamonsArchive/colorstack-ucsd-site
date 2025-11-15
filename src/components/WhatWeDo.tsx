import React from "react";
import TitleSection from "./TitleSection";
import { whatWeDoData } from "../constants/about_index";
import SkinnyCard from "./SkinnyCard";
const WhatWeDo = () => {
  const { titleSection, cards } = whatWeDoData;
  return (
    <div className="flex flex-col gap-10 w-full">
      <TitleSection title={titleSection.title} index={titleSection.index} />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {cards.map((card) => (
          <SkinnyCard key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
