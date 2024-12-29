import React from "react";

const Gallery = () => {
  return (
    <div className="p-6 sm:p-8 md:p-12">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
        Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <img
          src="/gallery/amu.jpg"
          alt="Gallery 1"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:grayscale"
        />
        <img
          src="/gallery/parthiban.jpg"
          alt="Gallery 2"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:grayscale"
        />
        <img
          src="/gallery/prize.jpg"
          alt="Gallery 3"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:grayscale"
        />
        <img
          src="/gallery/prize2.jpg"
          alt="Gallery 4"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:grayscale"
        />
        <img
          src="/gallery/prize3.jpg"
          alt="Gallery 5"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:grayscale"
        />
        <img
          src="/gallery/prize4.jpg"
          alt="Gallery 6"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:grayscale"
        />
        <img
          src="/gallery/prize5.jpg"
          alt="Gallery 7"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:grayscale"
        />
        <img
          src="/gallery/screen.jpg"
          alt="Gallery 8"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:grayscale"
        />
        <img
          src="/gallery/screen2.jpg"
          alt="Gallery 9"
          className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:grayscale"
        />
      </div>
    </div>
  );
};

export default Gallery;
