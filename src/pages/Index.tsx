
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
      <div className="container mx-auto px-2 lg:px-4 py-2 max-w-full">
        <TrendingSection />
      </div>
      <div>
        <main className="container mx-auto px-2 lg:px-4 py-8 max-w-full">
          <div className="space-y-16">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Trending Videos</h2>
                <Link to="/videos">
                  <Button variant="ghost" className="text-tube-pink hover:text-white">
                    View All <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
              <VideoSection title="Trending Videos" type="trending" />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Most Viewed</h2>
                <Link to="/videos">
                  <Button variant="ghost" className="text-tube-pink hover:text-white">
                    View All <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
              <VideoSection title="Most Viewed" type="popular" />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Latest Uploads</h2>
                <Link to="/videos">
                  <Button variant="ghost" className="text-tube-pink hover:text-white">
                    View All <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
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
