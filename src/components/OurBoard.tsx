import React from "react";
import TitleSection from "./TitleSection";
import SkinnyCard from "./SkinnyCard";
import { ourBoardData } from "../constants/about_index";
const OurBoard = () => {
  const { titleSection, cards } = ourBoardData;
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

export default OurBoard;
