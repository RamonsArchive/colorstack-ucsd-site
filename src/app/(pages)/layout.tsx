import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 w-full min-w-0 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
