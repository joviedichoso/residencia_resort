// components/AmenityCard.jsx
import { useState } from 'react';

export default function AmenityCard({ amenity }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
        <img
          src={amenity.image}
          alt={amenity.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{amenity.name}</h3>
          <p className="text-gray-600 mb-4">{amenity.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {amenity.highlights.map((highlight, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Hours: {amenity.hours}</p>
            <button 
              onClick={openModal}
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-bold text-gray-800">{amenity.name}</h4>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800"
              >
                ✕
              </button>
            </div>
            <img
              src={amenity.image}
              alt={amenity.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600 mb-4">{amenity.description}</p>
            <ul className="list-disc pl-5 mb-4 text-gray-600">
              {amenity.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
            <p className="text-gray-600 mb-4">Hours: {amenity.hours}</p>
            <button
              onClick={closeModal}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}