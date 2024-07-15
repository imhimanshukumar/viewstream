import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex mt-16">
      <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] overflow-y-auto w-64">
        <Sidebar />
      </div>
      <div className="ml-64 w-[calc(100%-16rem)] h-[calc(100vh-4rem)] overflow-y-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
