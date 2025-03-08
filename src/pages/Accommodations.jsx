import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RoomCard from '../components/RoomCard';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Room1 from '../assets/images/room1.jpg';
import Room2 from '../assets/images/room2.webp';
import Room3 from '../assets/images/room3.webp';
import Room4 from '../assets/images/room4.jpg';
import AccommodationsHero from '../assets/images/accommodations-hero.webp';

// Updated room data for Recidencia del Hamor Beach Front
const rooms = [
  {
    id: 1,
    name: 'Standard Room',
    price: 1298, // PHP, aligned with Agoda's lower range
    image: Room1,
    description: 'A cozy room with essentials for a relaxing beach stay.',
    features: ['Double Bed', 'Fan', 'Free WiFi', 'Shared Balcony'],
    size: '20 m²',
    occupancy: 2,
  },
  {
    id: 2,
    name: 'Deluxe Room',
    price: 1598, // Slightly higher but still budget-friendly
    image: Room2,
    description: 'Comfortable space with a view of the sea.',
    features: ['Queen Bed', 'Air Conditioning', 'Free WiFi', 'Private Bathroom'],
    size: '25 m²',
    occupancy: 2,
  },
  {
    id: 3,
    name: 'Beachfront Room',
    price: 2077, // PHP, aligned with Agoda's upper range
    image: Room3,
    description: 'Steps from the beach with direct ocean access.',
    features: ['King Bed', 'Air Conditioning', 'Free WiFi', 'Patio'],
    size: '30 m²',
    occupancy: 2,
  },
  {
    id: 4,
    name: 'Family Room',
    price: 1898, // Affordable for families
    image: Room4,
    description: 'Spacious option for families or groups near the shore.',
    features: ['Two Double Beds', 'Fan', 'Free WiFi', 'Shared Bathroom'],
    size: '35 m²',
    occupancy: 4,
  },
];

export default function Accommodations() {
  // Initialize AOS for animations
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
          backgroundImage: `url(${AccommodationsHero})`,// Add a hero image for accommodations
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
                <RoomCard room={room} />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12" data-aos="zoom-in" data-aos-delay="300">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
              onClick={() => window.location.href = '/booking'}
            >
              Book Your Room Now
            </button>
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
            <div
              className="p-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Affordable Comfort</h3>
              <p className="text-gray-600">Clean, cozy rooms at budget-friendly prices.</p>
            </div>
            <div
              className="p-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Beachfront Location</h3>
              <p className="text-gray-600">Just steps away from the shores of Santa Magdalena.</p>
            </div>
            <div
              className="p-6"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Friendly Hospitality</h3>
              <p className="text-gray-600">Our staff ensures a warm and welcoming stay.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}