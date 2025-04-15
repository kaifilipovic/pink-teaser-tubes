
import React from 'react';
import Header from '@/components/Header';
import MobileNavbar from '@/components/MobileNavbar';
import { Badge } from "@/components/ui/badge";
import { Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Actors = () => {
  // Mock data for actors with their most common tags
  const actors = [
    {
      id: 1,
      name: "Tech Guru",
      avatar: "https://i.pravatar.cc/150?img=21",
      videoCount: 24,
      followers: "320K",
      tags: ["#TechReviews", "#Gadgets", "#Programming"]
    },
    // ... more actors
  ];

  return (
    <div className="min-h-screen bg-tube-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Popular Creators</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {actors.map((actor) => (
            <Link 
              to={`/creators/${actor.id}`} 
              key={actor.id}
              className="group bg-tube-darkgray rounded-lg p-6 hover:bg-tube-gray/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-2 ring-tube-pink/20 group-hover:ring-tube-pink transition-all duration-300">
                  <img 
                    src={actor.avatar} 
                    alt={actor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{actor.name}</h3>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <span>{actor.videoCount} videos</span>
                  <span>•</span>
                  <span>{actor.followers} followers</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {actor.tags.map((tag, index) => (
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
        <MobileNavbar />
      </main>
    </div>
  );
};

export default Actors;
