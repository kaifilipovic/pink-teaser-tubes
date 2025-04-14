
import React from 'react';
import Header from '@/components/Header';
import MobileNavbar from '@/components/MobileNavbar';
import { Tag as TagIcon } from 'lucide-react';

const Tags = () => {
  // Sample tags with different sizes based on popularity
  const tags = [
    { name: "TechReviews", size: "text-2xl font-bold" },
    { name: "AffiliateMarketing", size: "text-xl font-semibold" },
    { name: "EarningOnline", size: "text-2xl font-bold" },
    { name: "PassiveIncome", size: "text-lg" },
    { name: "ProductLaunch", size: "text-xl font-semibold" },
    { name: "GadgetReview", size: "text-lg" },
    { name: "MakeMoneyOnline", size: "text-2xl font-bold" },
    { name: "StartupTips", size: "text-lg" },
    { name: "DigitalMarketing", size: "text-xl font-semibold" },
    { name: "Entrepreneurship", size: "text-2xl font-bold" },
    { name: "SocialMediaTips", size: "text-lg" },
    { name: "InvestmentStrategies", size: "text-xl font-semibold" },
    { name: "ContentCreation", size: "text-lg" },
    { name: "Cryptocurrency", size: "text-2xl font-bold" },
    { name: "RemoteWork", size: "text-lg" },
    { name: "SideHustles", size: "text-xl font-semibold" },
    { name: "WebDevelopment", size: "text-lg" },
    { name: "FutureOfAI", size: "text-2xl font-bold" },
  ];

  return (
    <div className="min-h-screen bg-tube-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6">Popular Tags</h1>
        <div className="bg-tube-darkgray rounded-lg p-6">
          <div className="flex flex-wrap gap-4">
            {tags.map((tag, index) => (
              <a 
                key={index}
                href="#"
                className={`${tag.size} flex items-center gap-1 bg-tube-gray px-4 py-2 rounded-full text-gray-300 hover:bg-tube-pink hover:text-white transition-colors`}
              >
                <TagIcon size={16} />
                {tag.name}
              </a>
            ))}
          </div>
        </div>
        <MobileNavbar />
      </main>
    </div>
  );
};

export default Tags;
