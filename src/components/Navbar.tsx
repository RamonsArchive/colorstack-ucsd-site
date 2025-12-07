"use client";

import React, { useState, useEffect } from "react";
import { sidebarData } from "../constants/sidebar_index";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

// Base Navbar component (reusable for both static and floating)
const NavbarContent = ({
  onMenuToggle,
  isMenuOpen,
}: {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}) => {
  return (
    <div className="flex justify-between w-full h-[46px] px-10 py-5 bg-background-900">
      <div className="flex items-center justify-between w-full h-full">
        <Link
          href="/"
          className="flex relative items-center justify-center h-10 w-50"
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
      <button
        onClick={onMenuToggle}
        className="flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-text-primary" />
        ) : (
          <MenuIcon className="w-6 h-6 text-text-primary" />
        )}
      </button>
    </div>
  );
};

// Static Navbar (default, always visible)
const StaticNavbar = ({
  onMenuToggle,
  isMenuOpen,
}: {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}) => {
  return (
    <div className="lg:hidden relative z-10 w-full shrink-0">
      <NavbarContent onMenuToggle={onMenuToggle} isMenuOpen={isMenuOpen} />
    </div>
  );
};

// Floating Navbar (appears when scrolling down past static navbar)
const FloatingNavbar = ({
  isVisible,
  onMenuToggle,
  isMenuOpen,
}: {
  isVisible: boolean;
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}) => {
  return (
    <div
      className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <NavbarContent onMenuToggle={onMenuToggle} isMenuOpen={isMenuOpen} />
    </div>
  );
};

// Main Navbar component with scroll detection
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFloatingNavbar, setShowFloatingNavbar] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    // Initialize scroll position to handle Instagram's browser quirks
    let lastScrollY = 0;
    let ticking = false;
    let hasScrolled = false;
    let initialized = false;

    // Force scroll to top on mount to fix Instagram's initial scroll position
    const forceScrollToTop = () => {
      if (window.scrollY > 0 || window.pageYOffset > 0) {
        window.scrollTo(0, 0);
      }
      lastScrollY = 0;
      setShowFloatingNavbar(false);
      initialized = true;
    };

    // Initialize immediately and after delays to catch Instagram's delayed scroll
    forceScrollToTop();
    const initTimeout1 = setTimeout(forceScrollToTop, 50);
    const initTimeout2 = setTimeout(forceScrollToTop, 200);

    const updateNavbar = () => {
      if (!initialized) return;

      const currentScrollY = Math.max(0, window.scrollY || window.pageYOffset || 0);
      const navbarHeight = 46; // Height of the navbar

      // Detect if user has actually scrolled (not just initial load quirk)
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      if (scrollDelta > 2) {
        hasScrolled = true;
      }

      // Only show floating navbar when we've actually scrolled and are past navbar
      if (hasScrolled && currentScrollY > navbarHeight) {
        // Scrolling down
        if (currentScrollY > lastScrollY) {
          setShowFloatingNavbar(true);
        }
        // Scrolling up - hide floating navbar
        else if (currentScrollY < lastScrollY) {
          setShowFloatingNavbar(false);
        }
      } else {
        // At top or haven't scrolled yet, hide floating navbar
        setShowFloatingNavbar(false);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking && initialized) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(initTimeout1);
      clearTimeout(initTimeout2);
    };
  }, []);

  // Close menu when clicking outside (optional enhancement)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <StaticNavbar onMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} />
      <FloatingNavbar
        isVisible={showFloatingNavbar}
        onMenuToggle={toggleMenu}
        isMenuOpen={isMenuOpen}
      />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
