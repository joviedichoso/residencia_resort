import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RoomCard from '../components/RoomCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Room1 from '../assets/images/room1.jpg';
import Room2 from '../assets/images/room2.webp';
import Room3 from '../assets/images/room3.webp';
import Room4 from '../assets/images/room4.jpg';
import AccommodationsHero from '../assets/images/accommodations-hero.webp';

// Updated room data with additional pricing for different types
const rooms = [
  {
    id: 1,
    name: 'Standard Room',
    price: 1298,
    premiumPrice: 1498,
    familyPrice: 1698,
    image: Room1,
    description: 'A cozy room with essentials for a relaxing beach stay.',
    features: ['Double Bed', 'Fan', 'Free WiFi', 'Shared Balcony'],
    size: '20 m²',
    occupancy: 2,
    familyOccupancy: 4,
    availableRooms: 3,
    minStay: '1 night',
  },
  {
    id: 2,
    name: 'Deluxe Room',
    price: 1598,
    premiumPrice: 1798,
    familyPrice: 1998,
    image: Room2,
    description: 'Comfortable space with a view of the sea.',
    features: ['Queen Bed', 'Air Conditioning', 'Free WiFi', 'Private Bathroom'],
    size: '25 m²',
    occupancy: 2,
    familyOccupancy: 4,
    availableRooms: 2,
    minStay: '1 night',
  },
  {
    id: 3,
    name: 'Beachfront Room',
    price: 2077,
    premiumPrice: 2277,
    familyPrice: 2477,
    image: Room3,
    description: 'Steps from the beach with direct ocean access.',
    features: ['King Bed', 'Air Conditioning', 'Free WiFi', 'Patio'],
    size: '30 m²',
    occupancy: 2,
    familyOccupancy: 4,
    availableRooms: 1,
    minStay: '1 night',
  },
  {
    id: 4,
    name: 'Family Room',
    price: 1898,
    premiumPrice: 2098,
    familyPrice: 2298,
    image: Room4,
    description: 'Spacious option for families or groups near the shore.',
    features: ['Two Double Beds', 'Fan', 'Free WiFi', 'Shared Bathroom'],
    size: '35 m²',
    occupancy: 4,
    familyOccupancy: 6,
    availableRooms: 2,
    minStay: '1 night',
  },
];

export default function Accommodations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomType, setRoomType] = useState('Regular'); // Default to Regular

  const openModal = (room) => {
    setSelectedRoom(room);
    setRoomType('Regular'); // Reset to Regular when opening modal
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-in-out' });
    return () => AOS.refresh();
  }, []);

  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[100vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${AccommodationsHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <div className="relative z-10 text-center p-6 md:p-12">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl"
            data-aos="fade-down"
          >
            Our Accommodations
          </h1>
          <p
            className="text-lg sm:text-xl text-gray-100 drop-shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Find your perfect stay at Recidencia del Hamor
          </p>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
              data-aos="fade-up"
            >
              Explore Our Rooms
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Comfortable and affordable options designed for your beach getaway in Santa Magdalena.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <RoomCard room={room} onClick={() => openModal(room)} />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12" data-aos="zoom-in" data-aos-delay="300">
            <Link
              to="/booking"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Book Your Room Now
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8"
            data-aos="fade-up"
          >
            Why Stay With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6" data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Affordable Comfort</h3>
              <p className="text-gray-600">Clean, cozy rooms at budget-friendly prices.</p>
            </div>
            <div className="p-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Beachfront Location</h3>
              <p className="text-gray-600">Just steps away from the shores of Santa Magdalena.</p>
            </div>
            <div className="p-6" data-aos="fade-left" data-aos-delay="300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Friendly Hospitality</h3>
              <p className="text-gray-600">Our staff ensures a warm and welcoming stay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedRoom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full mx-4 shadow-lg transform transition-all duration-300 ease-out scale-95 animate-modal-in overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative">
              <img
                src={selectedRoom.image}
                alt={selectedRoom.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-300 transition-all duration-200"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">{selectedRoom.name}</h4>
              <p className="text-gray-600 mb-4">{selectedRoom.description}</p>

              {/* Room Type Selection */}
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setRoomType('Regular')}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    roomType === 'Regular'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Regular ₱{selectedRoom.price}
                </button>
                <button
                  onClick={() => setRoomType('Premium')}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    roomType === 'Premium'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Premium ₱{selectedRoom.premiumPrice}
                </button>
                <button
                  onClick={() => setRoomType('Family')}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    roomType === 'Family'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Family ₱{selectedRoom.familyPrice}
                </button>
              </div>

              {/* Room Details */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">👥</span>
                  <p className="text-gray-600">
                    Max Guests: {roomType === 'Family' ? selectedRoom.familyOccupancy : selectedRoom.occupancy} people
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">📏</span>
                  <p className="text-gray-600">Room Size: {selectedRoom.size}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">🛏️</span>
                  <p className="text-gray-600">Room Used: 0</p>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">🏠</span>
                  <p className="text-gray-600">Room Available: {selectedRoom.availableRooms}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">📅</span>
                  <p className="text-gray-600">Min Stay: {selectedRoom.minStay}</p>
                </div>
              </div>

              {/* Room Amenities */}
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-gray-800 mb-2">Room Amenities</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedRoom.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-500 mr-1">✔</span>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Now Button */}
              <Link
                to="/booking"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg text-center transition-all duration-300"
                onClick={closeModal}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <style jsx global>{`
        @keyframes modal-in {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-modal-in {
          animation: modal-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}