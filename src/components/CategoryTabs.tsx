
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const CategoryTabs = () => {
  const categories = [{
    name: 'All',
    active: true
  }, {
    name: 'Technology',
    active: false
  }, {
    name: 'Finance',
    active: false
  }, {
    name: 'Gaming',
    active: false
  }, {
    name: 'Beauty',
    active: false
  }, {
    name: 'Fitness',
    active: false
  }, {
    name: 'Travel',
    active: false
  }, {
    name: 'Food',
    active: false
  }, {
    name: 'Education',
    active: false
  }];

  // Trending tags from TrendingSection
  const trendingHashtags = ['#TechReviews', '#AffiliateMarketing', '#EarningOnline', '#PassiveIncome', '#ProductLaunch', '#GadgetReview', '#MakeMoneyOnline', '#StartupTips', '#DigitalMarketing'];
  
  return (
    <div className="mb-6">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full flex overflow-x-auto bg-tube-darkgray p-1">
          {categories.map((category, index) => (
            <TabsTrigger
              key={index}
              value={category.name.toLowerCase()}
              className={`text-white px-4 py-2 ${category.active ? 'bg-tube-pink' : ''}`}
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {trendingHashtags.slice(0, 6).map((tag, index) => (
          <Badge
            key={index}
            variant="outline"
            className="bg-tube-darkgray border-tube-gray text-white hover:bg-tube-pink hover:text-white cursor-pointer"
          >
            <Flame size={12} className="mr-1 text-tube-pink" />
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
