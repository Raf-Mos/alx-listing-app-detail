import React, { useState } from "react";
import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-xl ${
          index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {property.name}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {renderStars(property.rating)}
            </div>
            <span className="text-gray-600 font-medium">{property.rating}</span>
          </div>
          <span className="text-gray-600">
            {property.address.city}, {property.address.state}, {property.address.country}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Image Grid */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="md:row-span-2">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>
              
              {/* Additional Images */}
              {property.images && property.images.slice(1, 5).map((image, index) => (
                <div key={index} className="hidden md:block">
                  <img
                    src={image}
                    alt={`${property.name} ${index + 2}`}
                    className="w-full h-44 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              {[
                { id: "overview", label: "Vue d'ensemble" },
                { id: "amenities", label: "Ce que nous offrons" },
                { id: "reviews", label: "Avis" },
                { id: "host", label: "À propos de l'hôte" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mb-8">
            {activeTab === "overview" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {property.description || "Une propriété magnifique avec toutes les commodités modernes."}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">🛏️</span>
                    <span>{property.offers.bed} chambres</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">🚿</span>
                    <span>{property.offers.shower} salles de bain</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">👥</span>
                    <span>{property.offers.occupants} invités</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "amenities" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Ce que ce lieu offre</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.amenities ? (
                    property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <span className="text-blue-600">✓</span>
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))
                  ) : (
                    property.category.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <span className="text-blue-600">✓</span>
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <ReviewSection reviews={property.reviews || []} />
              </div>
            )}

            {activeTab === "host" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">À propos de l'hôte</h2>
                <div className="flex items-start space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                    alt="Host"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">Hôte vérifié</h3>
                    <p className="text-gray-600 mt-2">
                      Hôte expérimenté avec plus de 100 avis positifs. Nous nous engageons à offrir 
                      une expérience exceptionnelle à nos invités.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Booking Section - Sticky on desktop */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <BookingSection price={property.price} discount={property.discount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
