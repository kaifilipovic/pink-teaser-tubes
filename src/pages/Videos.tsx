
import React, { useState } from 'react';
import Header from '@/components/Header';
import VideoSection from '@/components/VideoSection';
import CategoryTabs from '@/components/CategoryTabs';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import { Filter, SortAsc, SortDesc } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Videos = () => {
  const [sortOrder, setSortOrder] = useState<'newest' | 'popular'>('newest');

  return (
    <div className="min-h-screen bg-tube-black">
      <Header />
      <main className="container mx-auto px-2 lg:px-4 py-8 max-w-full">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Videos</h1>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSortOrder(sortOrder === 'newest' ? 'popular' : 'newest')}
              className="flex items-center gap-2"
            >
              {sortOrder === 'newest' ? <SortDesc size={16} /> : <SortAsc size={16} />}
              {sortOrder === 'newest' ? 'Newest First' : 'Most Popular'}
            </Button>
          </div>
        </div>
        <CategoryTabs />
        <VideoSection title="All Videos" type={sortOrder} />
        <MobileNavbar />
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
