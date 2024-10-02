import React from 'react';

function Pricing() {
  return (
    <section className="py-16 bg-gray-900 text-center">
      <h2 className="text-3xl text-orange-500 font-bold mb-10">Pricing & Offers</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="price-card bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl text-white mb-2">Hatchback</h3>
          <p className="text-gray-400">$50/day</p>
        </div>
        <div className="price-card bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl text-white mb-2">SUV</h3>
          <p className="text-gray-400">$70/day</p>
          <p className="text-orange-500 mt-4">Special Offer: 10% Off!</p>
        </div>
        <div className="price-card bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl text-white mb-2">Luxury Sedan</h3>
          <p className="text-gray-400">$100/day</p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
