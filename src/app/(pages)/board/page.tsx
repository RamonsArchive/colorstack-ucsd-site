import GenericHero from "@/src/components/GenericHero";
import { boardHeroData } from "@/src/constants/board_index";
import React from "react";
import ExecutiveBoard from "@/src/components/ExecutiveBoard";
import DevelopmentBoard from "@/src/components/DevelopmentBoard";
import OutreachBoard from "@/src/components/OutreachBoard";
import FinanceBoard from "@/src/components/FinanceBoard";

const BoardPage = () => {
  return (
    <div className="flex items-center w-full">
      <div className="flex flex-col gap-26 w-full max-w-full">
        <div className="flex flex-col gap-10 xs:p-5 lg:p-10">
          <GenericHero heroData={boardHeroData} />
        </div>
        <div className="flex flex-col gap-26 p-5 lg:p-10">
          <ExecutiveBoard />
          <DevelopmentBoard />
          <OutreachBoard />
          <FinanceBoard />
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
