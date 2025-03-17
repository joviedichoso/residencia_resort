// components/RoomCard.jsx
import { Link } from 'react-router-dom'; // Add this import

export default function RoomCard({ room }) {
  // Define the primary button class based on RoomCard's original button styling
  const primaryButtonClass =
    'block w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-500 ease-in-out hover:shadow-lg';

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <img
        src={room.image}
        alt={room.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{room.name}</h3>
        <p className="text-gray-600 mb-4">{room.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {room.features.map((feature, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-gray-600">Size: {room.size}</p>
            <p className="text-gray-600">Occupancy: {room.occupancy} guests</p>
          </div>
          <p className="text-xl font-bold text-blue-600">₱{room.price}/night</p>
        </div>
        <Link
          to="/booking" // Navigate to general booking page
          className={primaryButtonClass}
          data-aos="zoom-in"
          data-aos-delay="400"
          aria-label={`Book ${room.name} now`}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}