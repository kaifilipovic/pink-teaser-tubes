
import React from 'react';
import { Home, Compass, TrendingUp, User, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from './Sidebar';

const MobileNavbar = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-tube-darkgray border-t border-tube-gray flex justify-around items-center py-3 md:hidden z-10">
        <a href="#" className="flex flex-col items-center text-tube-pink">
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-400 hover:text-tube-pink">
          <Compass size={20} />
          <span className="text-xs mt-1">Explore</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-400 hover:text-tube-pink">
          <TrendingUp size={20} />
          <span className="text-xs mt-1">Trending</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-400 hover:text-tube-pink">
          <User size={20} />
          <span className="text-xs mt-1">Profile</span>
        </a>
        
        <Sheet>
          <SheetTrigger asChild>
            <button className="flex flex-col items-center text-gray-400 hover:text-tube-pink">
              <Menu size={20} />
              <span className="text-xs mt-1">Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-tube-darkgray border-tube-gray p-0">
            <div className="py-4 px-6">
              <h1 className="text-xl font-bold text-white">
                Tube<span className="text-tube-pink">Affiliate</span>
              </h1>
            </div>
            <div className="overflow-y-auto h-full pb-20 px-2">
              <Sidebar />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      
      {/* Add padding at the bottom to account for the mobile navbar */}
      <div className="pb-16 md:pb-0"></div>
    </>
  );
};

export default MobileNavbar;
