
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, Home, Video, Users, Tag, Folder } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-tube-darkgray border-b border-tube-gray sticky top-0 z-10">
      <div className="container mx-auto py-3 px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            Tube<span className="text-tube-pink">Affiliate</span>
          </h1>
        </div>
        
        <div className="flex-1 max-w-xl w-full px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full bg-tube-gray border border-tube-gray focus:border-tube-pink rounded-full py-2 px-4 text-white outline-none"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
        
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-tube-pink hover:text-white transition-colors flex items-center gap-1">
            <Home size={18} />
            <span className="text-sm font-medium">Home</span>
          </Link>
          <Link to="/videos" className="text-gray-400 hover:text-tube-pink transition-colors flex items-center gap-1">
            <Video size={18} />
            <span className="text-sm font-medium">Videos</span>
          </Link>
          <Link to="/actors" className="text-gray-400 hover:text-tube-pink transition-colors flex items-center gap-1">
            <Users size={18} />
            <span className="text-sm font-medium">Actors</span>
          </Link>
          <Link to="/categories" className="text-gray-400 hover:text-tube-pink transition-colors flex items-center gap-1">
            <Folder size={18} />
            <span className="text-sm font-medium">Categories</span>
          </Link>
          <Link to="/tags" className="text-gray-400 hover:text-tube-pink transition-colors flex items-center gap-1">
            <Tag size={18} />
            <span className="text-sm font-medium">Tags</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
