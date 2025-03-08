import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // For internal navigation
import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from 'react-icons/fa';
import Logo  from '../assets/images/logo.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  // Navigation links (unchanged)
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/accommodations', label: 'Accommodations' },
    { path: '/amenities', label: 'Amenities' },
    { path: '/booking', label: 'Book Now' },
    { path: '/contact', label: 'Contact' },
  ];

  // Social media links (placeholders, replace with actual URLs if available)
  const socialLinks = [
    { icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-blue-900 text-white py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative Background Element */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="url(#waveGradient)"
              d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Brand Section */}
          <div className="text-center md:text-left" data-aos="fade-up">
            <Link to="/" className="flex items-center justify-center md:justify-start mb-4 group">
              <img
                src={Logo} // ✅ Correct usage
                alt="Residencia del Hamor Beach Front"
                className="h-10 w-10 transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
              <span className="ml-2 text-xl font-semibold text-white transition-colors duration-500 ease-in-out group-hover:text-blue-300">
                Recidencia del Hamor
              </span>
            </Link>
            <p className="text-gray-300 text-sm">
              Your cozy beachfront getaway in Santa Magdalena, Sorsogon. Relax by the sea.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold text-blue-300 mb-4">Explore</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out transform hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold text-blue-300 mb-4">Connect With Us</h3>
            <p className="text-gray-300 text-sm mb-2">Santa Magdalena, Sorsogon, Philippines</p>
            <p className="text-gray-300 text-sm mb-2">Email: stay@recidenciadelhamor.com</p>
            <p className="text-gray-300 text-sm mb-4">Phone: +63 956 789 1234</p>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-125"
                    aria-label={social.label}
                  >
                    <Icon className="text-2xl" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright & Back to Top */}
        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center relative z-10">
          <p className="text-gray-400 text-sm" data-aos="fade-up" data-aos-delay="300">
            © {new Date().getFullYear()} Recidencia del Hamor Beach Front. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg focus:outline-none"
            aria-label="Back to top"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaArrowUp className="text-xl" />
          </button>
        </div>
      </div>
    </footer>
  );
}