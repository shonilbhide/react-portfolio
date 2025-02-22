import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiContactsFill, RiStackFill } from "react-icons/ri";
import { MdDownload } from "react-icons/md";
import { personalData, timelineElements } from "../components/constants"; 
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import Timeline from "../components/Timeline";



export default function Home() {
  return (
    <div className="bg-[#1E293B] text-white min-h-screen p-6">
      
      {/* Home Section */}
      <div className="flex flex-col items-center justify-center">
        <Image 
          src="/profile.jpeg" // Add your image in public/ folder
          alt="Profile Picture"
          width={250} 
          height={250}
          className="rounded-full border-4 border-indigo-500 shadow-lg"
        />
        
        <h1 className="text-4xl font-bold text-center mt-4">Shonil Sateesh Bhide</h1>
        <p className="text-lg mt-4 text-gray-300 text-center">
          Software Developer | Data Engineer | AI Enthusiast
        </p>
        <p className="mt-2 text-gray-400 text-center">
          Master's in Computer Science, North Carolina State University
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-6">
          <Link href={personalData.github} target="_blank" className="transition-all text-indigo-400 hover:scale-125 duration-300">
            <BsGithub size={30} />
          </Link>
          <Link href={personalData.linkedIn} target="_blank" className="transition-all text-indigo-400 hover:scale-125 duration-300">
            <BsLinkedin size={30} />
          </Link>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
          {/* Contact Me Button */}
          <Link href="#contact" className="bg-gradient-to-r from-indigo-500 to-indigo-700 p-[1px] rounded-full transition-all duration-300 hover:from-indigo-600 hover:to-[#374151]">
            <button className="px-6 py-3 bg-[#0D1224] rounded-full text-white text-sm font-medium uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all duration-200 ease-out">
              <span>Contact Me</span>
              <RiContactsFill size={20} />
            </button>
          </Link>

          {/* View My Work Button */}
          <Link href="/projects" className="bg-gradient-to-r from-indigo-500 to-indigo-700 p-[1px] rounded-full transition-all duration-300 hover:from-indigo-600 hover:to-[#374151]">
            <button className="px-6 py-3 bg-[#0D1224] rounded-full text-white text-sm font-medium uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all duration-200 ease-out">
              <span>View My Work</span>
              <RiStackFill size={20} />
            </button>
          </Link>

          {/* Get Resume Button */}
          <Link className="flex items-center gap-2 hover:gap-4 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out hover:text-white" target="_blank" href={personalData.resume}>
            <span>View Resume</span>
            <MdDownload size={20} />
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="mt-24 px-6">
        <h2 className="text-4xl font-bold text-white-400 text-center mb-10">About Me</h2>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 max-w-6xl mx-auto">
            
            {/* Left: Text Content */}
            <div className="text-gray-300 md:w-2/3">
            <p className="leading-relaxed text-lg">
                Ever since I wrote my first <span className="text-indigo-400 font-semibold">"Hello World"</span> program, 
                I've been captivated by the power of technology to create meaningful solutions. 
                As a <span className="text-indigo-400 font-semibold">Software Developer & Data Engineer</span>, 
                I thrive on building AI-driven applications that 
                <span className="text-indigo-400 font-semibold"> blend innovation with real-world impact</span>. 
                I specialize in <span className="text-indigo-400 font-semibold">machine learning, big data processing, and scalable cloud architectures</span>.
            </p>

            <p className="leading-relaxed text-lg mt-6">
                But beyond code, I'm an <span className="text-indigo-400 font-semibold">extrovert who loves the outdoors</span>. 
                You'll often find me on <span className="text-indigo-400 font-semibold">hiking trails</span>, 
                capturing breathtaking landscapes, or playing the <span className="text-indigo-400 font-semibold">Kalimba</span>, 
                a soothing African musical instrument. Creativity fuels my passion, and I express it through 
                <span className="text-indigo-400 font-semibold"> doodling and art</span>.
            </p>
            </div>

            {/* Right: Image Grid */}
            <div className="grid grid-cols-2 gap-4 md:w-1/3">
            <Image src="/hike.jpg" width={200} height={150} alt="Hiking" className="rounded-lg shadow-lg" />
            <Image src="/hike.jpg" width={200} height={150} alt="Kalimba" className="rounded-lg shadow-lg" />
            <Image src="/hike.jpg" width={200} height={150} alt="Doodling" className="rounded-lg shadow-lg" />
            <Image src="/hike.jpg" width={200} height={150} alt="Coding Passion" className="rounded-lg shadow-lg" />
            </div>
        </div>
        </div>


        {/* Timeline Section */}
        <Timeline />
      


      {/* Contact Section */}
      <div id="contact" className="mt-16">
        <h2 className="text-3xl font-bold text-white-400 text-center">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-8">
          
          

          {/* Contact Form */}
          <form className="bg-[#2D3748] p-6 rounded-lg shadow-lg max-w-md w-full">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-[#4A5568] text-white mb-4"/>
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-[#4A5568] text-white mb-4"/>
            <textarea placeholder="Your Message" className="w-full p-3 rounded bg-[#4A5568] text-white mb-4 min-h-[100px]"></textarea>
            <button className="w-full bg-gradient-to-r from-indigo-500 to-indigo-700 py-3 rounded text-white font-bold uppercase tracking-wide hover:from-indigo-600 hover:to-[#374151] transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
