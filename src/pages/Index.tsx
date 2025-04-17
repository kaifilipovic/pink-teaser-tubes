
import React from 'react';
import Header from '@/components/Header';
import VideoSection from '@/components/VideoSection';
import MobileNavbar from '@/components/MobileNavbar';
import TrendingSection from '@/components/TrendingSection';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

const Index = () => {
  return (
    <div className="min-h-screen bg-tube-black flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <Container>
          <div className="space-y-16">
            <TrendingSection />
            <VideoSection title="Trending Videos" type="trending" />
            <VideoSection title="Most Viewed" type="popular" />
            <VideoSection title="Latest Uploads" type="newest" />
          </div>
        </Container>
      </main>
      <MobileNavbar />
      <Footer />
    </div>
  );
};

export default Index;
