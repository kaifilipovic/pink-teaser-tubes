
import React from 'react';
import { Home, Compass, TrendingUp, Clock, Bookmark, Heart, Settings, HelpCircle } from 'lucide-react';

const Sidebar = () => {
  // Navigation items with icons
  const navItems = [
    { icon: <Home size={20} />, label: 'Home', active: true },
    { icon: <Compass size={20} />, label: 'Explore', active: false },
    { icon: <TrendingUp size={20} />, label: 'Trending', active: false },
    { icon: <Clock size={20} />, label: 'History', active: false },
    { icon: <Bookmark size={20} />, label: 'Saved', active: false },
    { icon: <Heart size={20} />, label: 'Favorites', active: false },
  ];

  // Categories
  const categories = [
    'Technology', 'Finance', 'Productivity', 'Gaming',
    'Travel', 'Fitness', 'Beauty', 'Education'
  ];

  return (
    <aside className="hidden md:block w-64 h-[calc(100vh-4rem)] bg-tube-darkgray border-r border-tube-gray fixed top-16 left-0 p-4 overflow-y-auto">
      {/* Navigation */}
      <nav className="mb-6">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                  item.active ? 'bg-tube-pink text-white' : 'text-gray-300 hover:bg-tube-gray'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-gray-400 font-medium px-3 mb-3 text-sm uppercase">Categories</h3>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <a 
                href="#" 
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-tube-gray transition-colors"
              >
                <span># {category}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Footer links */}
      <div className="border-t border-tube-gray pt-4">
        <div className="flex flex-col gap-2">
          <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-tube-pink">
            <Settings size={16} />
            <span>Settings</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-tube-pink">
            <HelpCircle size={16} />
            <span>Help Center</span>
          </a>
        </div>
        <div className="mt-4 text-xs text-gray-500">
          © 2025 TubeAffiliate
          <div className="mt-1 flex gap-2">
            <a href="#" className="hover:text-tube-pink">Terms</a>
            <a href="#" className="hover:text-tube-pink">Privacy</a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
