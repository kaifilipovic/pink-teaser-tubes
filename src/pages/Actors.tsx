
import React, { useState } from 'react';
import Header from '@/components/Header';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Tag, Search, Filter, SortAsc } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const Actors = () => {
  const [showFilters, setShowFilters] = useState(false);
  
  // Mock data for actors with their most common tags
  const actors = [
    {
      id: 1,
      name: "Tech Guru",
      avatar: "https://i.pravatar.cc/300?img=21",
      videoCount: 24,
      tags: ["#TechReviews", "#Gadgets", "#Programming"]
    },
    {
      id: 2,
      name: "Marketing Pro",
      avatar: "https://i.pravatar.cc/300?img=32",
      videoCount: 18,
      tags: ["#Marketing", "#SEO", "#SocialMedia"]
    },
    {
      id: 3,
      name: "Finance Expert",
      avatar: "https://i.pravatar.cc/300?img=45",
      videoCount: 30,
      tags: ["#Investing", "#Crypto", "#PersonalFinance"]
    },
    {
      id: 4,
      name: "Style Guide",
      avatar: "https://i.pravatar.cc/300?img=57",
      videoCount: 16,
      tags: ["#Fashion", "#Beauty", "#Lifestyle"]
    },
    {
      id: 5,
      name: "Travel Explorer",
      avatar: "https://i.pravatar.cc/300?img=62",
      videoCount: 42,
      tags: ["#Travel", "#Adventure", "#BudgetTravel"]
    },
    {
      id: 6,
      name: "Fitness Coach",
      avatar: "https://i.pravatar.cc/300?img=67",
      videoCount: 28,
      tags: ["#Fitness", "#Nutrition", "#Workout"]
    },
    {
      id: 7,
      name: "Food Enthusiast",
      avatar: "https://i.pravatar.cc/300?img=12",
      videoCount: 36,
      tags: ["#Recipes", "#Cooking", "#FoodReview"]
    },
    {
      id: 8,
      name: "Gaming Master",
      avatar: "https://i.pravatar.cc/300?img=15",
      videoCount: 50,
      tags: ["#Gaming", "#GameReviews", "#Esports"]
    }
  ];

  const popularCreators = actors.slice(0, 4);
  const allCreators = actors.slice(4);

  return (
    <div className="min-h-screen bg-tube-black">
      <Header />
      <main className="mx-auto px-[5%] py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Popular Creators</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {popularCreators.map((creator) => (
            <Link 
              to={`/creators/${creator.id}`} 
              key={creator.id}
              className="group bg-tube-darkgray rounded-lg p-6 hover:bg-tube-gray/50 transition-all duration-300 hover:shadow-lg hover:shadow-tube-pink/20"
            >
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 ring-2 ring-tube-pink/20 group-hover:ring-tube-pink transition-all duration-300">
                  <img 
                    src={creator.avatar} 
                    alt={creator.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{creator.name}</h3>
                <div className="text-gray-400 mb-4">
                  <span>{creator.videoCount} videos</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {creator.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-tube-pink/20 text-tube-pink hover:bg-tube-pink hover:text-white"
                    >
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">All Creators</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <Filter size={16} />
            Filters
          </Button>
        </div>
        
        {showFilters && (
          <div className="bg-tube-darkgray p-4 rounded-lg mb-6 border border-tube-gray">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search creators..."
                    className="w-full bg-tube-gray border border-tube-gray focus:border-tube-pink rounded-md py-2 px-4 text-white outline-none"
                  />
                  <Search className="absolute right-3 top-2.5 text-gray-400" size={16} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Sort By</label>
                <select className="w-full bg-tube-gray border border-tube-gray focus:border-tube-pink rounded-md py-2 px-4 text-white outline-none">
                  <option value="popular">Most Popular</option>
                  <option value="videos">Most Videos</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                <select className="w-full bg-tube-gray border border-tube-gray focus:border-tube-pink rounded-md py-2 px-4 text-white outline-none">
                  <option value="">All Categories</option>
                  <option value="tech">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="lifestyle">Lifestyle</option>
                </select>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allCreators.map((creator) => (
            <Link 
              to={`/creators/${creator.id}`} 
              key={creator.id}
              className="group bg-tube-darkgray rounded-lg p-6 hover:bg-tube-gray/50 transition-all duration-300 hover:shadow-lg hover:shadow-tube-pink/20"
            >
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 ring-2 ring-tube-pink/20 group-hover:ring-tube-pink transition-all duration-300">
                  <img 
                    src={creator.avatar} 
                    alt={creator.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{creator.name}</h3>
                <div className="text-gray-400 mb-4">
                  <span>{creator.videoCount} videos</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {creator.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-tube-pink/20 text-tube-pink hover:bg-tube-pink hover:text-white"
                    >
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        
        <MobileNavbar />
      </main>
      <Footer />
    </div>
  );
};

export default Actors;
