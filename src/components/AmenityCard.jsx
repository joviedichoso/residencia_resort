export default function AmenityCard({ amenity, openModal }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <img
        src={amenity.image}
        alt={amenity.name}
        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300 hover:text-blue-600">
          {amenity.name}
        </h3>
        <p className="text-gray-600 mb-4">{amenity.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {amenity.highlights.map((highlight, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full transition-all duration-300 hover:bg-blue-200 hover:scale-105"
            >
              {highlight}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Hours: {amenity.hours}</p>
          <button
            onClick={() => openModal(amenity)}
            className="relative text-blue-600 font-semibold overflow-hidden group"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Learn More
            </span>
            <span className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></span>
          </button>
        </div>
      </div>
    </div>
  );
}