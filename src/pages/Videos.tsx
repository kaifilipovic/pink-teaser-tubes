
import React from 'react';
import Header from '@/components/Header';
import VideoGrid from '@/components/VideoGrid';
import CategoryTabs from '@/components/CategoryTabs';
import MobileNavbar from '@/components/MobileNavbar';

const Videos = () => {
  return (
    <div className="min-h-screen bg-tube-black">
      <Header />
      <main>
        <CategoryTabs />
        <VideoGrid />
        <MobileNavbar />
      </main>
    </div>
  );
};

export default Videos;
