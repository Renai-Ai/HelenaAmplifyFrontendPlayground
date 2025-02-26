import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return <button 
        className="px-4 py-2 mt-2 
            text-sm font-semibold text-white
            bg-blue-600 transition duration-500 ease-in-out 
            transform bg-transparent rounded-lg dark:text-gray-300 md:mt-0 md:ml-4
            hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100
            focus:bg-gray-200 focus:outline-none focus:shadow-outline"
    
        onClick={onClick}>{label}</button>;
  };

export default Button;