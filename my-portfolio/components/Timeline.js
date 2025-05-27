// components/Timeline.js

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUniversity, FaLaptopCode, FaProjectDiagram, FaTools, FaIndustry } from "react-icons/fa";
import { SiRedis, SiGooglecloud, SiPytorch } from "react-icons/si";

export default function Timeline() {
  const timelineElements = [
    {
      id: 1,
      title: "Master of Computer Science",
      location: "North Carolina State University",
      description: "Graduated with a GPA of 4/4, Specialized in AI, Machine Learning, and Big Data Engineering.",
      buttonText: "View Academic Details",
      date: "Aug 2023 - May 2025",
      icon: <FaUniversity />,
      logo: "/NCSU.png",
      skills: ["Machine Learning", "Big Data", "AI Research"],
      type: "education"
    },
    {
      id: 2,
      title: "Gen-AI Engineer Intern",
      location: "Frobe AI",
      description: "Developed scalable AI pipelines and optimized Retrieval-Augmented Generation (RAG) models using LLM fine-tuning. Integrated Redis for efficient vector database storage.",
      buttonText: "View Internship Details",
      date: "July 2024 - Sep 2024",
      icon: <FaLaptopCode />,
      logo: "/frobe-ai-logo.png",
      skills: ["AI Pipelines", "LLM Fine-tuning", "Redis", "Python"],
      type: "work"
    },
    {
      id: 3,
      title: "Analyst - Data Engineer",
      location: "Deloitte Consulting",
      description: "Built end-to-end CI/CD ETL pipelines using PySpark & BigQuery, optimizing tax report processing for Walmart. Designed and maintained scalable data pipelines for analytics."+"\n\n"+"Built and maintained AWS Glue jobs for Vanguard's cloud migration, processing 20M+ daily trades and automating validation workflows, while configuring AWS services (EC2, S3, SQS, Step Functions, CloudFormation, DynamoDB, Aurora) to enhance security, monitoring, and scalability.",
      buttonText: "View Work Experience",
      date: "Sep 2021 - July 2023",
      icon: <FaIndustry />,
      logo: "/Deloitte.png",
      skills: ["PySpark", "BigQuery", "ETL", "Cloud Engineering"],
      type: "work"
    },
    {
      id: 5,
      title: "Research AI/ML Intern",
      location: "Centre for Development of Advanced Computing (C-DAC) India",
      description: "Developed AI-driven solutions for deduplication of data based on demographic nuances. Published research in Springer's LNNS journal series and presented at WORLDS4 conference.",
      buttonText: "View Research Details",
      date: "Jan 2021 - July 2021",
      icon: <FaProjectDiagram />,
      logo: "/cdac2.png",
      skills: ["AI Research", "Data Deduplication", "Deep Learning", "Research Publications"],
      type: "work"
    },
    {
      id: 6,
      title: "Bachelor of Technology in Computer Science",
      location: "Maharashtra Institute of Technology, Pune",
      description: "Graduated with a GPA of 9.97/10, focusing on AI & Big Data.",
      buttonText: "View Academic Details",
      date: "Jun 2017 - Jul 2021",
      icon: <FaUniversity />,
      logo: "/MIT.png",
      skills: ["AI", "Big Data", "Data Structures", "Algorithms"],
      type: "education"
    },
  ];

  return (
    <div className="timeline-container">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        My Journey
      </h2>
      
      <VerticalTimeline>
        {timelineElements.map((element) => (
          <VerticalTimelineElement
            key={element.id}
            date={element.date}
            iconStyle={{ 
              background: 'rgb(33, 150, 243)', 
              color: '#fff',
              border: '3px solid #fff'
            }}
            icon={element.icon}
            contentStyle={{
              background: '#1e293b',
              color: '#fff',
              border: '1px solid #334155',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            contentArrowStyle={{
              borderRight: '7px solid #1e293b'
            }}
          >
            {/* Company/University Logo */}
            {element.logo && (
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '12px' 
              }}>
                <img 
                  src={element.logo} 
                  alt={`${element.location} logo`}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '8px',
                    marginRight: '12px',
                    objectFit: 'contain'
                  }}
                />
                <div>
                  <h3 className="vertical-timeline-element-title" style={{ 
                    color: '#fff', 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold',
                    margin: '0'
                  }}>
                    {element.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle" style={{ 
                    color: '#94a3b8', 
                    fontSize: '1rem',
                    margin: '4px 0 0 0'
                  }}>
                    {element.location}
                  </h4>
                </div>
              </div>
            )}

            <p style={{ 
              color: '#cbd5e1', 
              fontSize: '0.875rem', 
              lineHeight: '1.5', 
              marginBottom: '16px' 
            }}>
              {element.description}
            </p>

            {/* Skills */}
            <div className="skills-container" style={{ marginBottom: '16px' }}>
              {element.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="skill-tag"
                  style={{
                    background: '#3b82f6',
                    color: '#fff',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    marginRight: '6px',
                    marginBottom: '4px',
                    display: 'inline-block',
                    fontWeight: '500'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Button - Only show for work experience */}
            {element.type === "work" && element.buttonText && (
              <a
                href="https://www.linkedin.com/in/shonilbhide/details/experience/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#3b82f6',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '12px',
                  fontWeight: '500',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.target.style.background = '#2563eb'}
                onMouseOut={(e) => e.target.style.background = '#3b82f6'}
              >
                {element.buttonText}
              </a>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <style jsx>{`

        
        :global(.vertical-timeline-element-content) {
          background: #1e293b !important;
          color: #fff !important;
          border: 1px solid #334155 !important;
        }
        
        :global(.vertical-timeline-element-content-arrow) {
          border-right: 7px solid #1e293b !important;
        }
        
        :global(.vertical-timeline-element-date) {
          color: #94a3b8 !important;
        }
        
        :global(.vertical-timeline::before) {
          background: #334155 !important;
        }
      `}</style>
    </div>
  );
}
