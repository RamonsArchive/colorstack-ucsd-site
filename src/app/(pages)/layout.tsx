import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
