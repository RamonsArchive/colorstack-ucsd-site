import React from "react";
import { footerData } from "../constants/footer_index";
import Image from "next/image";
import FooterCard from "./FooterCard";

const Footer = () => {
  const { affiliationData, contactData, quickLinksData, socialsData } =
    footerData;
  return (
    <div className="flex flex-col gap-10 border-t border-border-medium">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 p-10 w-full">
        <div className="flex flex-col gap-5 justify-start items-start">
          <div className="flex items-center justify-start w-full">
            <Image
              src={affiliationData.affiliations[0].logo.src}
              alt={affiliationData.affiliations[0].logo.alt}
              width={affiliationData.affiliations[0].logo.width}
              height={affiliationData.affiliations[0].logo.height}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-light text-text-secondary leading-relaxed">
              {affiliationData.affiliations[0].description}
            </p>
          </div>
        </div>
        <FooterCard data={socialsData} />

        <FooterCard data={contactData} />
        <FooterCard data={quickLinksData} />
      </div>
      <div className="flex flex-row gap-3 items-center py-3 px-10 border-t border-border-medium w-full bg-black">
        <p className="text-xs font-light text-text-muted">
          &copy; {new Date().getFullYear()} ColorStack at UCSD. All rights
          reserved.
        </p>
        <span className="text-xs text-text-muted">❤️</span>
      </div>
    </div>
  );
};

export default Footer;
