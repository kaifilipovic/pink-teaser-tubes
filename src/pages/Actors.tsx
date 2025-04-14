
import React from 'react';
import Header from '@/components/Header';
import MobileNavbar from '@/components/MobileNavbar';

const Actors = () => {
  return (
    <div className="min-h-screen bg-tube-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6">Popular Actors</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {/* Placeholder for actors grid */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div key={item} className="bg-tube-darkgray rounded-lg p-4 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-tube-gray mb-3 overflow-hidden">
                <img 
                  src={`https://i.pravatar.cc/150?img=${item + 20}`} 
                  alt="Actor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-medium">Actor Name</h3>
              <p className="text-sm text-gray-400">24 videos</p>
            </div>
          ))}
        </div>
        <MobileNavbar />
      </main>
    </div>
  );
};

export default Actors;
