// import React from 'react';

// const Welcome = () => {
//   const message = "Welcome To My Portfolio";
//   const alphabets = message.split(''); // Split the message into an array of characters

//   return (
//     <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/background/image.jpg')" }}>
//       <h1 className="text-5xl font-bold">
//         {alphabets.map((char, index) => (
//           <span key={index} className="inline-block animate-bounce transition-transform duration-500 ease-in-out hover:scale-125 mr-2"> {/* Add margin here */}
//             {char}
//           </span>
//         ))}
//       </h1>
//     </div>
//   );
// };

// // export default Welcome;





// import React from 'react';

// const Welcome = () => {
//   const message = "Welcome To My Portfolio";
//   const alphabets = message.split(''); // Split the message into an array of characters

//   return (
//     <div 
//       className="flex justify-center items-center h-screen bg-cover bg-center" 
//       style={{ backgroundImage: "url('/path/to/your/background/image.jpg')" }}
//     >
//       <h1 className="text-6xl font-extrabold text-green-800 text-shadow-lg">
//         {alphabets.map((char, index) => (
//           <span 
//             key={index} 
//             className="inline-block animate-bounce transition-transform duration-500 ease-in-out hover:scale-125 mr-2"
//           >
//             {char === ' ' ? '\u00A0' : char} {/* Adds space between words */}
//           </span>
//         ))}
//       </h1>
//     </div>
//   );
// };

// export default Welcome;



import React from 'react';

const Welcome = () => {
  const message = "Welcome To My Portfolio";
  const subMessage = "I am a passionate Web Developer"; // Additional line
  const alphabets = message.split(''); // Split the message into an array of characters
  const subAlphabets = subMessage.split(''); // Split the additional message

  return (
    <div 
      className="flex flex-col justify-center items-center h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/path/to/your/background/image.jpg')" }}
    >
      <h1 className="text-6xl font-extrabold text-green-800 text-shadow-lg">
        {alphabets.map((char, index) => (
          <span 
            key={index} 
            className="inline-block animate-bounce transition-transform duration-500 ease-in-out hover:scale-125 mr-2"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
      
      <h2 className="text-4xl font-semibold text-green-300 mt-4">
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


