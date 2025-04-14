
import React from 'react';
import { Flame, TrendingUp } from 'lucide-react';

const TrendingSection = () => {
  // Sample trending hashtags
  const trendingHashtags = [
    '#TechReviews', '#AffiliateMarketing', '#EarningOnline', 
    '#PassiveIncome', '#ProductLaunch', '#GadgetReview',
    '#MakeMoneyOnline', '#StartupTips', '#DigitalMarketing'
  ];

  return (
    <div className="w-full py-3 border-b border-tube-gray overflow-x-auto">
      <div className="flex items-center space-x-3">
        <div className="flex items-center text-tube-pink">
          <TrendingUp size={18} className="mr-1" />
          <span className="font-medium">Hot Tags:</span>
        </div>
        <div className="flex items-center space-x-2 overflow-x-auto pb-1">
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
  );
};

export default TrendingSection;
