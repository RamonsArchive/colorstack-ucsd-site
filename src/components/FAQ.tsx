import React from "react";
import { FAQCardType } from "../lib/GlobalTypes";
import TitleSection from "./TitleSection";
import FAQCard from "./FAQCard";
import { faqData } from "../constants/joinus_index";
const FAQ = () => {
  const { titleSection, cards } = faqData;
  return (
    <div className="flex flex-col gap-10 w-full">
      <TitleSection title={titleSection.title} index={titleSection.index} />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {cards.map((card) => (
          <FAQCard key={card.question} card={card} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
