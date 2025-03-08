// components/AmenityCard.jsx
export default function AmenityCard({ amenity }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <img
        src={amenity.image}
        alt={amenity.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{amenity.name}</h3>
        <p className="text-gray-600 mb-4">{amenity.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {amenity.highlights.map((highlight, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
            >
              {highlight}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Hours: {amenity.hours}</p>
          <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}