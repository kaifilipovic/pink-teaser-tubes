
import React from 'react';
import { Flame } from 'lucide-react';

const TrendingSection = () => {
  // Sample trending hashtags
  const trendingHashtags = [
    '#TechReviews', '#AffiliateMarketing', '#EarningOnline', 
    '#PassiveIncome', '#ProductLaunch', '#GadgetReview',
    '#MakeMoneyOnline', '#StartupTips', '#DigitalMarketing'
  ];

  return (
    <div className="bg-tube-darkgray p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Flame size={18} className="text-tube-pink" />
        <h3 className="text-white font-semibold">Trending Topics</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {trendingHashtags.map((hashtag, index) => (
          <a 
            key={index}
            href="#"
            className="bg-tube-gray px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-tube-pink hover:text-white transition-colors"
          >
            {hashtag}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
