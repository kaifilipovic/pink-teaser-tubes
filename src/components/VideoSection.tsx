
import React from 'react';
import VideoTeaser from './VideoTeaser';

interface VideoSectionProps {
  title: string;
  type: 'trending' | 'popular' | 'newest';
}

const VideoSection = ({ title, type }: VideoSectionProps) => {
  // Mock data based on the section type
  const getVideoData = () => {
    // Reuse the existing video data, but organize differently based on type
    const baseData = [
      {
        id: 1,
        title: "10 Tech Gadgets You Need In Your Life",
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        duration: "3:45",
        views: "45K",
        createdAt: "2 days ago",
        affiliate: "#"
      },
      {
        id: 2,
        title: "The Ultimate Productivity Setup Guide 2025",
        thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        duration: "8:12",
        views: "102K",
        createdAt: "1 week ago",
        affiliate: "#"
      },
      {
        id: 3,
        title: "How To Make $100/Day With Affiliate Marketing",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        duration: "12:38",
        views: "78K",
        createdAt: "3 days ago",
        affiliate: "#"
      },
      {
        id: 4,
        title: "5 Morning Habits That Change Everything",
        thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
        duration: "5:22",
        views: "215K",
        createdAt: "2 weeks ago",
        affiliate: "#"
      },
      {
        id: 5,
        title: "Apple's New Product Launch - Everything You Need To Know",
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        duration: "10:45",
        views: "320K",
        createdAt: "4 days ago",
        affiliate: "#"
      },
      {
        id: 6,
        title: "Best Budget Smartphones 2025 - Top Picks Under $300",
        thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        duration: "7:15",
        views: "189K",
        createdAt: "5 days ago",
        affiliate: "#"
      },
      {
        id: 7,
        title: "Learn Coding In 30 Days - Complete Roadmap",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        duration: "15:20",
        views: "92K",
        createdAt: "1 day ago",
        affiliate: "#"
      },
      {
        id: 8,
        title: "The Future Of AI - What You Need To Know Today",
        thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
        duration: "9:18",
        views: "432K",
        createdAt: "3 weeks ago",
        affiliate: "#"
      },
      {
        id: 9,
        title: "How I Created A Passive Income Stream Online",
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        duration: "6:42",
        views: "178K",
        createdAt: "6 days ago",
        affiliate: "#"
      },
      {
        id: 10,
        title: "Web3 Explained Simply - Blockchain, NFTs & More",
        thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        duration: "11:05",
        views: "65K",
        createdAt: "2 days ago",
        affiliate: "#"
      },
      {
        id: 11,
        title: "Digital Marketing Tips For Small Business Growth",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        duration: "8:55",
        views: "123K",
        createdAt: "5 days ago",
        affiliate: "#"
      },
      {
        id: 12,
        title: "Financial Freedom At 30 - Investment Strategies",
        thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
        duration: "14:22",
        views: "203K",
        createdAt: "1 week ago",
        affiliate: "#"
      }
    ];

    // Mix up the videos for each section type to simulate different videos
    if (type === 'trending') {
      return [...baseData].sort((a, b) => parseInt(b.views) - parseInt(a.views)).slice(0, 12);
    } else if (type === 'popular') {
      return [...baseData].sort((a, b) => b.title.length - a.title.length).slice(0, 12);
    } else {
      return [...baseData].sort((a, b) => {
        const aTime = a.createdAt.includes('day') ? parseInt(a.createdAt) : 30;
        const bTime = b.createdAt.includes('day') ? parseInt(b.createdAt) : 30;
        return aTime - bTime;
      }).slice(0, 12);
    }
  };

  const videoData = getVideoData();

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="text-white">{title}</span>
        {type === 'trending' && (
          <span className="ml-2 px-2 py-1 bg-tube-pink rounded-full text-xs font-semibold text-white">HOT</span>
        )}
        {type === 'popular' && (
          <span className="ml-2 px-2 py-1 bg-tube-gray rounded-full text-xs font-semibold text-white">TOP</span>
        )}
        {type === 'newest' && (
          <span className="ml-2 px-2 py-1 bg-tube-gray rounded-full text-xs font-semibold text-white">NEW</span>
        )}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {videoData.map((video) => (
          <VideoTeaser key={video.id} {...video} />
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2.5 bg-tube-gray text-white rounded-full hover:bg-tube-pink transition-colors duration-300 flex items-center">
          Load More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
