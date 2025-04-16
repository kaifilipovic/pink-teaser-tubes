
import React, { useState } from 'react';
import Header from '@/components/Header';
import VideoSection from '@/components/VideoSection';
import CategoryTabs from '@/components/CategoryTabs';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import { Filter, SortAsc, SortDesc, Search, Clock, Calendar, Flame, TrendingUp, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Videos = () => {
  const [sortOrder, setSortOrder] = useState<'newest' | 'popular'>('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-tube-black flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <Container>
          <div className="space-y-6">
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
                <div className="bg-tube-darkgray rounded-lg border border-tube-gray">
                  <div className="p-4 border-b border-tube-gray">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search videos..."
                        className="w-full bg-tube-gray border border-tube-gray focus:border-tube-pink rounded-md py-2 pl-4 pr-10 text-white outline-none"
                      />
                      <Search className="absolute right-3 top-2.5 text-gray-400" size={16} />
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">Sort By</label>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "flex items-center gap-2",
                              sortOrder === 'newest' && "bg-tube-pink text-white"
                            )}
                            onClick={() => setSortOrder('newest')}
                          >
                            <Flame size={16} />
                            Newest
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "flex items-center gap-2",
                              sortOrder === 'popular' && "bg-tube-pink text-white"
                            )}
                            onClick={() => setSortOrder('popular')}
                          >
                            <TrendingUp size={16} />
                            Popular
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">Duration</label>
                        <Select>
                          <SelectTrigger className="w-full bg-tube-gray border-tube-gray text-gray-400">
                            <SelectValue placeholder="Any Duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any Duration</SelectItem>
                            <SelectItem value="short">Short (&lt; 5 min)</SelectItem>
                            <SelectItem value="medium">Medium (5-15 min)</SelectItem>
                            <SelectItem value="long">Long (&gt; 15 min)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">Upload Date</label>
                        <Select>
                          <SelectTrigger className="w-full bg-tube-gray border-tube-gray text-gray-400">
                            <SelectValue placeholder="Any Time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any Time</SelectItem>
                            <SelectItem value="today">Today</SelectItem>
                            <SelectItem value="week">This Week</SelectItem>
                            <SelectItem value="month">This Month</SelectItem>
                            <SelectItem value="year">This Year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <CategoryTabs />
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
