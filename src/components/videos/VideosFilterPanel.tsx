
import React from 'react';
import { Filter, Search, TrendingUp, Flame, TagIcon, LayoutGrid } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface VideosFilterPanelProps {
  sortOrder: 'newest' | 'popular';
  setSortOrder: (order: 'newest' | 'popular') => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const VideosFilterPanel: React.FC<VideosFilterPanelProps> = ({
  sortOrder,
  setSortOrder,
  showFilters,
  setShowFilters,
  activeCategory,
  setActiveCategory
}) => {
  // Categories for the tabs
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

  // Trending tags
  const trendingHashtags = [
    '#TechReviews', '#AffiliateMarketing', '#EarningOnline', 
    '#PassiveIncome', '#ProductLaunch', '#GadgetReview', 
    '#MakeMoneyOnline', '#StartupTips', '#DigitalMarketing'
  ];

  return (
    <div className="space-y-4">
      {/* Top controls - filter button & category selector */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white mb-0">Videos</h1>
          <div className="flex items-center gap-2">
            <Select value={sortOrder} onValueChange={(value) => setSortOrder(value as 'newest' | 'popular')}>
              <SelectTrigger className="w-[140px] bg-tube-gray border-tube-gray text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">
                  <div className="flex items-center gap-2">
                    <Flame size={16} />
                    <span>Newest</span>
                  </div>
                </SelectItem>
                <SelectItem value="popular">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} />
                    <span>Popular</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                "flex items-center gap-2",
                showFilters && "border-tube-pink text-tube-pink"
              )}
            >
              <Filter size={16} />
              Filters
            </Button>
          </div>
        </div>

        {/* Filter content area */}
        {showFilters && (
          <div className="bg-tube-darkgray rounded-lg border border-tube-gray p-4">
            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search videos..."
                  className="w-full bg-tube-gray border border-tube-gray focus:border-tube-pink rounded-md py-2 pl-4 pr-10 text-white outline-none"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={16} />
              </div>
              
              {/* Categories & Tags Combined */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="categories" className="border-tube-gray">
                  <AccordionTrigger className="text-white hover:no-underline py-2">
                    <div className="flex items-center gap-2">
                      <LayoutGrid size={16} className="text-tube-pink" />
                      <span>Categories</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-2">
                      <ToggleGroup 
                        type="single" 
                        value={activeCategory.toLowerCase()}
                        onValueChange={(value) => {
                          if (value) setActiveCategory(categories.find(c => c.name.toLowerCase() === value)?.name || 'All');
                        }}
                        className="flex flex-wrap gap-2"
                      >
                        {categories.map((category) => (
                          <ToggleGroupItem 
                            key={category.name}
                            value={category.name.toLowerCase()}
                            variant="outline"
                            className="bg-tube-gray text-white border-tube-gray data-[state=on]:bg-tube-pink data-[state=on]:text-white"
                          >
                            {category.name}
                          </ToggleGroupItem>
                        ))}
                      </ToggleGroup>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="tags" className="border-tube-gray">
                  <AccordionTrigger className="text-white hover:no-underline py-2">
                    <div className="flex items-center gap-2">
                      <TagIcon size={16} className="text-tube-pink" />
                      <span>Popular Tags</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-2 flex flex-wrap gap-2">
                      {trendingHashtags.map((tag, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="cursor-pointer hover:bg-tube-pink hover:text-white border-tube-gray text-gray-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Additional filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Duration</label>
                  <Select>
                    <SelectTrigger className="w-full bg-tube-gray border-tube-gray text-gray-400">
                      <SelectValue placeholder="Any Duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Duration</SelectItem>
                      <SelectItem value="short">Short (&lt; 5 min)</SelectItem>
                      <SelectItem value="medium">Medium (5-15 min)</SelectItem>
                      <SelectItem value="long">Long (&gt; 15 min)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Upload Date</label>
                  <Select>
                    <SelectTrigger className="w-full bg-tube-gray border-tube-gray text-gray-400">
                      <SelectValue placeholder="Any Time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Time</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="year">This Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideosFilterPanel;
