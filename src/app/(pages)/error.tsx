"use client";

import React from "react";
import Button from "@/src/components/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="flex flex-col gap-8 items-center justify-center max-w-2xl p-8">
        {/* Error Icon/Visual */}
        <div className="flex flex-col gap-4 items-center">
          <div className="w-20 h-20 rounded-full border-4 border-error-500 flex items-center justify-center">
            <span className="text-4xl text-error-500">⚠️</span>
          </div>
          <div className="h-[0.5px] w-32 bg-text-primary opacity-50"></div>
        </div>

        {/* Error Message */}
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="text-3xl xs:text-4xl lg:text-5xl font-bold text-text-primary">
            Something went wrong!
          </h1>
          <p className="text-lg text-text-secondary">
            {error.message || "An unexpected error occurred. Please try again."}
          </p>
          {error.digest && (
            <p className="text-sm text-text-muted font-mono">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row gap-5">
          <Button variant="primary" href="/">
            Go Home
          </Button>
          <button
            onClick={reset}
            className="text-text-primary border border-border-medium hover:bg-text-primary hover:text-bg-primary transition-colors duration-300 px-4 py-2 rounded-md cursor-pointer"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
