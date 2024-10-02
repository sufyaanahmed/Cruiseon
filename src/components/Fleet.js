import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { vehicles } from '../CarData'; // Assuming carData.js contains your vehicle data

function Fleet({ onBookNow }) {  // Ensure onBookNow is destructured from props
  return (
    <div id="fleet" className="fleet-container bg-gray-900 py-10">
      <h2 className="text-4xl font-bold text-center my-6 text-white">Our Fleet</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="fleet-item shadow-lg relative bg-gray-800 rounded-lg overflow-hidden">
            <Slide
              autoplay={true}
              transitionDuration={500}
              infinite
              className="rounded-lg overflow-hidden"
            >
              {vehicle.images.map((image, slideIndex) => (
                <div key={slideIndex} className="each-slide-effect">
                  <div
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '250px',
                    }}
                  ></div>
                </div>
              ))}
            </Slide>

            <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-70 text-white text-lg text-center py-2">
              {vehicle.name}
            </div>

            <div className="flex justify-center mt-4 mb-6">
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fleet;
