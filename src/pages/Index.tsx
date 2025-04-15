
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import VideoSection from '@/components/VideoSection';
import MobileNavbar from '@/components/MobileNavbar';
import TrendingSection from '@/components/TrendingSection';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-tube-black">
      <Header />
      <div className="mx-auto py-2 max-w-full">
        <TrendingSection />
      </div>
      <div>
        <main className="mx-auto py-8 max-w-full">
          <div className="space-y-16">
            <div>
              <VideoSection title="Trending Videos" type="trending" />
            </div>
            
            <div>
              <VideoSection title="Most Viewed" type="popular" />
            </div>
            
            <div>
              <VideoSection title="Latest Uploads" type="newest" />
            </div>
          </div>
          <MobileNavbar />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
