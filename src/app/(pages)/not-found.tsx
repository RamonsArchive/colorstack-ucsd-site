import React from "react";
import Button from "@/src/components/Button";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="flex flex-col gap-8 items-center justify-center max-w-2xl p-8">
        {/* 404 Visual */}
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-6xl xs:text-7xl lg:text-8xl font-bold text-primary-500">
            404
          </h1>
          <div className="h-[0.5px] w-32 bg-text-primary opacity-50"></div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="text-2xl xs:text-3xl lg:text-4xl font-bold text-text-primary">
            Page Not Found
          </h2>
          <p className="text-lg text-text-secondary">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Button */}
        <Button variant="primary" href="/">
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
