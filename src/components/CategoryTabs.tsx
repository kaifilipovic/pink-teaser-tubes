
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = [
    { name: 'All', active: true },
    { name: 'Technology', active: false },
    { name: 'Finance', active: false },
    { name: 'Gaming', active: false },
    { name: 'Beauty', active: false },
    { name: 'Fitness', active: false },
    { name: 'Travel', active: false },
    { name: 'Food', active: false },
    { name: 'Education', active: false }
  ];

  // Trending tags from TrendingSection
  const trendingHashtags = ['#TechReviews', '#AffiliateMarketing', '#EarningOnline', '#PassiveIncome', '#ProductLaunch', '#GadgetReview', '#MakeMoneyOnline', '#StartupTips', '#DigitalMarketing'];
  
  return (
    <div className="mb-6 mx-auto px-[5%]">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-tube-darkgray w-full h-auto flex flex-wrap justify-start p-1 overflow-x-auto">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.name}
              value={category.name.toLowerCase()}
              className={`px-4 py-2 data-[state=active]:bg-tube-pink data-[state=active]:text-white`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
              {category.name === 'All' && <Flame className="ml-1 h-3 w-3 text-tube-pink" />}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {trendingHashtags.slice(0, 6).map((tag, index) => (
          <Badge 
            key={index} 
            variant="outline" 
            className="cursor-pointer hover:bg-tube-pink hover:text-white border-tube-gray text-gray-300"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
