import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-8 justify-center p-4 bg-green-800 text-white">
      <Link href="/" className="mx-4">Home</Link>
      <Link href="/about" className="mx-4">About</Link>
      <Link href="/projects" className="mx-4">Projects</Link>
      <Link href="/skills" className="mx-4">Skills</Link>
      <Link href="/contact" className="mx-4">Contact</Link>
    </nav>
  );
}
