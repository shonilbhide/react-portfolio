import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/education">Education</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
