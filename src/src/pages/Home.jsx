import { useEffect, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../assets/images/hero.webp'; 
import { FaBed, FaUtensils, FaSwimmingPool, FaConciergeBell, FaWifi, FaShower } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Updated static data for Recidencia del Hamor Beach Front in Santa Magdalena
const FEATURES = [
  {
    icon: FaBed,
    title: "Comfortable Beachfront Rooms",
    description: "Rest easy with sea views and cozy accommodations.",
    delay: 100
  },
  {
    icon: FaUtensils,
    title: "Local Dining",
    description: "Enjoy fresh, home-cooked meals by the shore.",
    delay: 200
  },
  {
    icon: FaSwimmingPool,
    title: "Beach Access",
    description: "Step right onto the sandy shores of Santa Magdalena.",
    delay: 300
  },
  {
    icon: FaShower,
    title: "Clean Bathrooms",
    description: "Freshen up with well-maintained facilities.",
    delay: 400
  },
  {
    icon: FaConciergeBell,
    title: "Friendly Staff",
    description: "Warm hospitality to make your stay memorable.",
    delay: 500
  },
  {
    icon: FaWifi,
    title: "Free WiFi",
    description: "Stay connected with reliable internet.",
    delay: 600
  }
];

const TESTIMONIALS = [
  {
    quote: "Clean rooms and super close to the beach! Perfect budget stay.",
    author: "Anna Reyes",
    location: "Manila, Philippines",
    rating: 4,
    delay: 100
  },
  {
    quote: "The staff were so kind and helpful. Loved the beachfront vibe!",
    author: "Mark Lim",
    location: "Cebu, Philippines",
    rating: 5,
    delay: 200
  },
  {
    quote: "Simple but cozy. Great value for a beach getaway.",
    author: "Clara Tan",
    location: "Davao, Philippines",
    rating: 4,
    delay: 300
  },
  {
    quote: "Amazing location right by the sea. Very relaxing!",
    author: "John Cruz",
    location: "Quezon City, Philippines",
    rating: 5,
    delay: 400
  }
];

const HERO_MESSAGES = [
  {
    heading: "Welcome to Recidencia del Hamor",
    subheading: "Your beachfront haven in Santa Magdalena, Sorsogon."
  },
  {
    heading: "Escape to the Shore",
    subheading: "Affordable comfort by the sea."
  },
  {
    heading: "Santa Magdalena Bliss",
    subheading: "Where the beach meets relaxation."
  }
];

// Weather emoji map (unchanged)
const WEATHER_EMOJI_MAP = {
  'Clear': '☀️',
  'Clouds': '☁️',
  'Rain': '🌧️',
  'Thunderstorm': '⛈️',
  'Snow': '❄️',
  'Mist': '🌫️',
  'Fog': '🌫️',
  'default': '🌤️'
};

// Custom hook for weather (unchanged)
function useWeather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const fetchWeatherData = () => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const API_KEY = "680636688db58cc866a2689bfb0813dc";
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch weather data");
            }

            const data = await response.json();
            if (isMounted && data.main) {
              setWeather({
                temp: data.main.temp,
                condition: data.weather[0].main,
              });
            }
          } catch (err) {
            if (isMounted) {
              setError(err.message);
              console.error("Weather fetch error:", err);
            }
          } finally {
            if (isMounted) {
              setLoading(false);
            }
          }
        },
        (geoError) => {
          if (isMounted) {
            setError("Location access denied");
            setLoading(false);
            console.error("Geolocation error:", geoError);
          }
        }
      );
    };

    fetchWeatherData();
    return () => {
      isMounted = false;
    };
  }, []);

  const getWeatherEmoji = useCallback((condition) => {
    return WEATHER_EMOJI_MAP[condition] || WEATHER_EMOJI_MAP.default;
  }, []);

  return { weather, loading, error, getWeatherEmoji };
}

// FeatureCard and TestimonialCard components (unchanged)
const FeatureCard = ({ feature, animationDirection }) => {
  const { icon: Icon, title, description, delay } = feature;
  return (
    <div
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50"
      data-aos={animationDirection}
      data-aos-delay={delay}
    >
      <Icon className="text-5xl text-blue-600 mx-auto mb-4 transition-all duration-500 ease-in-out hover:text-blue-700" />
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ testimonial, animationDirection }) => {
  const { quote, author, location, rating, delay } = testimonial;
  const stars = useMemo(() => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
    ));
  }, [rating]);
  return (
    <div
      className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50"
      data-aos={animationDirection}
      data-aos-delay={delay}
    >
      <div className="flex mb-3">{stars}</div>
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      <div>
        <p className="text-gray-800 font-semibold">{author}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
};

export default function Home() {
  const [activeFeatures, setActiveFeatures] = useState(FEATURES.slice(0, 3));
  const [displayedTestimonials, setDisplayedTestimonials] = useState(TESTIMONIALS.slice(0, 3));
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);
  const [heroText, setHeroText] = useState(HERO_MESSAGES[0]);
  const { weather, getWeatherEmoji } = useWeather();

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * HERO_MESSAGES.length);
      setHeroText(HERO_MESSAGES[randomIndex]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ 
      duration: 1200, 
      once: true, 
      easing: 'ease-in-out',
      disable: window.innerWidth < 768 ? 'mobile' : false 
    });
    return () => AOS.refresh();
  }, []);

  const toggleFeatures = useCallback(() => {
    setActiveFeatures(prev => showMoreFeatures ? FEATURES.slice(0, 3) : FEATURES);
    setShowMoreFeatures(prev => !prev);
  }, [showMoreFeatures]);

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...TESTIMONIALS];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setDisplayedTestimonials(shuffled.slice(0, 3));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const getAnimationDirection = (index) => {
    return index % 3 === 0 ? "fade-right" : index % 3 === 1 ? "fade-up" : "fade-left";
  };

  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-4 overflow-hidden"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        {weather && (
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-2 text-white">
            <span className="text-xl">{getWeatherEmoji(weather.condition)}</span>
            <span className="text-lg">{weather.temp.toFixed(1)}°C</span>
            <span className="text-sm">{weather.condition}</span>
          </div>
        )}
        <div className="relative z-10 text-center p-6 md:p-12">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-xl transition-all duration-1000 ease-in-out"
            data-aos="fade-down"
          >
            {heroText.heading}
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 drop-shadow-md transition-all duration-1000 ease-in-out"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {heroText.subheading}
          </p>
          <Link
            to="/booking"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:from-blue-700 hover:to-blue-800"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen flex items-center justify-center">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12" data-aos="fade-up">
            Experience Recidencia del Hamor
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {activeFeatures.map((feature, index) => (
              <FeatureCard 
                key={feature.title} 
                feature={feature} 
                animationDirection={getAnimationDirection(index)} 
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg hover:from-blue-700 hover:to-blue-800"
              onClick={toggleFeatures}
              data-aos="zoom-in"
            >
              {showMoreFeatures ? "Show Less" : "View More Features"}
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white min-h-screen flex items-center justify-center">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12" data-aos="fade-up">
            Guest Reviews
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`${testimonial.author}-${index}`} 
                testimonial={testimonial} 
                animationDirection={getAnimationDirection(index)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen flex items-center justify-center">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12" data-aos="fade-up">
            Exclusive Beachfront Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-right"
            >
              <div className="p-6">
                <div className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full w-fit mb-3">
                  Limited Time
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-500 group-hover:text-blue-600">
                  Beach Getaway Deal
                </h3>
                <p className="text-gray-600 mb-4">Stay 2 nights and get 10% off your total booking.</p>
                <p className="text-lg font-bold text-blue-600 mb-4">From ₱1,168 per night</p>
                <Link
                  to="/offers/beach-getaway"
                  className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-500 ease-in-out hover:shadow-lg transform hover:scale-105 hover:from-blue-700 hover:to-blue-800"
                >
                  View Details
                </Link>
              </div>
            </div>
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-left"
            >
              <div className="p-6">
                <div className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full w-fit mb-3">
                  Best Value
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-500 group-hover:text-blue-600">
                  Extended Stay Special
                </h3>
                <p className="text-gray-600 mb-4">Book 5 nights and enjoy a free breakfast daily.</p>
                <p className="text-lg font-bold text-blue-600 mb-4">From ₱1,298 per night</p>
                <Link
                  to="/offers/extended-stay"
                  className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-500 ease-in-out hover:shadow-lg transform hover:scale-105 hover:from-blue-700 hover:to-blue-800"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white min-h-screen flex items-center justify-center">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-aos="fade-up">
            Stay Updated
          </h2>
          <p className="text-lg text-blue-100 mb-8" data-aos="fade-up" data-aos-delay="100">
            Join our newsletter for exclusive deals and Santa Magdalena travel tips.
          </p>
          <form 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              required
              className="px-4 py-3 rounded-lg text-gray-800 w-full sm:w-auto sm:flex-1 max-w-md transition-all duration-500 ease-in-out border border-white/20 focus:border-white/40 bg-white/90 focus:bg-white"
            />
            <button 
              type="submit"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}