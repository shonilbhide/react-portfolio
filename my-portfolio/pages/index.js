import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Hi, I'm [Your Name]</h1>
      <p className="text-lg mt-4">Software Developer & Data Engineer</p>
      <Link href="/projects">
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg">
          View My Work
        </button>
      </Link>
    </div>
  );
}
