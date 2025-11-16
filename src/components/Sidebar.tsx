import React from "react";
import Image from "next/image";
import { sidebarData } from "@/src/constants/sidebar_index";
import Link from "next/link";
import { navbarIcons } from "@/src/constants/navbar_index";

const Sidebar = () => {
  return (
    <div className="hidden lg:block sticky top-0 self-start h-screen w-68 bg-background-900 border-r border-border-medium">
      <div className="flex flex-col w-full min-h-screen gap-10 p-6">
        <div className="flex items-center justify-center w-full pr-8">
          <Link
            href="/"
            className="flex items-center justify-center w-full relative h-10"
          >
            <Image
              src={sidebarData.logo.src}
              alt={sidebarData.logo.alt}
              fill
              priority
              sizes="25vw"
              className="object-cover"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <p className="text-sm text-text-secondary">
            {sidebarData.subText.text1}
          </p>
          <p className="text-sm text-text-secondary">
            {sidebarData.subText.text2}
          </p>
        </div>
        <div className="flex flex-col gap-5 w-fit">
          {sidebarData.links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="font-medium group flex flex-row items-center gap-3 text-lg text-text-primary transition-colors duration-300"
            >
              <div className="h-[0.5px] w-10 bg-text-primary group-hover:w-20 transition-all duration-300 ease-in-out"></div>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-row items-end gap-5 w-full mt-auto">
          {sidebarData.socials.map((social) => (
            <Link
              key={social.id}
              href={social.href}
              className="text-text-secondary hover:text-text-primary transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              {navbarIcons(social.id)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
