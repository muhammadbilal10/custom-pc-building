import Navbar from "@/components/layout/Navbar";
import React from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="mb-16">
        <Navbar />
      </div>
      {children}
    </div>
  );
}
