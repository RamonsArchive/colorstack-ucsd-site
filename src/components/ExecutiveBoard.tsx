import React from "react";
import BoardCard from "./BoardCard";
import { executiveBoardData } from "../constants/board_index";
import TitleSection from "./TitleSection";

const ExecutiveBoard = () => {
  const { titleSection, cards } = executiveBoardData;
  return (
    <div className="flex flex-col gap-10 w-full">
      <TitleSection title={titleSection.title} index={titleSection.index} />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {cards.map((card) => (
          <BoardCard key={card.name + card.title} card={card} />
        ))}
      </div>
    </div>
  );
};

export default ExecutiveBoard;
