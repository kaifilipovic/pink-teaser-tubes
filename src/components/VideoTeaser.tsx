
import React from 'react';
import { Clock, Tag } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';

interface VideoTeaserProps {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  createdAt: string;
  affiliate: string;
  hotTags?: string[];
}

const VideoTeaser = ({ 
  id, 
  title, 
  thumbnail, 
  duration, 
  views, 
  createdAt,
  affiliate,
  hotTags = []
}: VideoTeaserProps) => {
  return (
    <Link 
      to={`/videos/${id}`}
      className="group video-card animate-fade-in flex flex-col h-full bg-tube-gray rounded-lg p-3 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-tube-pink/20"
    >
      <div className="video-thumbnail aspect-video mb-3">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover rounded-md" />
        <div className="video-duration">{duration}</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-tube-pink flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
      </div>
      <h3 className="font-medium text-white line-clamp-2 mb-2 group-hover:text-tube-pink">{title}</h3>
      {hotTags && hotTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {hotTags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-tube-pink/20 text-tube-pink hover:bg-tube-pink hover:text-white">
              <Tag size={12} className="mr-1" />
              {tag}
            </Badge>
          ))}
        </div>
      )}
      <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto">
        <span className="flex items-center gap-1">
          <Clock size={12} />
          {createdAt}
        </span>
        <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
        <span>{views} views</span>
      </div>
    </Link>
  );
};

export default VideoTeaser;
