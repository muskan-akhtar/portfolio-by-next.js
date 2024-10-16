import React from 'react';

const Welcome = () => {
  const message = "Welcome To My Portfolio";
  const subMessage = "I am a passionate Web Developer";
  const alphabets = message.split(''); 
  const subAlphabets = subMessage.split('');

  return (
    <div 
      className="flex flex-col justify-center items-center h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/path/to/your/background/image.jpg')" }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-800 text-shadow-lg text-center">
        {alphabets.map((char, index) => (
          <span 
            key={index} 
            className="inline-block animate-bounce transition-transform duration-500 ease-in-out hover:scale-125 mr-2"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-300 mt-4 text-center">
        {subAlphabets.map((char, index) => (
          <span 
            key={index} 
            className="inline-block animate-bounce transition-transform duration-500 ease-in-out hover:scale-125 mr-2"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default Welcome;
