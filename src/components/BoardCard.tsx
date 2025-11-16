import React from "react";
import { BoardCardType } from "../lib/GlobalTypes";
import Image from "next/image";

const BoardCard = ({ card }: { card: BoardCardType }) => {
  const { name, title, image, favoriteSong, favoriteMovie, whyJoin, linkedin } =
    card;
  return (
    <div className="flex flex-col w-full items-center justify-center gap-3 p-6 xs:p-8 rounded-4xl shadow-lg border border-border-medium active:border-white hover:border-white hover:shadow-xl transition-all duration-300 cursor-pointer bg-bg-secondary">
      <div className="flex flex-row items-center justify-center w-full">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="w-full aspect-square object-cover rounded-4xl"
        />
      </div>
      <div className="flex flex-col w-full items-start">
        <h3 className="text-md xs:text-lg font-semibold text-text-primary">
          {name}
        </h3>
        <p className="text-sm xs:text-md text-text-secondary">{title}</p>
      </div>
    </div>
  );
};

export default BoardCard;
