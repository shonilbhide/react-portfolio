// components/Timeline.js
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUniversity, FaLaptopCode, FaProjectDiagram, FaTools, FaIndustry } from "react-icons/fa";
import { SiRedis, SiGooglecloud, SiPytorch } from "react-icons/si"; // For tech logos

export default function Timeline() {
  const timelineElements = [
    {
      id: 1,
      title: "Master of Computer Science",
      location: "North Carolina State University",
      description: "Specialized in AI, Machine Learning, and Big Data Engineering.",
      buttonText: "View Academic Details",
      date: "Aug 2023 - May 2025",
      icon: <FaUniversity />,
      logo: "/NCSU.png", // Example logo, place in public folder
      skills: ["Machine Learning", "Big Data", "AI Research"],
    },
    {
      id: 2,
      title: "Gen-AI Engineer Intern",
      location: "Frobe AI",
      description:
        "Developed scalable AI pipelines and optimized Retrieval-Augmented Generation (RAG) models using LLM fine-tuning. Integrated Redis for efficient vector database storage.",
      buttonText: "View Internship Details",
      date: "July 2024 - Sep 2024",
      icon: <FaLaptopCode />,
      logo: "/frobe-ai-logo.png", // Example logo, place in public folder
      skills: ["AI Pipelines", "LLM Fine-tuning", "Redis", "Python"],
    },
    {
      id: 3,
      title: "Analyst - Data Engineer",
      location: "Deloitte Consulting",
      description:
        "Built end-to-end CI/CD ETL pipelines using PySpark & BigQuery, optimizing tax report processing for Walmart. Designed and maintained scalable data pipelines for analytics.",
      buttonText: "View Work Experience",
      date: "Sep 2021 - July 2023",
      icon: <FaLaptopCode />,
      logo: "/Deloitte.png", // Example logo, place in public folder
      skills: ["PySpark", "BigQuery", "ETL", "Cloud Engineering"],
    },
    {
      id: 5,
      title: "Research AI/ML Intern",
      location: "Centre for Development of Advanced Computing (C-DAC) India",
      description:
        "Developed AI-driven solutions for deduplication of data based on demographic nuances. Published research in Springer's LNNS journal series and presented at WORLDS4 conference.",
      buttonText: "View Research Details",
      date: "Jan 2021 - July 2021",
      icon: <FaLaptopCode />,
      logo: "/cdac.png", // Example logo, place in public folder
      skills: ["AI Research", "Data Deduplication", "Deep Learning", "Research Publications"],
    },
    {
      id: 6,
      title: "Bachelor of Technology in Computer Science",
      location: "Maharashtra Institute of Technology, Pune",
      description: "Graduated with a GPA of 9.97/10, focusing on AI & Big Data.",
      buttonText: "View Academic Details",
      date: "Jun 2017 - Jul 2021",
      icon: <FaUniversity />,
      logo: "/MIT.png",//ample logo, place in public folder
      skills: ["AI", "Big Data", "Data Structures", "Algorithms"],
    },
  ];

  return (
    <section className="mt-24 px-6" id="timeline">
      <h2 className="text-4xl font-bold text-white text-center mb-10">My Journey</h2>

      <VerticalTimeline lineColor="#4C51BF">
        {timelineElements.map((element) => (
          <VerticalTimelineElement
            key={element.id}
            date={element.date}
            icon={element.icon}
            iconStyle={{ background: "#4A90E2", color: "#fff" }} // Customize icon style
            contentStyle={{
              background: "#1E293B", 
              color: "#fff", 
              borderRadius: "10px", 
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #1E293B" }}
            dateClassName="text-lg font-semibold text-indigo-400"
          >
            <div className="flex items-center gap-4 mb-3">
              <img src={element.logo} alt="Logo" className="w-15 h-10" />
              <h3 className="text-2xl font-semibold">{element.title}</h3>
            </div>
            <h4 className="text-lg text-gray-400">{element.location}</h4>
            <p className="text-lg text-gray-300">{element.description}</p>
            
            {/* Skills */}
            <div className="flex flex-wrap mt-4 gap-2">
              {element.skills.map((skill, idx) => (
                <span key={idx} className="bg-indigo-500 text-white text-sm font-medium py-1 px-3 rounded-full">
                  {skill}
                </span>
              ))}
            </div>

            {/* Button */}
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-500 text-lg mt-4 inline-block"
            >
              {element.buttonText}
            </a>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
