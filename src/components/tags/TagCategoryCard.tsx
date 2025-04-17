
import React from 'react';
import { TagIcon, LucideIcon } from 'lucide-react';

interface TagItemProps {
  name: string;
  count: number;
  size: string;
}

interface TagCategoryCardProps {
  title: string;
  iconType: LucideIcon;
  tags: TagItemProps[];
}

const TagCategoryCard = ({ title, iconType: IconComponent, tags }: TagCategoryCardProps) => {
  return (
    <div className="bg-tube-darkgray rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <IconComponent size={20} className="text-tube-pink" />
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {tags.map((tag, idx) => (
          <a 
            key={idx}
            href="#"
            className={`${tag.size} group flex items-center gap-2 bg-tube-gray px-4 py-2 rounded-full text-gray-300 hover:bg-tube-pink hover:text-white transition-colors`}
          >
            <TagIcon size={16} className="group-hover:scale-110 transition-transform" />
            <span>{tag.name}</span>
            <span className="text-sm font-normal opacity-60">({tag.count})</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TagCategoryCard;
