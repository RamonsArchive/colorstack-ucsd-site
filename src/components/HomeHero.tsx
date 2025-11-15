import React from "react";
import { homeHeroData } from "@/src/constants/home_index";
import Button from "./Button";
import Image from "next/image";

const HomeHero = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] shrink-0 max-w-7xl w-full overflow-hidden">
      <div className="relative flex flex-col items-center justify-center xs:border xs:border-border-medium rounded-4xl p-8 lg:p-12 h-full overflow-hidden shadow-lg">
        {/* Futuristic wave/radial background */}
        <div className="absolute inset-0 opacity-80 pointer-events-none z-10 overflow-hidden">
          {/* Wave effect with dots */}
          <Image
            src="/Assets/Background/wave-dots.svg"
            alt=""
            fill
            className="object-cover animate-wave-float"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>

        <div className="relative z-10 flex flex-col gap-8 lg:gap-16 max-w-3xl w-full">
          <h1 className="text-4xl lg:text-6xl font-bold text-center">
            {homeHeroData.title}
          </h1>

          <div className="flex flex-col lg:flex-row justify-between w-full">
            <div className="flex flex-col gap-10 w-full lg:w-1/2">
              <p className="text-lg text-text-secondary text-regular">
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
            <div className="flex flex-1 justify-center items-center">
              <div className="relative z-10 w-full h-full max-w-[300px] xs:max-w-lg md:max-w-xl lg:max-w-full lg:flex-1 min-h-[200px] md:min-h-[300px] lg:min-h-[400px] overflow-visible">
                <Image
                  src={homeHeroData.images.image1.src}
                  alt={homeHeroData.images.image1.alt}
                  width={200}
                  height={200}
                  className="absolute top-10 right-0 lg:top-0 w-22 h-22 xs:w-36 xs:h-36 sm:w-48 sm:h-48 object-cover rounded-4xl transition-all duration-300 ease-in-out hover:scale-110 -rotate-8 shadow-lg z-10"
                />
                {/* left image */}
                <Image
                  src={homeHeroData.images.image2.src}
                  alt={homeHeroData.images.image2.alt}
                  width={200}
                  height={200}
                  className="absolute bottom-15 left-0 xs:bottom-5 lg:bottom-30 w-22 h-22 xs:w-32 xs:h-32 sm:w-36 sm:h-36  object-cover rounded-4xl transition-all duration-300 ease-in-out hover:scale-110 rotate-6 shadow-lg z-10"
                />
                {/* center image */}
                <Image
                  src={homeHeroData.images.image3.src}
                  alt={homeHeroData.images.image3.alt}
                  width={200}
                  height={200}
                  className="absolute top-25 right-23 xs:right-35 sm:right-60 lg:top-60 lg:right-10 w-26 h-26 xs:w-32 xs:h-32 sm:w-38 sm:h-38 object-cover rounded-4xl transition-all duration-300 ease-in-out hover:scale-110 rotate-3 shadow-lg z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
