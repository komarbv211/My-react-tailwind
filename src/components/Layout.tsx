import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
