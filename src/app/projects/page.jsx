// import ProjectCard from "../../components/ProjectCard";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Shareable Resume By HTML",
//       description:
//         "This project is a modern, interactive resume created using HTML, CSS, and JavaScript. The design is both professional and user-friendly, ensuring that key information is easily accessible and visually appealing.",
//       image: "/project1.jpg",
//       link: "https://resume-hackathon-d2k8.vercel.app/",
//     },
//     {
//       title: "Quiz Website By HTML",
//       description: "The Quiz Web Application is an interactive platform designed to enhance learning through engaging quizzes. Built using HTML, CSS, and JavaScript, with the Next.js framework for server-side rendering and improved performance, this application allows users to test their knowledge on various subjects in a user-friendly environment.",
//       image: "/project2.jpg",
//       link: "https://quiz-web-project.vercel.app/",
//     },
//     {
//       title: "Nested Pages by Next.js",
//       description: "I recently completed an assignment in Next.js that focused on nested pages. The main goal of this project was to improve the website's structure and provide users with easy navigation.",
//       image: "/project3.jpg",
//       link: "https://nested-pages-assignment-moa2.vercel.app/",
//     },
//   ];

//   return (
//     <div>
//       <Navbar />
//       <h1 className="text-5xl font-bold mb-6 text-center text-green-800 font-serif mt-7">" M y P r o j e c t s"</h1>
//      <main className="p-8 flex flex-col items-center"> {/* Center content vertically */}
//         {projects.map((project, index) => (
//           <div key={project.title} className="w-full max-w-md mb-8"> {/* Control width and margin */}
//             <ProjectCard
//               title={project.title}
//               description={project.description}
//               image={project.image}
//               link={project.link}
//             />
//             {index < projects.length - 1 && ( // Add a line only between cards
//               <hr className="my-4 border-t border-gray-300" />
//             )}
//           </div>
//         ))}
//       </main>

//       <Footer />
//     </div>
//   );
// }



import ProjectCard from "../../components/ProjectCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Projects() {
  const projects = [
    {
      title: "Shareable Resume By HTML",
      description:
        "This project is a modern, interactive resume created using HTML, CSS, and JavaScript. The design is both professional and user-friendly, ensuring that key information is easily accessible and visually appealing.",
      image: "/project1.jpg",
      link: "https://resume-hackathon-d2k8.vercel.app/",
    },
    {
      title: "Quiz Website By HTML",
      description:
        "The Quiz Web Application is an interactive platform designed to enhance learning through engaging quizzes. Built using HTML, CSS, and JavaScript, with the Next.js framework for server-side rendering and improved performance, this application allows users to test their knowledge on various subjects in a user-friendly environment.",
      image: "/project2.jpg",
      link: "https://quiz-web-project.vercel.app/",
    },
    {
      title: "Nested Pages by Next.js",
      description:
        "I recently completed an assignment in Next.js that focused on nested pages. The main goal of this project was to improve the website's structure and provide users with easy navigation.",
      image: "/project3.jpg",
      link: "https://nested-pages-assignment-moa2.vercel.app/",
    },
  ];

  return (
    <div>
      <Navbar />
      <h1 className="text-5xl font-bold mb-6 text-center text-green-800 font-serif mt-7">
        &quot; M y P r o j e c t s&quot;
      </h1>
      <main className="p-8 flex flex-col items-center">
        {/* Center content vertically */}
        {projects.map((project, index) => (
          <div key={project.title} className="w-full max-w-md mb-8">
            {/* Control width and margin */}
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
            {index < projects.length - 1 && (
              // Add a line only between cards
              <hr className="my-4 border-t border-gray-300" />
            )}
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}
