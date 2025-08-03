import React, { useState } from "react";

interface BookingSectionProps {
  price: number;
  discount?: string;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price, discount }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  // Calculate number of nights
  const calculateNights = () => {
    if (checkIn && checkOut) {
      const startDate = new Date(checkIn);
      const endDate = new Date(checkOut);
      const timeDiff = endDate.getTime() - startDate.getTime();
      const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return nights > 0 ? nights : 0;
    }
    return 0;
  };

  const nights = calculateNights();
  const discountedPrice = discount ? price * (1 - parseInt(discount) / 100) : price;
  const subtotal = discountedPrice * nights;
  const serviceFee = subtotal * 0.12; // 12% service fee
  const total = subtotal + serviceFee;

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMinCheckOutDate = () => {
    if (checkIn) {
      const checkInDate = new Date(checkIn);
      checkInDate.setDate(checkInDate.getDate() + 1);
      return checkInDate.toISOString().split('T')[0];
    }
    return getTodayDate();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 sticky top-6">
      {/* Price Header */}
      <div className="mb-6">
        <div className="flex items-baseline space-x-2">
          {discount ? (
            <>
              <span className="text-2xl font-bold text-gray-900">
                ${discountedPrice.toLocaleString()}
              </span>
              <span className="text-lg text-gray-500 line-through">
                ${price.toLocaleString()}
              </span>
              <span className="text-sm text-green-600 font-medium">
                -{discount}%
              </span>
            </>
          ) : (
            <span className="text-2xl font-bold text-gray-900">
              ${price.toLocaleString()}
            </span>
          )}
          <span className="text-gray-600">/ nuit</span>
        </div>
      </div>

      {/* Booking Form */}
      <div className="space-y-4">
        {/* Check-in / Check-out */}
        <div className="grid grid-cols-2 gap-2 border border-gray-300 rounded-lg overflow-hidden">
          <div className="p-3 border-r border-gray-300">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              ARRIVÉE
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              min={getTodayDate()}
              className="w-full text-sm border-none outline-none bg-transparent"
            />
          </div>
          <div className="p-3">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              DÉPART
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={getMinCheckOutDate()}
              className="w-full text-sm border-none outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="border border-gray-300 rounded-lg p-3">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            VOYAGEURS
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            className="w-full text-sm border-none outline-none bg-transparent"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>
                {num} voyageur{num > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Reserve Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105">
          Réserver maintenant
        </button>

        <p className="text-center text-sm text-gray-600">
          Aucun frais pour le moment
        </p>

        {/* Price Breakdown */}
        {nights > 0 && (
          <div className="border-t border-gray-200 pt-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">
                ${discountedPrice.toLocaleString()} × {nights} nuit{nights > 1 ? 's' : ''}
              </span>
              <span className="text-gray-900">
                ${subtotal.toLocaleString()}
              </span>
            </div>
            
            {discount && (
              <div className="flex justify-between text-sm">
                <span className="text-green-600">Réduction -{discount}%</span>
                <span className="text-green-600">
                  -${((price - discountedPrice) * nights).toLocaleString()}
                </span>
              </div>
            )}
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Frais de service</span>
              <span className="text-gray-900">
                ${serviceFee.toLocaleString()}
              </span>
            </div>
            
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingSection;
