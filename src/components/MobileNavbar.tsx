
import React from 'react';
import { Home, Video, Users, Folder, Tag, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-tube-darkgray border-t border-tube-gray flex justify-around items-center py-3 md:hidden z-10">
        <Link to="/" className="flex flex-col items-center text-tube-pink">
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/videos" className="flex flex-col items-center text-gray-400 hover:text-tube-pink">
          <Video size={20} />
          <span className="text-xs mt-1">Videos</span>
        </Link>
        <Link to="/actors" className="flex flex-col items-center text-gray-400 hover:text-tube-pink">
          <Users size={20} />
          <span className="text-xs mt-1">Actors</span>
        </Link>
        <Link to="/categories" className="flex flex-col items-center text-gray-400 hover:text-tube-pink">
          <Folder size={20} />
          <span className="text-xs mt-1">Categories</span>
        </Link>
        <Link to="/tags" className="flex flex-col items-center text-gray-400 hover:text-tube-pink">
          <Tag size={20} />
          <span className="text-xs mt-1">Tags</span>
        </Link>
      </div>
      
      {/* Add padding at the bottom to account for the mobile navbar */}
      <div className="pb-16 md:pb-0"></div>
    </>
  );
};

export default MobileNavbar;
