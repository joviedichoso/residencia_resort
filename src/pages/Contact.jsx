import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactHero from '../assets/images/contact-hero.jfif';
export default function Contact() {
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
          backgroundImage: `url(${ContactHero})`, // Add a hero image for contact
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
            Contact Us
          </h1>
          <p
            className="text-lg sm:text-xl text-gray-100 drop-shadow-md max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We’re here to assist you in planning your perfect stay at Residencia del Hamor.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
              data-aos="fade-up"
            >
              Get in Touch
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Reach out with any questions or requests, and our team will respond promptly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-500 ease-in-out"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-500 ease-in-out hover:shadow-lg transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div
              className="space-y-8"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Details</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Address:</span> 123 Paradise Lane, Hamor Island, Philippines
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Phone:</span> +63 912 345 6789
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span> info@residenciadelhamor.com
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Operating Hours</h3>
                <p className="text-gray-600 mb-2">Front Desk: 24/7</p>
                <p className="text-gray-600 mb-2">Reservations: 8:00 AM - 8:00 PM</p>
                <p className="text-gray-600">Guest Services: 24/7</p>
              </div>
              <div>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
                  onClick={() => window.location.href = '/booking'}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8"
            data-aos="fade-up"
          >
            Find Us
          </h2>
          <div
            className="rounded-xl overflow-hidden shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.446504019095!2d124.09169657503497!3d12.618686987665214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0c986a33c2133%3A0xc18bf005ffdcc617!2sSan%20Sebastian%20Barangay%20Hall!5e0!3m2!1sen!2sph!4v1741355959276!5m2!1sen!2sph"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}