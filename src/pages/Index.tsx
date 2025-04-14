
import React from 'react';
import Header from '@/components/Header';
import VideoSection from '@/components/VideoSection';
import MobileNavbar from '@/components/MobileNavbar';
import TrendingSection from '@/components/TrendingSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-tube-black">
      <Header />
      <div className="container mx-auto px-2 lg:px-4 py-2 max-w-full">
        <TrendingSection />
      </div>
      <div>
        <main className="container mx-auto px-2 lg:px-4 py-8 max-w-full">
          <VideoSection title="Trending Videos" type="trending" />
          <VideoSection title="Most Viewed" type="popular" />
          <VideoSection title="Latest Uploads" type="newest" />
          <MobileNavbar />
        </main>
      </div>
    </div>
  );
};

export default Index;
