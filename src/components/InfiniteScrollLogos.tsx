"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { logoPaths } from "../constants/home_index";
import { Logo } from "../utils/GlobalTypes";

const InfiniteScrollLogos = ({ logos }: { logos: Logo[] }) => {
  const firstSetRef = useRef<HTMLDivElement>(null);
  const secondSetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const measureWidth = () => {
      // Use requestAnimationFrame to ensure DOM is fully rendered
      requestAnimationFrame(() => {
        if (
          firstSetRef.current &&
          secondSetRef.current &&
          containerRef.current
        ) {
          // Measure from start of container to start of second set
          // This includes first set width + gap-12
          const firstSetLeft = firstSetRef.current.offsetLeft;
          const secondSetLeft = secondSetRef.current.offsetLeft;
          const distance = secondSetLeft - firstSetLeft;
          setScrollDistance(-distance);
        }
      });
    };

    // Measure on mount with a small delay to ensure rendering
    const timeoutId = setTimeout(measureWidth, 100);
    window.addEventListener("resize", measureWidth);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", measureWidth);
    };
  }, [logos]);

  return (
    <div className="overflow-hidden w-full min-w-0">
      <div
        ref={containerRef}
        className="flex flex-row gap-12 relative"
        style={
          {
            animation: scrollDistance
              ? `scroll-left ${20}s linear infinite`
              : "none",
            "--scroll-distance": `${scrollDistance}px`,
          } as React.CSSProperties & { "--scroll-distance": string }
        }
      >
        {/* First set of logos - used for measurement */}
        <div ref={firstSetRef} className="flex items-center gap-12 shrink-0">
          {logos.map((logo, idx) => {
            const logoPath = logoPaths[logo.id];
            if (!logoPath) return null;
            return (
              <a
                key={`first-${idx}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-text-primary opacity-60 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center w-10 h-10"
              >
                <Image
                  src={logoPath}
                  alt={logo.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </a>
            );
          })}
        </div>
        {/* Duplicate set for seamless loop */}
        <div ref={secondSetRef} className="flex items-center gap-12 shrink-0">
          {logos.map((logo, idx) => {
            const logoPath = logoPaths[logo.id];
            if (!logoPath) return null;
            return (
              <a
                key={`second-${idx}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-text-primary opacity-60 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center w-10 h-10"
              >
                <Image
                  src={logoPath}
                  alt={logo.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </a>
            );
          })}
        </div>
        {/* Third duplicate set to ensure coverage on all screen sizes */}
        <div className="flex items-center gap-12 shrink-0">
          {logos.map((logo, idx) => {
            const logoPath = logoPaths[logo.id];
            if (!logoPath) return null;
            return (
              <a
                key={`third-${idx}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-text-primary opacity-60 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center w-10 h-10"
              >
                <Image
                  src={logoPath}
                  alt={logo.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollLogos;
