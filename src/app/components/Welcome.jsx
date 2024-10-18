import React from 'react';

const Welcome = () => {
  const message = "Welcome To My Portfolio";
  const subMessage = "I am a passionate Web Developer";

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 px-4">
      {/* Main message */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center leading-tight sm:leading-snug">
        {message}
      </h1>

      {/* Sub message */}
      <h2 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 mt-4 sm:mt-6 text-center">
        {subMessage}
      </h2>
    </div>
  );
};

export default Welcome;
