import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";
import React from "react";
import Footer from "@/src/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex flex-col gap-26 flex-1 w-full min-w-0 overflow-x-hidden">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
