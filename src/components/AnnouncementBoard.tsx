import React from "react";
import Announcement from "./Announcement";
import TitleSection from "./TitleSection";
import { AnnouncementBoardData } from "../constants/home_index";
import announcement_index from "../constants/announcement_index";

const AnnouncementBoard = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <TitleSection
        title={AnnouncementBoardData.titleSection.title}
        index={AnnouncementBoardData.titleSection.index}
      />
      {announcement_index.length > 0 ? (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          {announcement_index.map((announcement) => (
            <Announcement key={announcement.id} announcement={announcement} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center p-10 text-2xl font-bold text-text-primary">
          No announcements right now
        </div>
      )}
    </div>
  );
};

export default AnnouncementBoard;
