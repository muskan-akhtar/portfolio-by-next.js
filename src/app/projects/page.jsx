import ProjectCard from "../components/ProjectCard";
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
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-green-800 font-serif mt-7">
        &quot; M y P r o j e c t s&quot;
      </h1>
      <main className="p-4 sm:p-8 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="w-full max-w-md">
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
              {index < projects.length - 1 && (
                <hr className="my-4 border-t border-gray-300" />
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
