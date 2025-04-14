
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import VideoGrid from '@/components/VideoGrid';
import CategoryTabs from '@/components/CategoryTabs';
import MobileNavbar from '@/components/MobileNavbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-tube-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 md:ml-64">
          <CategoryTabs />
          <VideoGrid />
          <MobileNavbar />
        </main>
      </div>
    </div>
  );
};

export default Index;
