import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center font-serif text-white bg-green-800 p-4">
          About Me
        </h1>
        <p className="mt-4 text-center text-sm sm:text-base">
          &quot;I&apos;m a passionate beginner in the field of web development,
          <br />
          <br />
          driven by my commitment to continuous learning and growth.
          <br />
          <br />
          My journey started in 2023 with GIAIC, where I took my first steps
          into the exciting world of coding.
          <br />
          <br />
          Since then, I&apos;ve been working diligently on my initial projects,
          putting in my best effort to sharpen my skills and turn my ideas into
          reality.
          <br />
          <br />
          Each project is a new opportunity to learn, evolve, and bring
          creativity to life.
          <br />
          <br />
          As I move forward, I&apos;m eager to explore new technologies, challenge
          myself, and keep pushing the boundaries of what I can create.
          <br />
          <br />
          My goal is to keep growing as a developer, one project at a time, with
          dedication and determination.&quot;
        </p>

        <br />

        <h1 className="text-3xl sm:text-4xl font-bold text-center font-serif text-white bg-green-800 p-4">
          Expertise
        </h1>

        <p className="mt-4 text-center text-sm sm:text-base">
          &quot;I&apos;m Learning Currently, I am focusing on mastering [&quot;HTML, CSS, and
          JavaScript&quot;].
          <br />
          <br />
          I am excited to explore frameworks like &quot;React or Next.js&quot;.
          <br />
          <br />
          In addition to my technical skills, I am also developing my leadership abilities
          <br />
          <br />
          by collaborating with peers on projects and guiding discussions in team settings.
          <br />
          <br />
          I believe that effective communication is crucial in any development environment, 
          <br />
          <br />
          and I am honing my skills to convey ideas clearly and listen actively to others.&quot;
        </p>

        <br />

        <h1 className="text-3xl sm:text-4xl font-bold text-center font-serif text-white bg-green-800 p-4">
          My Passion for Coding
        </h1>

        <p className="mt-4 text-center text-sm sm:text-base">
          &quot;From a young age, I&apos;ve been captivated by technology and its
          potential to transform lives.
          <br />
          <br />
          This fascination has driven me to dive deep into the world of web
          development.
          <br />
          <br />
          Each line of code is a step closer to turning my ideas into functional
          applications
          <br />
          <br />
          that can positively impact others.&quot;
        </p>
      </main>
      <Footer />
    </div>
  );
}
