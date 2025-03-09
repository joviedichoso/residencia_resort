export default function BookingForm() {
  return (
    <form className="space-y-8">
      {/* Check-In and Check-Out Dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
            Check-In Date
          </label>
          <input
            type="date"
            id="checkIn"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">
            Check-Out Date
          </label>
          <input
            type="date"
            id="checkOut"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:shadow-outline"
            required
          />
        </div>
      </div>

      {/* Guests and Room Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
            Number of Guests
          </label>
          <select
            id="guests"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:shadow-outline"
            required
          >
            <option value="">Select</option>
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">
            Room Type
          </label>
          <select
            id="roomType"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:shadow-outline"
            required
          >
            <option value="">Select</option>
            <option value="deluxe">Deluxe Room</option>
            <option value="suite">Premium Suite</option>
            <option value="villa">Oceanfront Villa</option>
            <option value="family">Family Suite</option>
          </select>
        </div>
      </div>

      {/* Full Name and Email */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:shadow-outline"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:shadow-outline"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-500 ease-in-out hover:shadow-lg transform hover:scale-105 hover:from-blue-700 hover:to-indigo-700"
      >
        Submit Booking
      </button>
    </form>
  );
}