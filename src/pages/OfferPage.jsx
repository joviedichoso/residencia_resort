import { Link, useParams, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

export default function OfferPage() {
  const { offerSlug } = useParams(); // Get the slug from the URL
  const navigate = useNavigate(); // For redirecting if offer not found
  const [countdown, setCountdown] = useState(null); // Optional countdown for limited offers

  // Define offers directly in the component
  const OFFERS = [
    {
      slug: "beach-getaway",
      title: "Beach Getaway Deal",
      subtitle: "Stay 2 Nights, Get 10% Off",
      description: "Enjoy a relaxing beachfront escape at Recidencia del Hamor. Book a 2-night stay and receive a 10% discount on your total booking. Perfect for a quick getaway!",
      price: "From ₱1,168 per night",
      badge: {
        text: "Limited Time Offer",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-800",
      },
    },
    {
      slug: "extended-stay",
      title: "Extended Stay Special",
      subtitle: "Book 5 Nights, Free Breakfast",
      description: "Stay 5 nights at Recidencia del Hamor and enjoy a free breakfast each day. Ideal for a longer beach retreat!",
      price: "From ₱1,298 per night",
      badge: {
        text: "Best Value",
        bgColor: "bg-pink-100",
        textColor: "text-pink-800",
      },
    },
  ];

  // Find the offer based on slug
  const offer = OFFERS.find(o => o.slug === offerSlug);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
    });
    return () => AOS.refresh();
  }, []);

  // Optional: Countdown timer for "Limited Time Offer" (e.g., 3 days from now)
  useEffect(() => {
    if (offer?.badge.text === "Limited Time Offer") {
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 3); // 3-day countdown example
      const timer = setInterval(() => {
        const now = new Date();
        const timeLeft = endDate - now;
        if (timeLeft <= 0) {
          clearInterval(timer);
          setCountdown("Offer Expired");
        } else {
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          setCountdown(`${days}d ${hours}h ${minutes}m`);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [offer]);

  // Redirect to home if offer not found
  useEffect(() => {
    if (!offer) {
      navigate('/'); // Redirect to home if slug doesn't match any offer
    }
  }, [offer, navigate]);

  if (!offer) return null; // Prevent rendering until redirect kicks in

  const primaryButtonClass = "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent";

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 flex flex-col items-center justify-center py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h1
          className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8"
          data-aos="fade-up"
        >
          {offer.title}
        </h1>

        {/* Offer Details */}
        <div
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className={`${offer.badge.bgColor} ${offer.badge.textColor} text-xs font-medium px-2.5 py-0.5 rounded-full w-fit mx-auto mb-4`}>
            {offer.badge.text}
            {countdown && offer.badge.text === "Limited Time Offer" && (
              <span className="ml-2">({countdown})</span>
            )}
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {offer.subtitle}
          </h2>
          <p className="text-gray-600 mb-6">
            {offer.description}
          </p>
          <p className="text-lg font-bold text-blue-600 mb-6">
            {offer.price}
          </p>
          <Link
            to="/booking"
            className={primaryButtonClass}
            aria-label={`Book the ${offer.title} now`}
          >
            Book Now
          </Link>
        </div>

        {/* Back to Home */}
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