
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tag, Users, Video } from 'lucide-react';
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
    description: "Tech enthusiast sharing the latest gadgets, productivity tips, and tech reviews. Join me as I explore the cutting edge of technology and help you make informed decisions about your tech purchases.",
    topTags: [
      { name: "#TechReviews", count: 45 }, 
      { name: "#Gadgets", count: 38 }, 
      { name: "#Programming", count: 22 }, 
      { name: "#Productivity", count: 19 }, 
      { name: "#Setup", count: 16 },
      { name: "#MacBook", count: 12 },
      { name: "#iPhone", count: 10 },
      { name: "#AndroidDev", count: 7 }
    ],
    videos: [
      {
        id: 1,
        title: "10 Tech Gadgets You Need In Your Life",
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        duration: "3:45",
        views: "45K",
        createdAt: "2 days ago",
        affiliate: "#",
        hotTags: ["#TechReview", "#Gadgets"]
      },
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
        id: 8,
        title: "The Future Of AI - What You Need To Know Today",
        thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
        duration: "9:18",
        views: "432K",
        createdAt: "3 weeks ago",
        affiliate: "#",
        hotTags: ["#AI", "#Future"]
      }
    ],
    popularVideos: [
      {
        id: 3,
        title: "How To Make $100/Day With Affiliate Marketing",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        duration: "12:38",
        views: "78K",
        createdAt: "3 days ago",
        affiliate: "#",
        hotTags: ["#Marketing", "#Business"]
      },
      {
        id: 4,
        title: "5 Morning Habits That Change Everything",
        thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
        duration: "5:22",
        views: "215K",
        createdAt: "2 weeks ago",
        affiliate: "#",
        hotTags: ["#Lifestyle", "#Morning"]
      }
    ]
  };

  // Calculate font size based on tag count
  const getTagSize = (count) => {
    if (count > 40) return "text-lg font-bold";
    if (count > 30) return "text-base font-semibold";
    if (count > 20) return "text-sm font-medium";
    return "text-xs";
  };

  return (
    <div className="min-h-screen bg-tube-black">
      <Header />
      <main className="mx-auto px-[5%] py-8">
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
                      className={`bg-tube-pink/20 text-tube-pink hover:bg-tube-pink hover:text-white ${getTagSize(tag.count)}`}
                    >
                      <Tag size={12} className="mr-1" />
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Popular Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {creator.popularVideos.map(video => (
              <VideoTeaser key={video.id} {...video} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Latest Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {creator.videos.map(video => (
              <VideoTeaser key={video.id} {...video} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreatorDetail;
