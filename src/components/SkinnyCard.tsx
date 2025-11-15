import React from "react";
import { StaticCardType } from "../lib/GlobalTypes";

const SkinnyCard = ({ card }: { card: StaticCardType }) => {
  const { icon, title, description } = card;
  return (
    <div className="flex flex-col items-center gap-3 bg-bg-secondary p-8 rounded-4xl shadow-lg border border-border-medium active:hover-white hover:border-white hover:shadow-xl transition-all duration-300 cursor-pointer">
      <div className="flex flex-row gap-3 items-center text-xl lg:text-2xl">
        {icon}
      </div>
      <div className="flex flex-col gap-3 items-center text-center">
        <h3 className="text-xl xs:text-2xl font-semibold text-text-primary">
          {title}
        </h3>
        <p className="text-md text-text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default SkinnyCard;
