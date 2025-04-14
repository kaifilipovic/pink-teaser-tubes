
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

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
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-tube-gray text-white hover:bg-tube-gray hover:text-tube-pink">
            Log In
          </Button>
          <Button className="bg-tube-pink hover:bg-tube-pink-dark text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
