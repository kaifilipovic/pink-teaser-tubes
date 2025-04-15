
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tag, ThumbsUp, MessageSquare, Share2, Clock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoDetail = () => {
  const { id } = useParams();
  
  // Mock video data (in real app, fetch based on id)
  const video = {
    id: 1,
    title: "10 Tech Gadgets You Need In Your Life",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    duration: "3:45",
    views: "45K",
    likes: "2.3K",
    comments: "156",
    createdAt: "2 days ago",
    description: "In this video, we explore the latest and most innovative tech gadgets that will revolutionize your daily life...",
    creator: {
      id: 1,
      name: "Tech Guru",
      avatar: "https://i.pravatar.cc/150?img=21",
      followers: "320K"
    },
    hotTags: ["#TechReviews", "#Gadgets", "#Innovation"]
  };

  return (
    <div className="min-h-screen bg-tube-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-video mb-6">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">{video.title}</h1>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={video.creator.avatar} />
                  <AvatarFallback>{video.creator.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-white font-medium">{video.creator.name}</h3>
                  <p className="text-gray-400 text-sm">{video.creator.followers} followers</p>
                </div>
              </div>
              <Button className="bg-tube-pink hover:bg-tube-pink/80">Follow Creator</Button>
            </div>

            <Card className="bg-tube-darkgray border-tube-gray">
              <CardContent className="p-6">
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Eye size={16} />
                    <span>{video.views} views</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock size={16} />
                    <span>{video.createdAt}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{video.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {video.hotTags.map((tag, index) => (
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
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Related Videos</h3>
            {/* Add related videos here */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoDetail;
