import React from "react";
import { FAQCardType } from "../lib/GlobalTypes";
const FAQCard = ({ card }: { card: FAQCardType }) => {
  const { question, answer } = card;
  return (
    <div className="group flex flex-col gap-3 bg-bg-secondary p-8 rounded-4xl shadow-lg border border-border-medium hover:border-white hover:shadow-xl transition-all duration-300 cursor-pointer">
      <h3 className="text-xl xs:text-2xl font-semibold text-text-primary">
        {question}
      </h3>
      <div className="h-[0.5px] w-full bg-text-secondary group-hover:bg-white group-active:bg-white transition-all duration-300 ease-in-out max-w-xs"></div>
      <p className="text-md text-text-secondary">{answer}</p>
    </div>
  );
};

export default FAQCard;
