import React, { useState } from 'react';
import Header from '@/components/Header';
import VideoSection from '@/components/VideoSection';
import CategoryTabs from '@/components/CategoryTabs';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import { Filter, SortAsc, SortDesc, Search, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const Videos = () => {
  const [sortOrder, setSortOrder] = useState<'newest' | 'popular'>('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-tube-black flex flex-col">
      <Header />
      <main className="flex-1">
        <Container>
          <div className="my-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">Videos</h1>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className={cn(
                    "flex items-center gap-2",
                    showFilters && "border-tube-pink text-tube-pink"
                  )}
                >
                  <Filter size={16} />
                  Filters
                </Button>
              </div>
              
              {showFilters && (
                <div className="bg-tube-darkgray rounded-lg border border-tube-gray overflow-hidden">
                  <div className="border-b border-tube-gray p-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search videos..."
                        className="w-full bg-tube-gray border border-tube-gray focus:border-tube-pink rounded-md py-2 pl-4 pr-10 text-white outline-none"
                      />
                      <Search className="absolute right-3 top-2.5 text-gray-400" size={16} />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                    <div className="flex items-center gap-3 text-gray-400">
                      <button 
                        className={cn(
                          "flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors",
                          sortOrder === 'newest' 
                            ? "bg-tube-pink text-white" 
                            : "hover:text-white"
                        )}
                        onClick={() => setSortOrder('newest')}
                      >
                        <SortDesc size={16} />
                        Newest
                      </button>
                      <button 
                        className={cn(
                          "flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors",
                          sortOrder === 'popular' 
                            ? "bg-tube-pink text-white" 
                            : "hover:text-white"
                        )}
                        onClick={() => setSortOrder('popular')}
                      >
                        <SortAsc size={16} />
                        Popular
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-gray-400" />
                      <select className="bg-tube-gray border-none text-gray-400 py-1.5 px-2 rounded-md outline-none focus:ring-2 focus:ring-tube-pink">
                        <option value="">Any Duration</option>
                        <option value="short">Short (&lt; 5 min)</option>
                        <option value="medium">Medium (5-15 min)</option>
                        <option value="long">Long (&gt; 15 min)</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-gray-400" />
                      <select className="bg-tube-gray border-none text-gray-400 py-1.5 px-2 rounded-md outline-none focus:ring-2 focus:ring-tube-pink">
                        <option value="">Any Time</option>
                        <option value="today">Today</option>
                        <option value="week">This Week</option>
                        <option value="month">This Month</option>
                        <option value="year">This Year</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <CategoryTabs />
          <VideoSection title="All Videos" type={sortOrder} showViewAll={false} />
          
          <Pagination className="mt-8 mb-6">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }} />
              </PaginationItem>
              {[1, 2, 3].map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink 
                    href="#" 
                    isActive={currentPage === page}
                    onClick={(e) => {
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
                <PaginationNext href="#" onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(currentPage + 1);
                }} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Container>
      </main>
      <MobileNavbar />
      <Footer />
    </div>
  );
};

export default Videos;
