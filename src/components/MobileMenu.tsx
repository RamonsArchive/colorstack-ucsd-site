"use client";

import React from "react";
import { sidebarData } from "../constants/sidebar_index";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { navbarIcons } from "@/src/constants/navbar_index";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  //if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-background-900/80 backdrop-blur-sm z-40 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-background-900 border-l border-border-medium z-50 lg:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col w-full min-h-screen gap-10 p-6">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-text-primary hover:text-primary-500 transition-colors duration-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center w-full pr-8">
            <Link
              href="/"
              className="flex items-center justify-center w-full relative h-10"
              onClick={onClose}
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

          {/* Subtext */}
          <div className="flex flex-col gap-5 w-full">
            <p className="text-sm text-text-secondary">
              {sidebarData.subText.text1}
            </p>
            <p className="text-sm text-text-secondary">
              {sidebarData.subText.text2}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-5 w-fit">
            {sidebarData.links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="font-medium group flex flex-row items-center gap-3 text-lg text-text-primary transition-colors duration-300"
                onClick={onClose}
              >
                <div className="h-[0.1px] w-10 bg-text-primary group-hover:w-20 transition-all duration-300 ease-in-out"></div>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Socials */}
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
    </>
  );
};

export default MobileMenu;
