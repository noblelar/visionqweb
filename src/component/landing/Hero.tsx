import React from 'react';

const Hero: React.FC = () => {
   return (
      <section className="hero-section bg-gray-100 text-center py-20">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
               Welcome to VisionQuest
            </h1>
            <p className="text-lg text-gray-600 mb-6">
               Discover and achieve your perfect place of abode with our innovative and excellent craftmanship.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
               Get Started
            </button>
         </div>
      </section>
   );
};

export default Hero;