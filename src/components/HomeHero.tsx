import React from "react";
import { homeHeroData } from "@/src/constants/home_index";
import Button from "./Button";
import Image from "next/image";

const HomeHero = () => {
  return (
    <div className="flex flex-col items-center border border-border-medium rounded-lg p-12">
      <div className="flex flex-col gap-16 max-w-3xl w-full">
        <h1 className="text-6xl font-bold text-center">{homeHeroData.title}</h1>

        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col gap-10 w-1/2">
            <p className="text-lg text-text-secondary">
              {homeHeroData.description}
            </p>
            <div className="flex flex-row gap-5">
              <Button
                variant={homeHeroData.aboutButton.variant}
                href={homeHeroData.aboutButton.href}
              >
                {homeHeroData.aboutButton.name}
              </Button>
              <Button
                variant={homeHeroData.joinButton.variant}
                href={homeHeroData.joinButton.href}
              >
                {homeHeroData.joinButton.name}
              </Button>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="relative w-full h-full flex-1 min-h-[400px] overflow-visible">
              <Image
                src={homeHeroData.images.image1.src}
                alt={homeHeroData.images.image1.alt}
                width={200}
                height={200}
                className="absolute top-0 right-0 w-48 h-48 object-cover rounded-lg transition-all duration-300 ease-in-out hover:scale-110 -rotate-8 shadow-lg z-10"
              />
              <Image
                src={homeHeroData.images.image2.src}
                alt={homeHeroData.images.image2.alt}
                width={200}
                height={200}
                className="absolute bottom-30 left-0 w-36 h-36 object-cover rounded-lg transition-all duration-300 ease-in-out hover:scale-110 rotate-6 shadow-lg z-10"
              />
              <Image
                src={homeHeroData.images.image3.src}
                alt={homeHeroData.images.image3.alt}
                width={200}
                height={200}
                className="absolute top-60 right-10 w-38 h-38 object-cover rounded-lg transition-all duration-300 ease-in-out hover:scale-110 rotate-3 shadow-lg z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
