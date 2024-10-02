import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      review: 'Had a great experience with Cruiseon Cars. The service was excellent!',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      review: 'Clean and well-maintained cars. Highly recommended!',
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-center px-3">
      <h2 className="text-3xl text-orange-500 font-bold mb-10">Testimonials</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg text-left">
            <p className="text-gray-400">"{testimonial.review}"</p>
            <p className="text-orange-500 mt-2">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
