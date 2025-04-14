
import React from 'react';

const CategoryTabs = () => {
  const categories = [
    { name: 'All', active: true },
    { name: 'Technology', active: false },
    { name: 'Finance', active: false },
    { name: 'Gaming', active: false },
    { name: 'Beauty', active: false },
    { name: 'Fitness', active: false },
    { name: 'Travel', active: false },
    { name: 'Food', active: false },
    { name: 'Education', active: false },
  ];

  return (
    <div className="w-full overflow-x-auto bg-tube-darkgray sticky top-16 z-10 border-b border-tube-gray">
      <div className="container mx-auto px-4">
        <div className="flex space-x-1 py-3 min-w-max">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors
              ${category.active 
                ? 'bg-tube-pink text-white' 
                : 'bg-tube-gray text-gray-300 hover:bg-tube-gray hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
