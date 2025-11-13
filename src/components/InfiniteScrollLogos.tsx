"use client";

import React, { useRef, useEffect, useState } from "react";

const InfiniteScrollLogos = ({
  logos,
  LogoIcon,
}: {
  logos: string[];
  LogoIcon: (id: string) => React.ReactElement;
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
    <div className="overflow-hidden w-full">
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
          {logos.map((logoId, idx) => (
            <div
              key={`first-${idx}`}
              className="shrink-0 text-text-primary opacity-60 flex items-center justify-center"
            >
              {LogoIcon(logoId)}
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div ref={secondSetRef} className="flex items-center gap-12 shrink-0">
          {logos.map((logoId, idx) => (
            <div
              key={`second-${idx}`}
              className="shrink-0 text-text-primary opacity-60 flex items-center justify-center"
            >
              {LogoIcon(logoId)}
            </div>
          ))}
        </div>
        {/* Third duplicate set to ensure coverage on all screen sizes */}
        <div className="flex items-center gap-12 shrink-0">
          {logos.map((logoId, idx) => (
            <div
              key={`third-${idx}`}
              className="shrink-0 text-text-primary opacity-60 flex items-center justify-center"
            >
              {LogoIcon(logoId)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollLogos;
