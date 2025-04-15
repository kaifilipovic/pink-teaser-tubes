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
  return <div className="mb-6">
      <Tabs defaultValue="all" className="w-full">
        
      </Tabs>
      
      
    </div>;
};
export default CategoryTabs;