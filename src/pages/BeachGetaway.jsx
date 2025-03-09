import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function BeachGetaway() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
    });
    return () => AOS.refresh();
  }, []);

  const primaryButtonClass = "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent";

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 flex flex-col items-center justify-center py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h1
          className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8"
          data-aos="fade-up"
        >
          Beach Getaway Deal
        </h1>

        {/* Offer Details */}
        <div
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full w-fit mx-auto mb-4">
            Limited Time Offer
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Stay 2 Nights, Get 10% Off
          </h2>
          <p className="text-gray-600 mb-6">
            Enjoy a relaxing beachfront escape at Recidencia del Hamor. Book a 2-night stay and receive a 10% discount on your total booking. Perfect for a quick getaway!
          </p>
          <p className="text-lg font-bold text-blue-600 mb-6">
            From ₱1,168 per night
          </p>
          <Link
            to="/booking"
            className={primaryButtonClass}
            aria-label="Book the Beach Getaway Deal now"
          >
            Book Now
          </Link>
        </div>

        {/* Back to Offers */}
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 underline transition-colors duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
          aria-label="Return to home page"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}