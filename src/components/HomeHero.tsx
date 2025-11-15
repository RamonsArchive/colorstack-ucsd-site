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
          {/* Wave effect with dots - inline SVG for individual wave animation */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
            className="w-full h-full"
            style={{
              objectFit: "cover",
              objectPosition: "center bottom",
              minHeight: "110%",
              height: "110%",
            }}
          >
            <defs>
              {/* Dot pattern */}
              <pattern
                id="dotPattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="1" fill="#CDCDCD" opacity="0.2" />
              </pattern>

              {/* Wave gradient */}
              <linearGradient
                id="waveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#CDCDCD" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#CDCDCD" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#CDCDCD" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Background with dot pattern */}
            <rect width="1200" height="800" fill="url(#dotPattern)" />

            {/* Wave shapes - each with different animation */}
            <path
              id="wave1"
              d="M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z"
              fill="url(#waveGradient)"
            />
            <path
              id="wave2"
              d="M0,500 Q400,400 800,500 T1200,500 L1200,800 L0,800 Z"
              fill="url(#waveGradient)"
              opacity="0.6"
            />
            <path
              id="wave3"
              d="M0,300 Q200,200 400,300 T800,300 T1200,300 L1200,800 L0,800 Z"
              fill="url(#waveGradient)"
              opacity="0.4"
            />
          </svg>
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
