
import React from 'react';
import { Flame } from 'lucide-react';

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

  // Trending tags from TrendingSection
  const trendingHashtags = [
    '#TechReviews', '#AffiliateMarketing', '#EarningOnline', 
    '#PassiveIncome', '#ProductLaunch', '#GadgetReview',
    '#MakeMoneyOnline', '#StartupTips', '#DigitalMarketing'
  ];

  return (
    <div className="w-full overflow-x-auto bg-tube-darkgray sticky top-16 z-10 border-b border-tube-gray">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex space-x-1 min-w-max">
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
          
          <div className="flex items-center space-x-2 ml-4 overflow-x-auto min-w-max">
            <div className="flex items-center text-tube-pink mr-2">
              <Flame size={16} className="mr-1" />
              <span className="text-sm font-medium">Trending:</span>
            </div>
            {trendingHashtags.map((hashtag, index) => (
              <a 
                key={index}
                href="#"
                className="bg-tube-gray px-3 py-1 rounded-full text-xs text-gray-300 hover:bg-tube-pink hover:text-white transition-colors whitespace-nowrap"
              >
                {hashtag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
