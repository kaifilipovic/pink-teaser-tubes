
import React from 'react';
import Header from '@/components/Header';
import VideoSection from '@/components/VideoSection';
import CategoryTabs from '@/components/CategoryTabs';
import MobileNavbar from '@/components/MobileNavbar';
import TrendingSection from '@/components/TrendingSection';

const Videos = () => {
  return (
    <div className="min-h-screen bg-tube-black">
      <Header />
      <div className="container mx-auto px-2 lg:px-4 py-2 max-w-full">
        <TrendingSection />
      </div>
      <main className="container mx-auto px-2 lg:px-4 py-8 max-w-full">
        <CategoryTabs />
        <VideoSection title="All Videos" type="trending" />
        <MobileNavbar />
      </main>
    </div>
  );
};

export default Videos;
