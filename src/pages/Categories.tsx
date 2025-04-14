
import React from 'react';
import Header from '@/components/Header';
import MobileNavbar from '@/components/MobileNavbar';

const Categories = () => {
  // Sample categories
  const categories = [
    { name: "Technology", count: 42, color: "bg-blue-500" },
    { name: "Finance", count: 38, color: "bg-green-500" },
    { name: "Productivity", count: 27, color: "bg-purple-500" },
    { name: "Gaming", count: 54, color: "bg-red-500" },
    { name: "Travel", count: 31, color: "bg-yellow-500" },
    { name: "Fitness", count: 29, color: "bg-pink-500" },
    { name: "Beauty", count: 35, color: "bg-indigo-500" },
    { name: "Education", count: 46, color: "bg-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-tube-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6">Video Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <a 
              key={index}
              href="#"
              className="bg-tube-darkgray rounded-lg overflow-hidden hover:ring-2 hover:ring-tube-pink transition-all duration-300"
            >
              <div className={`h-3 ${category.color}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                <p className="text-gray-400">{category.count} videos</p>
              </div>
            </a>
          ))}
        </div>
        <MobileNavbar />
      </main>
    </div>
  );
};

export default Categories;
