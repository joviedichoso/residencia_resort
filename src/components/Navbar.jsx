import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo  from '../assets/images/logo.webp';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Track current route dynamically

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/accommodations', label: 'Accommodations' },
    { path: '/amenities', label: 'Amenities' },
    { path: '/booking', label: 'Booking' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`bg-white shadow-lg w-full sticky top-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center px-2 group">
            <img 
              src={Logo} 
              alt="Residencia del Hamor" 
              className={`transition-all duration-500 ease-in-out ${scrolled ? 'h-10 w-10' : 'h-15 w-15'} transform group-hover:rotate-6`} 
            />
            <span className="font-semibold text-gray-500 text-lg ml-2 transition-colors duration-500 ease-in-out group-hover:text-blue-600">
              Residencia del Hamor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`relative py-2 px-3 font-semibold transition duration-500 ease-in-out ${
                  location.pathname === link.path 
                    ? 'text-blue-600' 
                    : 'text-gray-500 hover:text-blue-500'
                }`}
              >
                <span className="relative z-10">{link.label}</span>

                {/* Animated Underline */}
                <span 
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform transition-transform duration-500 ease-in-out ${
                    location.pathname === link.path 
                      ? 'scale-x-100' 
                      : 'scale-x-0 hover:scale-x-100'
                  }`}
                ></span>
              </Link>
            ))}

            <Link 
              to="/booking" 
              className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-lg transform transition-all duration-500 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-md"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="outline-none mobile-menu-button focus:outline-none" 
              onClick={toggleMobileMenu}
            >
              <svg 
                className="w-6 h-6 text-gray-500 hover:text-blue-500 transition-colors duration-500 ease-in-out" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center space-y-4 pt-4 pb-6 bg-white shadow-lg">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`py-2 px-4 w-full text-center font-semibold transition duration-500 ease-in-out ${
                  location.pathname === link.path 
                    ? 'text-blue-600 border-b-2 border-blue-500' 
                    : 'text-gray-500 hover:text-blue-500'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/booking" 
              className="w-3/4 text-center px-4 py-2 bg-blue-500 text-white rounded-lg transform transition-all duration-500 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
