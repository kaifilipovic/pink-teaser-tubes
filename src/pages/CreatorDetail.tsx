
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tag, Users, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VideoTeaser from '@/components/VideoTeaser';

const CreatorDetail = () => {
  const { id } = useParams();
  
  // Mock creator data (in real app, fetch based on id)
  const creator = {
    id: 1,
    name: "Tech Guru",
    avatar: "https://i.pravatar.cc/150?img=21",
    followers: "320K",
    videoCount: "156",
    description: "Tech enthusiast sharing the latest gadgets, productivity tips, and tech reviews...",
    topTags: ["#TechReviews", "#Gadgets", "#Programming", "#Productivity", "#Setup"],
    videos: [
      {
        id: 1,
        title: "10 Tech Gadgets You Need In Your Life",
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        duration: "3:45",
        views: "45K",
        createdAt: "2 days ago",
        affiliate: "#", // Added the missing affiliate property
        hotTags: ["#TechReview", "#Gadgets"]
      },
      // Add more videos
    ]
  };

  return (
    <div className="min-h-screen bg-tube-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card className="bg-tube-darkgray border-tube-gray mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <Avatar className="h-32 w-32">
                <AvatarImage src={creator.avatar} />
                <AvatarFallback>{creator.name[0]}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-white mb-2">{creator.name}</h1>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users size={16} />
                    <span>{creator.followers} followers</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Video size={16} />
                    <span>{creator.videoCount} videos</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{creator.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {creator.topTags.map((tag, index) => (
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
              
              <Button className="bg-tube-pink hover:bg-tube-pink/80">
                Follow
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Latest Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {creator.videos.map(video => (
              <VideoTeaser key={video.id} {...video} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreatorDetail;
