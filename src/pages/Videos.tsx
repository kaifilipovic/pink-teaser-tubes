
import React, { useState } from 'react';
import Header from '@/components/Header';
import VideoSection from '@/components/VideoSection';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import VideosFilterPanel from '@/components/videos/VideosFilterPanel';

const Videos = () => {
  const [sortOrder, setSortOrder] = useState<'newest' | 'popular'>('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="min-h-screen bg-tube-black flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <Container>
          <div className="space-y-6">
            <VideosFilterPanel 
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />

            <VideoSection title="All Videos" type={sortOrder} showViewAll={false} />

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={e => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }} 
                  />
                </PaginationItem>
                {[1, 2, 3].map(page => (
                  <PaginationItem key={page}>
                    <PaginationLink 
                      href="#" 
                      isActive={currentPage === page}
                      onClick={e => {
                        e.preventDefault();
                        setCurrentPage(page);
                      }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={e => {
                      e.preventDefault();
                      setCurrentPage(currentPage + 1);
                    }} 
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </Container>
      </main>
      <MobileNavbar />
      <Footer />
    </div>
  );
};

export default Videos;
