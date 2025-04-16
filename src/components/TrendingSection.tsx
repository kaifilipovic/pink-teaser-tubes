
import React from 'react';
import { Flame, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '@/components/Container';
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
    <div className="w-full py-3 border-b border-tube-gray">
      <Container>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-tube-pink">
                <TrendingUp size={18} />
                <span className="font-medium whitespace-nowrap">Hot Tags</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingHashtags.map((hashtag, index) => (
                  <Link 
                    key={index}
                    to={`/tags/${hashtag.substring(1)}`}
                    className="bg-tube-gray px-3 py-1 rounded-full text-xs text-gray-300 hover:bg-tube-pink hover:text-white transition-colors"
                  >
                    {hashtag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 md:border-l border-tube-gray md:pl-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-tube-pink">
                <Users size={18} />
                <span className="font-medium whitespace-nowrap">Hot Creators</span>
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
      </Container>
    </div>
  );
};

export default TrendingSection;
