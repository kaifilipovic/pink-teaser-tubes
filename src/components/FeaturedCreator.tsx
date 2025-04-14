
import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles } from 'lucide-react';

const FeaturedCreator = () => {
  return (
    <div className="bg-gradient-to-r from-tube-darkgray to-tube-gray rounded-lg p-4 border border-tube-gray relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-tube-pink opacity-10 rounded-full blur-3xl"></div>
      
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-tube-pink animate-pulse-glow overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
            alt="Featured Creator" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-white font-medium flex items-center gap-1">
            TechAffiliate
            <Sparkles size={14} className="text-yellow-400" />
          </h3>
          <p className="text-gray-400 text-xs">68K subscribers</p>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm mb-3">
        Join my affiliate program and earn up to 15% commission on every referral!
      </p>
      
      <Button className="w-full bg-tube-pink hover:bg-tube-pink-dark text-white">
        Become an Affiliate
      </Button>
    </div>
  );
};

export default FeaturedCreator;
