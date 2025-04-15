
import React, { useState } from 'react';
import Header from '@/components/Header';
import VideoSection from '@/components/VideoSection';
import CategoryTabs from '@/components/CategoryTabs';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import { Filter, SortAsc, SortDesc, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const Videos = () => {
  const [sortOrder, setSortOrder] = useState<'newest' | 'popular'>('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-tube-black">
      <Header />
      <main className="mx-auto px-[5%] py-8 max-w-full">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Videos</h1>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter size={16} />
              Filters
            </Button>
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

        {showFilters && (
          <div className="bg-tube-darkgray p-4 rounded-lg mb-6 border border-tube-gray">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search videos..."
                    className="w-full bg-tube-gray border border-tube-gray focus:border-tube-pink rounded-md py-2 px-4 text-white outline-none"
                  />
                  <Search className="absolute right-3 top-2.5 text-gray-400" size={16} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Duration</label>
                <select className="w-full bg-tube-gray border border-tube-gray focus:border-tube-pink rounded-md py-2 px-4 text-white outline-none">
                  <option value="">Any Duration</option>
                  <option value="short">Short (< 5 min)</option>
                  <option value="medium">Medium (5-15 min)</option>
                  <option value="long">Long (> 15 min)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Upload Date</label>
                <select className="w-full bg-tube-gray border border-tube-gray focus:border-tube-pink rounded-md py-2 px-4 text-white outline-none">
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
        
        <CategoryTabs />
        <VideoSection title="All Videos" type={sortOrder} showViewAll={false} />
        
        <Pagination className="mt-8">
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
        
        <MobileNavbar />
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
