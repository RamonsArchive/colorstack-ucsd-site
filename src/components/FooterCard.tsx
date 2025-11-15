import React from "react";
import { FooterDataType } from "../lib/GlobalTypes";
import Link from "next/link";

const FooterCard = ({ data }: { data: FooterDataType }) => {
  const { index, title, data: footerData } = data;
  return (
    <div className="flex flex-col gap-5 justify-start items-start pr-10">
      <div className="flex flex-row gap-5 items-center w-full">
        <h1 className="font-bold text-xl text-text-primary">
          0{index}. {title}
        </h1>
        <div className="h-[0.5px] flex-1 min-w-0 bg-text-primary transition-all duration-300 ease-in-out"></div>
      </div>
      <div className="flex flex-col gap-3 text-sm ">
        {footerData.map((item) => {
          // Handle email items
          if (item.email) {
            return (
              <a
                key={item.id}
                href={`mailto:${item.email}`}
                className="font-light text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            );
          }
          // Handle link items
          if (item.href) {
            return (
              <Link
                key={item.id}
                href={item.href}
                className="font-light text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FooterCard;
