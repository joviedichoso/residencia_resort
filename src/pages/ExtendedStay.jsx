import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function ExtendedStay() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: 'ease-in-out' });
    return () => AOS.refresh();
  }, []);

  const primaryButtonClass = "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent";

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 flex flex-col items-center justify-center py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8" data-aos="fade-up">
          Extended Stay Special
        </h1>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8" data-aos="fade-up" data-aos-delay="100">
          <div className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full w-fit mx-auto mb-4">
            Best Value
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Book 5 Nights, Free Breakfast
          </h2>
          <p className="text-gray-600 mb-6">
            Stay 5 nights at Recidencia del Hamor and enjoy a free breakfast each day. Ideal for a longer beach retreat!
          </p>
          <p className="text-lg font-bold text-blue-600 mb-6">
            From ₱1,298 per night
          </p>
          <Link
            to="/booking"
            className={primaryButtonClass}
            aria-label="Book the Extended Stay Special now"
          >
            Book Now
          </Link>
        </div>
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