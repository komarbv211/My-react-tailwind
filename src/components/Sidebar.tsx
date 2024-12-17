import React from "react";
import Logo from "../assets/DevTeam.png";
import { HomeIcon, AcademicCapIcon, UserGroupIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid'

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-gray-300 flex flex-col">
      <div className="flex items-center justify-center h-16 border-b border-gray-800">
        <img
          src={Logo}
          alt="Logo"
          className="h-8"
          style={{ height: '50px', objectFit: 'cover' }}
        />
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul>
          <li>
            <a
              href="/"
              className="flex items-center px-4 py-2 hover:bg-gray-700"
            >
                <HomeIcon className="size-6 text-gray-300"/>
                Home
            </a>
          </li>
          <li>
            <a
              href="/team"
              className="flex items-center px-4 py-2 hover:bg-gray-700"
            >
                <UserGroupIcon className="size-6 text-gray-300"/>
                Team
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="flex items-center px-4 py-2 hover:bg-gray-700"
            >
                <AcademicCapIcon className="size-6 text-gray-300"/>
                Projects
            </a>
          </li>
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <a href="#" className="flex items-center px-4 py-2 hover:text-gray-200">
            <ArrowRightStartOnRectangleIcon className="size-6 text-gray-300"/>
            Logout
        </a>
      </div>
    </div>
    
  );
};

export default Sidebar;
