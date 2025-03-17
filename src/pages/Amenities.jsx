import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AmenityCard from '../components/AmenityCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Beach from '../assets/images/beach.webp';
import Restaurant from '../assets/images/restaurant.webp';
import Lounge from '../assets/images/lounge.jpg';
import WaterActivities from '../assets/images/water-activities.webp';
import Support from '../assets/images/support.jfif';
import AmenitiesHero from '../assets/images/amenities-hero.webp';

// Amenity data
const amenities = [
  {
    id: 1,
    name: "Beachfront Access",
    image: Beach,
    description: "Step right onto the sandy shores of Santa Magdalena.",
    highlights: ["Swimming", "Sunbathing", "Beach Walks"],
    hours: "Open 24/7",
  },
  {
    id: 2,
    name: "Local Dining",
    image: Restaurant,
    description: "Enjoy fresh, home-cooked Filipino meals by the sea.",
    highlights: ["Seafood Specialties", "Outdoor Seating", "Affordable Menu"],
    hours: "7:00 AM - 9:00 PM",
  },
  {
    id: 3,
    name: "Cozy Lounge Area",
    image: Lounge,
    description: "Relax with a book or chat with friends in our common area.",
    highlights: ["Free WiFi", "Comfortable Seating", "Ocean Views"],
    hours: "Open 24/7",
  },
  {
    id: 4,
    name: "Water Activities",
    image: WaterActivities,
    description: "Explore the sea with fun and affordable rentals.",
    highlights: ["Kayak Rentals", "Snorkeling Gear", "Fishing Options"],
    hours: "8:00 AM - 5:00 PM",
  },
  {
    id: 5,
    name: "Guest Support",
    image: Support,
    description: "Our friendly staff are here to make your stay seamless.",
    highlights: ["Tour Booking", "Local Tips", "24/7 Assistance"],
    hours: "Available Anytime",
  },
];

export default function Amenities() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAmenity, setSelectedAmenity] = useState(null);

  const openModal = (amenity) => {
    setSelectedAmenity(amenity);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAmenity(null);
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: false, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[100vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${AmenitiesHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <div className="relative z-10 text-center p-6 md:p-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4" data-aos="fade-down">
            Amenities & Activities
          </h1>
          <p className="text-lg sm:text-xl text-gray-100" data-aos="fade-up" data-aos-delay="200">
            Enjoy Your Stay at Recidencia del Hamor
          </p>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="min-h-screen bg-gray-50 py-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up">
              Explore Our Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Simple comforts and beachside fun await you in Santa Magdalena.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={amenity.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <AmenityCard amenity={amenity} openModal={openModal} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="zoom-in" data-aos-delay="300">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8" data-aos="fade-up">
            Make the Most of Your Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6" data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Beachfront Living</h3>
              <p className="text-gray-600">Direct access to the sea, steps from your room.</p>
            </div>
            <div className="p-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Local Adventures</h3>
              <p className="text-gray-600">Discover Santa Magdalena with our activity options.</p>
            </div>
            <div className="p-6" data-aos="fade-left" data-aos-delay="300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Friendly Service</h3>
              <p className="text-gray-600">We’re here to help you feel at home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Dynamic Modal */}
      {isModalOpen && selectedAmenity && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-lg transform transition-all duration-300 ease-out scale-95 animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedAmenity.image}
              alt={selectedAmenity.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{selectedAmenity.name}</h4>
              <p className="text-gray-600 mb-3">{selectedAmenity.description}</p>
              <ul className="space-y-1 mb-3">
                {selectedAmenity.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500">Hours: {selectedAmenity.hours}</p>
            </div>
            <button
              onClick={closeModal}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-b-lg transition-all duration-200"
            >
              Close
            </button>
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