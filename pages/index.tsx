import React, { useState } from 'react';
import { PROPERTYLISTINGSAMPLE, FILTER_OPTIONS, HERO_BACKGROUND_IMAGE } from '@/constants';
import { PropertyProps } from '@/interfaces';
import PropertyCard from '@/components/common/PropertyCard';
import Pill from '@/components/common/Pill';

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('');
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>(PROPERTYLISTINGSAMPLE);

  const handleFilterClick = (filter: string) => {
    if (activeFilter === filter) {
      // Deselect filter if it's already active
      setActiveFilter('');
      setFilteredProperties(PROPERTYLISTINGSAMPLE);
    } else {
      // Apply new filter
      setActiveFilter(filter);
      const filtered = PROPERTYLISTINGSAMPLE.filter(property =>
        property.category.some(cat => 
          cat.toLowerCase().includes(filter.toLowerCase())
        )
      );
      setFilteredProperties(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="hero-bg min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center text-white relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${HERO_BACKGROUND_IMAGE}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            The best prices for over 2 million properties worldwide.
          </p>
          <div className="mt-8">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg">
              Explore Properties
            </button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 lg:mb-0">
              Discover Properties
            </h2>
            <div className="text-sm text-gray-600">
              {filteredProperties.length} properties found
              {activeFilter && (
                <span className="ml-2 text-primary-600 font-medium">
                  • Filtered by "{activeFilter}"
                </span>
              )}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {FILTER_OPTIONS.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>

          {activeFilter && (
            <button
              onClick={() => {
                setActiveFilter('');
                setFilteredProperties(PROPERTYLISTINGSAMPLE);
              }}
              className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center mb-6"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear filter
            </button>
          )}
        </div>
      </section>

      {/* Properties Listing Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-12">
              <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2-4h14V9a2 2 0 00-2-2H7a2 2 0 00-2 2v8.5M9 7h6m-6 4h6m-6 4h6"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No properties found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search criteria
              </p>
              <button
                onClick={() => {
                  setActiveFilter('');
                  setFilteredProperties(PROPERTYLISTINGSAMPLE);
                }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                View All Properties
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to find your perfect stay?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join millions of travelers who have found their ideal properties with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              Start Exploring
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
