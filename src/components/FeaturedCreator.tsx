
import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles } from 'lucide-react';

const FeaturedCreator = () => {
  return (
    <div className="bg-tube-darkgray p-4 rounded-lg mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={18} className="text-tube-pink" />
        <h3 className="text-white font-semibold">Featured Creator</h3>
      </div>
      <div className="flex flex-col items-center">
        <img 
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
          className="w-24 h-24 rounded-full object-cover mb-4"
          alt="Creator" 
        />
        <h4 className="text-white text-lg font-medium">Tech Guru</h4>
        <p className="text-gray-400 text-sm mb-4">320K followers</p>
        <Button className="w-full bg-tube-pink hover:bg-tube-pink/80">
          <Sparkles className="mr-2 h-4 w-4" /> Follow
        </Button>
      </div>
    </div>
  );
};

export default FeaturedCreator;
