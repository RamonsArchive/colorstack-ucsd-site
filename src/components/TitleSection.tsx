import React from "react";

const TitleSection = ({
  title,
  index,
  isInfinite = true,
}: {
  title: string;
  index: number;
  isInfinite?: boolean;
}) => {
  return (
    <div
      className={`flex flex-row gap-10 items-center ${
        isInfinite ? "w-full" : "w-fit"
      }`}
    >
      <h2 className="text-4xl font-bold whitespace-nowrap shrink-0">
        0{index}. {title}
      </h2>
      {isInfinite && (
        <div className="h-[0.5px] flex-1 min-w-0 bg-text-primary transition-all duration-300 ease-in-out"></div>
      )}
    </div>
  );
};

export default TitleSection;
