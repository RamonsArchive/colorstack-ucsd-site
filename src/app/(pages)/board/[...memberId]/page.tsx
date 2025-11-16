import React from "react";
import { getMemberById } from "@/src/constants/board_index";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const MemberPage = async ({
  params,
}: {
  params: Promise<{ memberId: string }>;
}) => {
  const memberId = (await params).memberId;
  const member = getMemberById(memberId);

  if (!member) {
    notFound();
  }

  const { name, title, favoriteSong, favoriteMovie, whyJoin, linkedin, image } =
    member;

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col gap-10 w-full max-w-4xl p-5 lg:p-10">
        {/* Member Card */}
        <div className="flex flex-col gap-6 bg-bg-secondary p-6 xs:p-8 rounded-4xl shadow-lg border border-border-medium">
          {/* Image and Basic Info */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
            {/* Image */}
            <div className="shrink-0 w-full sm:w-72 lg:w-80">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full aspect-square object-cover rounded-4xl"
              />
            </div>

            {/* Name and Title */}
            <div className="flex flex-col gap-3 w-full lg:flex-1 items-center lg:items-start">
              <div className="flex flex-col gap-2 w-full">
                <h1 className="text-3xl xs:text-4xl lg:text-5xl font-bold text-text-primary text-center lg:text-left">
                  {name}
                </h1>
                <p className="text-lg xs:text-xl text-text-secondary text-center lg:text-left">
                  {title}
                </p>
              </div>

              {/* LinkedIn Link */}
              {linkedin && (
                <Link
                  href={
                    linkedin.startsWith("http")
                      ? linkedin
                      : `https://${linkedin}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary underline hover:text-text-primary transition-colors duration-300 text-sm xs:text-base"
                >
                  LinkedIn →
                </Link>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="h-[0.5px] w-full bg-border-medium"></div>

          {/* Why Join Section */}
          <div className="flex flex-col gap-3">
            <p className="text-text-secondary font-semibold text-xs uppercase tracking-wide opacity-70">
              Why I Joined ColorStack
            </p>
            <div className="text-text-secondary font-regular text-sm xs:text-base leading-relaxed">
              {whyJoin}
            </div>
          </div>

          {/* Divider */}
          <div className="h-[0.5px] w-full bg-border-medium"></div>

          {/* Favorite Song and Movie */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            {/* Favorite Song */}
            <div className="flex flex-col gap-2 flex-1">
              <p className="text-text-secondary font-semibold text-xs uppercase tracking-wide opacity-70">
                Favorite Song
              </p>
              <p className="text-text-secondary font-regular text-sm xs:text-base">
                {favoriteSong}
              </p>
            </div>

            {/* Favorite Movie */}
            <div className="flex flex-col gap-2 flex-1">
              <p className="text-text-secondary font-semibold text-xs uppercase tracking-wide opacity-70">
                Favorite Movie
              </p>
              <p className="text-text-secondary font-regular text-sm xs:text-base">
                {favoriteMovie}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
