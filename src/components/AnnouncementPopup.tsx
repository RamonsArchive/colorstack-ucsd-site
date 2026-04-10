"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import announcement_index from "../constants/announcement_index";

const DISMISS_KEY = "announcement-popup-dismissed";
const AUTO_DISMISS_MS = 10000;
const SLIDE_IN_DELAY_MS = 1500;

const AnnouncementPopup = () => {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  const latest = announcement_index[0];

  const handleClose = useCallback(() => {
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      setExiting(false);
      if (latest) sessionStorage.setItem(DISMISS_KEY, latest.id);
    }, 300);
  }, [latest]);

  useEffect(() => {
    if (!latest) return;

    const dismissed = sessionStorage.getItem(DISMISS_KEY);
    if (dismissed === latest.id) return;

    const showTimer = setTimeout(() => setVisible(true), SLIDE_IN_DELAY_MS);

    return () => clearTimeout(showTimer);
  }, [latest]);

  useEffect(() => {
    if (!visible) return;

    const autoDismiss = setTimeout(() => handleClose(), AUTO_DISMISS_MS);
    return () => clearTimeout(autoDismiss);
  }, [visible, handleClose]);

  if (!latest || !visible) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 max-w-sm w-full transition-all duration-300 ease-out ${
        exiting ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="relative flex flex-row overflow-hidden rounded-2xl border border-border-medium bg-bg-secondary/95 backdrop-blur-md shadow-lg">
        <div className="w-1 shrink-0 bg-primary-500" />

        <div className="flex flex-col gap-2 p-4 pr-10">
          <p className="text-xs font-medium text-text-accent uppercase tracking-wide">
            {latest.date}
          </p>
          <p className="text-sm font-semibold text-text-primary leading-snug">
            {latest.title}
          </p>
          <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
            {latest.description}
          </p>
          {latest.link && (
            <Link
              href={latest.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-xs font-semibold text-text-accent hover:underline w-fit"
            >
              Check it out &rarr;
            </Link>
          )}
        </div>

        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer"
          aria-label="Dismiss announcement"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AnnouncementPopup;
