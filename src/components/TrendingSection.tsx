
import React from 'react';
import { Flame, TrendingUp, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TrendingSection = () => {
  // Sample trending hashtags
  const trendingHashtags = [
    '#TechReviews', '#AffiliateMarketing', '#EarningOnline', 
    '#PassiveIncome', '#ProductLaunch', '#GadgetReview',
    '#MakeMoneyOnline', '#StartupTips', '#DigitalMarketing'
  ];

  // Sample hot creators
  const hotCreators = [
    { id: 1, name: "Tech Guru", avatar: "https://i.pravatar.cc/150?img=21", videos: 24 },
    { id: 2, name: "Marketing Pro", avatar: "https://i.pravatar.cc/150?img=32", videos: 18 },
    { id: 3, name: "Finance Expert", avatar: "https://i.pravatar.cc/150?img=45", videos: 30 },
    { id: 4, name: "Style Guide", avatar: "https://i.pravatar.cc/150?img=57", videos: 16 },
  ];

  return (
    <div className="w-full py-3 border-b border-tube-gray mx-auto px-[5%]">
      <div className="flex flex-col md:flex-row">
        {/* Hot Tags - 50% width on desktop */}
        <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0">
          <div className="flex items-center text-tube-pink mb-2">
            <TrendingUp size={18} className="mr-1" />
            <span className="font-medium">Hot Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingHashtags.map((hashtag, index) => (
              <Link 
                key={index}
                to={`/tags/${hashtag.substring(1)}`}
                className="bg-tube-gray px-3 py-1 rounded-full text-xs text-gray-300 hover:bg-tube-pink hover:text-white transition-colors whitespace-nowrap"
              >
                {hashtag}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Hot Creators - 50% width on desktop */}
        <div className="w-full md:w-1/2 pl-0 md:pl-4 border-t md:border-t-0 md:border-l border-tube-gray pt-4 md:pt-0">
          <div className="flex items-center text-tube-pink mb-2">
            <Users size={18} className="mr-1" />
            <span className="font-medium">Hot Creators:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {hotCreators.map((creator) => (
              <Link 
                key={creator.id}
                to={`/creators/${creator.id}`}
                className="flex items-center gap-2 bg-tube-gray hover:bg-tube-gray/70 rounded-full px-2 py-1 transition-colors"
              >
                <Avatar className="h-6 w-6">
                  <AvatarImage src={creator.avatar} />
                  <AvatarFallback>{creator.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-xs text-gray-300">{creator.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
