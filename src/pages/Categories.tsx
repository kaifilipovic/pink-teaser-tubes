
import React from 'react';
import Header from '@/components/Header';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';

const Categories = () => {
  const categories = [
    { 
      name: "Technology", 
      count: 42, 
      color: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      tags: ["Gadgets", "Software", "Reviews"]
    },
    { 
      name: "Finance", 
      count: 38, 
      color: "bg-green-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["Investing", "Crypto", "Trading"]
    },
    { 
      name: "Productivity", 
      count: 27, 
      color: "bg-purple-500",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["Time Management", "Tools", "Apps"]
    },
    { 
      name: "Gaming", 
      count: 54, 
      color: "bg-red-500",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      tags: ["Reviews", "Tutorials", "Streaming"]
    }
  ];

  return (
    <div className="min-h-screen bg-tube-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6">Video Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a 
              key={index}
              href="#"
              className="group bg-tube-darkgray rounded-lg overflow-hidden hover:ring-2 hover:ring-tube-pink transition-all duration-300"
            >
              <div className="relative h-48">
                <div className={`absolute inset-0 ${category.color} opacity-20`}></div>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-tube-pink transition-colors">{category.name}</h3>
                <p className="text-gray-400 mb-3">{category.count} videos</p>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-tube-gray/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        <MobileNavbar />
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
