import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap gap-4 md:gap-8 justify-center p-4 bg-green-800 text-white z-10 relative">
      <Link href="/" className="mx-2 md:mx-4 text-sm md:text-base">Home</Link>
      <Link href="/about" className="mx-2 md:mx-4 text-sm md:text-base">About</Link>
      <Link href="/projects" className="mx-2 md:mx-4 text-sm md:text-base">Projects</Link>
      <Link href="/skills" className="mx-2 md:mx-4 text-sm md:text-base">Skills</Link>
      <Link href="/contact" className="mx-2 md:mx-4 text-sm md:text-base">Contact</Link>
    </nav>
  );
}
