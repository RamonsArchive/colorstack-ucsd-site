import React from "react";
import { GenericHeroData } from "@/src/lib/GlobalTypes";
import Button from "./Button";
import Image from "next/image";

const GenericHero = ({ heroData }: { heroData: GenericHeroData }) => {
  const { title, description, primaryButton, secondaryButton, images } =
    heroData;
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

        <div className="relative z-10 flex flex-col gap-8 lg:gap-16 max-w-3xl w-full overflow-visible">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
            {title}
          </h1>

          <div className="flex flex-col w-full gap-4 lg:gap-6 overflow-visible">
            <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-6  w-full overflow-visible">
              <div className="flex flex-col gap-10 w-full lg:w-2/3">
                <p className="text-lg sm:text-center lg:text-left text-text-secondary text-regular">
                  {description}
                </p>
                {(primaryButton || secondaryButton) && (
                  <div className="flex flex-row gap-5">
                    {primaryButton && (
                      <Button
                        variant={primaryButton.variant}
                        href={primaryButton.href}
                      >
                        {primaryButton.name}
                      </Button>
                    )}
                    {secondaryButton && (
                      <Button
                        variant={secondaryButton.variant}
                        href={secondaryButton.href}
                      >
                        {secondaryButton.name}
                      </Button>
                    )}
                  </div>
                )}
              </div>

              {/* to the right of text and button but hidden on desktop */}
              <div className="hidden lg:flex flex-1 justify-center items-center overflow-visible">
                <div className="relative z-10 w-full h-full max-w-[300px] xs:max-w-lg md:max-w-xl lg:max-w-full lg:flex-1 min-h-[150px] md:min-h-[200px] lg:min-h-[250px] overflow-visible">
                  <Image
                    src={images.image1.src}
                    alt={images.image1.alt}
                    width={200}
                    height={200}
                    className="absolute -right-[10%] top-[5%] w-22 h-22 xs:w-36 xs:h-36 lg:w-58 lg:h-58 object-cover rounded-4xl transition-all duration-300 ease-in-out hover:scale-110 -rotate-8 shadow-lg z-10"
                  />
                </div>
              </div>
            </div>
            {/* below the text and button */}
            <div className="flex flex-1 justify-center items-center ">
              <div className="relative z-10 w-full h-full flex-1 min-h-[250px] min-w-[200px] xs:max-w-xl lg:max-w-full lg:min-h-[150px] lg:max-h-[250px] overflow-visible">
                {/* left image */}
                <Image
                  src={images.image2.src}
                  alt={images.image2.alt}
                  width={200}
                  height={200}
                  className="absolute top-[40%] lg:-top-[50%]  w-32 h-32 xs:w-48 xs:h-48 sm:w-58 sm:h-58 object-cover rounded-4xl transition-all duration-300 ease-in-out hover:scale-110 rotate-6 shadow-lg z-10"
                />
                {/* center image */}
                <Image
                  src={images.image3.src}
                  alt={images.image3.alt}
                  width={200}
                  height={200}
                  className="absolute top-[30%] lg:-top-[50%] right-[5%] lg:right-[30%] w-32 h-32 xs:w-48 xs:h-48 sm:w-58 sm:h-58 object-cover rounded-4xl transition-all duration-300 ease-in-out hover:scale-110 -rotate-3 shadow-lg z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericHero;
