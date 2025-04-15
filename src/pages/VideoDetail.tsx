import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tag, ThumbsUp, MessageSquare, Share2, Clock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VideoTeaser from '@/components/VideoTeaser';

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
    description: "In this video, we explore the latest and most innovative tech gadgets that will revolutionize your daily life. From smart home devices to portable tech accessories, we've covered everything you need to know about these must-have gadgets.",
    creators: [
      {
        id: 1,
        name: "Tech Guru",
        avatar: "https://i.pravatar.cc/150?img=21",
        followers: "320K"
      },
      {
        id: 2,
        name: "Gadget Reviewer",
        avatar: "https://i.pravatar.cc/150?img=33",
        followers: "180K"
      }
    ],
    hotTags: ["#TechReviews", "#Gadgets", "#Innovation"]
  };

  // Mock related videos
  const relatedVideos = [
    {
      id: 2,
      title: "The Ultimate Productivity Setup Guide 2025",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      duration: "8:12",
      views: "102K",
      createdAt: "1 week ago",
      affiliate: "#",
      hotTags: ["#Productivity", "#Setup"]
    },
    {
      id: 5,
      title: "Apple's New Product Launch - Everything You Need To Know",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      duration: "10:45",
      views: "320K",
      createdAt: "4 days ago",
      affiliate: "#",
      hotTags: ["#Apple", "#Tech"]
    },
    {
      id: 6,
      title: "Best Budget Smartphones 2025 - Top Picks Under $300",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      duration: "7:15",
      views: "189K",
      createdAt: "5 days ago",
      affiliate: "#",
      hotTags: ["#Smartphones", "#Budget"]
    },
    {
      id: 8,
      title: "The Future Of AI - What You Need To Know Today",
      thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      duration: "9:18",
      views: "432K",
      createdAt: "3 weeks ago",
      affiliate: "#",
      hotTags: ["#AI", "#Future"]
    }
  ];

  return (
    <div className="min-h-screen bg-tube-black flex flex-col">
      <Header />
      <main className="flex-1">
        <Container className="py-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="aspect-video w-full mb-6">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">{video.title}</h1>
            
            <div className="flex items-center gap-4 flex-wrap mb-6">
              {video.creators.map(creator => (
                <div key={creator.id} className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={creator.avatar} />
                    <AvatarFallback>{creator.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-white font-medium">{creator.name}</h3>
                    <p className="text-gray-400 text-sm">{creator.followers} followers</p>
                  </div>
                </div>
              ))}
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
                  <div className="flex items-center gap-2 text-gray-400">
                    <MessageSquare size={16} />
                    <span>{video.comments} comments</span>
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
          
            <div className="mb-8 mt-8">
              <h3 className="text-xl font-bold text-white mb-6">Related Videos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedVideos.map((relatedVideo) => (
                  <VideoTeaser 
                    key={relatedVideo.id} 
                    {...relatedVideo}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default VideoDetail;
