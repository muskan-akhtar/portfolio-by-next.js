// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';

// export default function Skills() {
//   const skills = [
//     {
//       name: "JavaScript",
//       description: "I have a foundational understanding of JavaScript, which allows me to write dynamic and interactive web applications."
//     },
//     {
//       name: "React",
//       description: "I have started learning React, a popular JavaScript library for building user interfaces. I understand the core concepts like components, props, and state management."
//     },
//     {
//       name: "Next.js",
//       description: "I am currently learning Next.js, which is a powerful framework built on top of React. I appreciate its features like server-side rendering and routing capabilities."
//     },
//     {
//       name: "Tailwind CSS",
//       description: "I have started using Tailwind CSS for styling my web applications. I enjoy the utility-first approach it offers for responsive design."
//     }
//   ];

//   return (
//     <div className="bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
//       <Navbar />
//       <main className="p-8">
//         <h1 className="text-5xl font-bold mb-6 text-center text-green-800 font-serif">" M y S k i l l s "</h1>
//         <div className="grid gap-4">
//           {skills.map((skill, index) => (
//             <div key={index} className="bg-white border p-4 rounded-lg shadow-md">
//               <h2 className="text-5xl font-semibold text-center">{skill.name}</h2>
//               <p className="mt-2">{skill.description}</p>
//             </div>
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }



import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Skills() {
  const skills = [
    {
      name: "JavaScript",
      description: "I have a foundational understanding of JavaScript, which allows me to write dynamic and interactive web applications."
    },
    {
      name: "React",
      description: "I have started learning React, a popular JavaScript library for building user interfaces. I understand the core concepts like components, props, and state management."
    },
    {
      name: "Next.js",
      description: "I am currently learning Next.js, which is a powerful framework built on top of React. I appreciate its features like server-side rendering and routing capabilities."
    },
    {
      name: "Tailwind CSS",
      description: "I have started using Tailwind CSS for styling my web applications. I enjoy the utility-first approach it offers for responsive design."
    }
  ];

  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <Navbar />
      <main className="p-8">
        <h1 className="text-5xl font-bold mb-6 text-center text-green-800 font-serif">
          &quot; M y S k i l l s &quot;
        </h1>
        <div className="grid gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white border p-4 rounded-lg shadow-md">
              <h2 className="text-5xl font-semibold text-center">{skill.name}</h2>
              <p className="mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
