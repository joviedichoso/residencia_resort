import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookingHero from '../assets/images/booking-hero.webp';

export default function Booking() {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[100vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BookingHero})`, // Add a hero image for booking
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
            Book Your Stay
          </h1>
          <p
            className="text-lg sm:text-xl text-gray-100 drop-shadow-md max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Reserve your slice of paradise at Residencia del Hamor today.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
              data-aos="fade-up"
            >
              Plan Your Perfect Getaway
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Fill out the form below to secure your stay and experience luxury like never before.
            </p>
          </div>

          <div
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-500 ease-in-out"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <BookingForm />
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
            Booking Made Simple
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="p-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Flexible Dates</h3>
              <p className="text-gray-600">Choose your preferred dates with ease and flexibility.</p>
            </div>
            <div
              className="p-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure Payment</h3>
              <p className="text-gray-600">Safe and encrypted transactions for your peace of mind.</p>
            </div>
            <div
              className="p-6"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Instant Confirmation</h3>
              <p className="text-gray-600">Receive your booking details immediately upon submission.</p>
            </div>
          </div>

          {/* Support CTA */}
          <div className="mt-12" data-aos="zoom-in" data-aos-delay="400">
            <p className="text-gray-600 mb-4">Need assistance? We’re here to help!</p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}