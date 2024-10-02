import React, { useState } from 'react';
import BookNowForm from './Book';
import { vehicles } from '../CarData';  // If carData.js is in the src folder


function Banner() {
  const [showForm, setShowForm] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleBookingSuccess = () => {
    setConfirmationMessage('Your booking has been successfully completed!');
    setShowForm(false);
  };

  return (
    <header
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/BannerPic.avif')",
      }}
    >
      
      <div className="text-center text-white z-10 px-6">
        {!showForm && (
          <>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Welcome to <span className="text-orange-500">Cruiseon Cars</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-400 font-semibold drop-shadow-lg">
              Drive Your Dream Car Today
            </p>
          </>
        )}

        {confirmationMessage && (
          <p className="text-lg text-green-400 mt-4">{confirmationMessage}</p>
        )}

        <a
          onClick={() => setShowForm(true)}
          href="#booking"
          className={`mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${showForm ? 'hidden' : ''}`}
        >
          Book Now
        </a>
      </div>

      {showForm && (
        <BookNowForm
          onClose={() => setShowForm(false)}
          carOptions={vehicles}  // Pass car options
          selectedCar={null} // No car selected by default
          onSuccess={handleBookingSuccess}
        />
      )}
    </header>
  );
}

export default Banner;
