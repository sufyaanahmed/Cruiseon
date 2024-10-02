import React from 'react';

function ImageModal({ images, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white p-4 rounded-lg relative max-h-full overflow-y-auto">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">X</button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="image-container">
              <img 
                src={img} 
                alt={`Car Image ${index + 1}`} 
                className="modal-image rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>  
    </div>
  );
}

export default ImageModal;
