"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

export default function DefaultLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="h-screen  bg-gray-100 flex-col overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex overflow-x-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main className=" w-full">
            <div className="mx-auto min-h-screen max-w-screen-2xl px-4 py-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
