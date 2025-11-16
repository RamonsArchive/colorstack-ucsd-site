import React from "react";
import { FooterDataType } from "../lib/GlobalTypes";
import Link from "next/link";
import { footerIcons } from "../constants/footer_index";

const FooterCard = ({ data }: { data: FooterDataType }) => {
  const { index, title, data: footerData } = data;

  return (
    <div className="flex flex-col gap-5 justify-start items-start">
      <div className="flex flex-row gap-5 items-center w-full">
        <h1 className="font-bold text-xl text-text-primary">
          0{index}. {title}
        </h1>
        <div className="h-[0.5px] flex-1 min-w-0 bg-text-primary transition-all duration-300 ease-in-out max-w-sm"></div>
      </div>
      <div className="flex flex-col gap-3 text-sm">
        {footerData.map((item) => {
          // Check if item has an icon (social or other icon-enabled items)
          const icon = footerIcons(item.id);
          const hasIcon = !!icon;

          // Handle items with icons (socials, GitHub, etc.)
          if (hasIcon) {
            const href = item.email ? `mailto:${item.email}` : item.href;

            if (!href) return null;

            return (
              <Link
                key={item.id}
                href={href}
                className="flex flex-row items-center gap-2 font-light text-text-secondary hover:text-text-primary transition-colors duration-300"
                target={item.href ? "_blank" : undefined}
                rel={item.href ? "noopener noreferrer" : undefined}
              >
                {icon}
                <span className="text-sm font-light text-text-secondary hover:text-text-primary transition-colors duration-300">
                  {item.name}
                </span>
              </Link>
            );
          }

          // Handle email items without icons
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

          // Handle link items without icons
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
