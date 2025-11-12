import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="hidden lg:block fixed top-0 left-0 h-screen w-68 bg-background-900 border-r border-border-medium">
      <div className="flex flex-col items-center justify-center p-5"></div>
    </div>
  );
};

export default Sidebar;
