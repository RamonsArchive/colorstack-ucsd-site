import React from "react";
import { AnnouncementType } from "../lib/GlobalTypes";
import Link from "next/link";

const Announcement = ({ announcement }: { announcement: AnnouncementType }) => {
  const { title, description, link, date } = announcement;

  const content = (
    <div className="flex flex-col gap-4 bg-bg-secondary p-6 xs:p-8 rounded-4xl shadow-lg border border-border-medium hover:border-primary-500 hover:shadow-xl transition-all duration-300 group">
      <div className="flex flex-row items-center justify-between gap-4 pb-3 border-b border-border-medium group-hover:border-primary-500/40 transition-colors duration-300">
        <h3 className="text-xl xs:text-2xl font-semibold text-text-primary">
          {title}
        </h3>
        <span className="text-xs font-medium text-text-accent bg-primary-500/10 px-3 py-1 rounded-full whitespace-nowrap">
          {date}
        </span>
      </div>

      <p className="text-sm xs:text-base text-text-secondary leading-relaxed">
        {description}
      </p>

      {link && (
        <div className="flex items-center gap-2 pt-2">
          <span className="text-sm font-semibold text-text-accent group-hover:underline transition-all duration-300">
            Check it out &rarr;
          </span>
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default Announcement;
