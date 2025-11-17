"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { logoPaths } from "../constants/home_index";
import { Logo } from "../lib/GlobalTypes";

const InfiniteScrollLogos = ({
  logos,
  direction = "left",
}: {
  logos: Logo[];
  direction?: "left" | "right";
}) => {
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
          // For left: negative distance, for right: positive distance
          setScrollDistance(direction === "left" ? -distance : distance);
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
  }, [logos, direction]);

  return (
    <div className="overflow-hidden w-full min-w-0 py-2">
      <div
        ref={containerRef}
        className="flex flex-row gap-12 relative"
        style={
          {
            animation: scrollDistance
              ? `scroll-${direction} ${20}s linear infinite`
              : "none",
            "--scroll-distance": `${Math.abs(scrollDistance)}px`,
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
                className="shrink-0 text-text-primary opacity-70 active:opacity-100 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center w-12 h-12"
              >
                <Image
                  src={logoPath}
                  alt={logo.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </a>
            );
          })}
        </div>
        {/* Duplicate sets for seamless loop - using 5 sets to ensure coverage on all screen sizes */}
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
                className="shrink-0 text-text-primary opacity-70 active:opacity-100 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center w-12 h-12"
              >
                <Image
                  src={logoPath}
                  alt={logo.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </a>
            );
          })}
        </div>
        {/* Third duplicate set */}
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
                className="shrink-0 text-text-primary opacity-70 active:opacity-100 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center w-12 h-12"
              >
                <Image
                  src={logoPath}
                  alt={logo.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </a>
            );
          })}
        </div>
        {/* Fourth duplicate set - ensures seamless scrolling on wide screens */}
        <div className="xs:flex hidden items-center gap-12 shrink-0">
          {logos.map((logo, idx) => {
            const logoPath = logoPaths[logo.id];
            if (!logoPath) return null;
            return (
              <a
                key={`fourth-${idx}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-text-primary opacity-70 active:opacity-100 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center w-12 h-12"
              >
                <Image
                  src={logoPath}
                  alt={logo.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </a>
            );
          })}
        </div>
        {/* Fifth duplicate set - extra coverage for very wide screens */}
        <div className="xs:flex hidden items-center gap-12 shrink-0">
          {logos.map((logo, idx) => {
            const logoPath = logoPaths[logo.id];
            if (!logoPath) return null;
            return (
              <a
                key={`fifth-${idx}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-text-primary opacity-70 active:opacity-100 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center w-12 h-12"
              >
                <Image
                  src={logoPath}
                  alt={logo.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
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
