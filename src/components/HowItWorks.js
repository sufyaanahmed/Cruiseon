import React from 'react';

function HowItWorks() {
  return (
    <section className="py-16 bg-gray-900 text-center px-2">
      <h2 className="text-3xl text-orange-500 font-bold mb-10">How It Works</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="step">
          <h3 className="text-xl text-white">1. Book Your Car</h3>
          <p className="text-gray-400">Choose your desired vehicle and dates. We'll send a Quotation on your mail/whatsapp.</p>
        </div>
        <div className="step">
          <h3 className="text-xl text-white">2. Pickup Your Car</h3>
          <p className="text-gray-400">Read the FAQ's and then, Pick up from the location of your choice.</p>
        </div>
        <div className="step">
          <h3 className="text-xl text-white">3. Enjoy the Drive</h3>
          <p className="text-gray-400">Drive to your destination and drop off when done.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
