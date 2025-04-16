
import React from 'react';
import Header from '@/components/Header';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import { Tag as TagIcon, TrendingUp, Eye, Clock } from 'lucide-react';

const Tags = () => {
  const tagCategories = [
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

  return (
    <div className="min-h-screen bg-tube-black flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <Container>
          <h1 className="text-2xl font-bold text-white mb-6">Explore Tags</h1>
          <div className="space-y-6">
            {tagCategories.map((category, index) => (
              <div key={index} className="bg-tube-darkgray rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  {category.icon}
                  <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {category.tags.map((tag, idx) => (
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
            ))}
          </div>
        </Container>
      </main>
      <MobileNavbar />
      <Footer />
    </div>
  );
};

export default Tags;
