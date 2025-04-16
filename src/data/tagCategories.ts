
import { TrendingUp, Eye, Clock } from 'lucide-react';

export interface TagItem {
  name: string;
  count: number;
  size: string;
}

export interface TagCategory {
  title: string;
  icon: JSX.Element;
  tags: TagItem[];
}

export const tagCategories: TagCategory[] = [
  {
    title: "Trending Now",
    icon: <TrendingUp size={20} className="text-tube-pink" />,
    tags: [
      { name: "TechReviews", count: 156, size: "text-2xl font-bold" },
      { name: "AffiliateMarketing", count: 142, size: "text-xl font-semibold" },
      { name: "EarningOnline", count: 134, size: "text-2xl font-bold" }
    ]
  },
  {
    title: "Most Popular",
    icon: <Eye size={20} className="text-tube-pink" />,
    tags: [
      { name: "PassiveIncome", count: 98, size: "text-lg" },
      { name: "ProductLaunch", count: 87, size: "text-xl font-semibold" },
      { name: "GadgetReview", count: 76, size: "text-lg" }
    ]
  },
  {
    title: "Recently Added",
    icon: <Clock size={20} className="text-tube-pink" />,
    tags: [
      { name: "Cryptocurrency", count: 45, size: "text-2xl font-bold" },
      { name: "WebDevelopment", count: 34, size: "text-lg" },
      { name: "FutureOfAI", count: 23, size: "text-2xl font-bold" }
    ]
  }
];
