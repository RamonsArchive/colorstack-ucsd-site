import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="flex flex-col gap-6 items-center justify-center">
        {/* Animated Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-border-medium rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary-500 rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <div className="flex flex-col gap-2 items-center">
          <p className="text-lg text-text-primary font-semibold">Loading...</p>
          <div className="h-[0.5px] w-24 bg-text-primary opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
