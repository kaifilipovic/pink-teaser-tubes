
import React from 'react';
import Header from '@/components/Header';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import TagCategoryCard from '@/components/tags/TagCategoryCard';
import { tagCategories } from '@/data/tagCategories';

const Tags = () => {
  return (
    <div className="min-h-screen bg-tube-black flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <Container>
          <h1 className="text-2xl font-bold text-white mb-6">Explore Tags</h1>
          <div className="space-y-6">
            {tagCategories.map((category, index) => (
              <TagCategoryCard 
                key={index}
                title={category.title}
                iconType={category.iconType}
                tags={category.tags}
              />
            ))}
          </div>
        </Container>
      </main>
      <MobileNavbar />
      <Footer />
    </div>
  );
};

export default Tags;
