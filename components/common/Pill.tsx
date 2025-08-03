import React from 'react';

interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
        ${
          isActive
            ? 'bg-primary-600 text-white shadow-md hover:bg-primary-700'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
        }
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50
      `}
    >
      {label}
    </button>
  );
};

export default Pill;
