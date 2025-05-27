import React from 'react';

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      date: "Jul 2023 - May 2025",
      title: "Master of Computer Science",
      company: "North Carolina State University",
      description: "Graduated with a GPA of 4/4, Specialized in AI, Machine Learning, and Big Data Engineering.",
      skills: ["Machine Learning", "Big Data", "AI Research"],
      type: "education"
    },
    {
      id: 2,
      date: "July 2024 - Sep 2024", 
      title: "Gen-AI Engineer Intern",
      company: "Finder AI",
      description: "Developed scalable AI pipelines and optimized frontend. Augmented Generative (RAG) models using LLM fine-tuning. Integrated Redis for efficient vector database storage.",
      skills: ["AI Pipelines", "LLM Fine-tuning", "Redis", "Python"],
      type: "work"
    },
    {
      id: 3,
      date: "Sep 2023 - July 2023",
      title: "Analyst - Data Engineer", 
      company: "Deloitte Consulting",
      description: "Built end-to-end CICD ETL pipelines using PySpark & BigQuery, optimizing tax report processing for Walmart. Developed automation scripts for data analytics.",
      skills: ["PySpark", "BigQuery", "ETL", "Cloud Engineering"],
      type: "work"
    },
    {
      id: 4,
      date: "Jan 2023 - July 2023",
      title: "Research AI/ML Intern",
      company: "Centre for Development of Advanced Computing (C-DAC) India", 
      description: "Developed AI-driven solutions for deduplication of data based on demographic nuances. Published research in Springer LNNS journal series and presented at WORLDCIST conferences.",
      skills: ["AI Research", "Data Deduplication", "Deep Learning", "Research Publications"],
      type: "research"
    },
    {
      id: 5,
      date: "Jun 2017 - Jul 2021",
      title: "Bachelor of Technology in Computer Science",
      company: "Maharashtra Institute of Technology, Pune",
      description: "Graduated with a GPA of 8.97/10, focusing on AI & Big Data.",
      skills: ["AI", "Big Data", "Data Structures", "Algorithms"], 
      type: "education"
    }
  ];

  const getIcon = (type) => {
    const iconMap = {
      education: "🎓",
      work: "💼", 
      research: "🔬"
    };
    return iconMap[type] || "•";
  };

  const getIconColor = (type) => {
    const colorMap = {
      education: "bg-red-500",
      work: "bg-blue-500",
      research: "bg-green-500"
    };
    return colorMap[type] || "bg-gray-500";
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500"></div>
      
      {timelineData.map((item, index) => (
        <div key={item.id} className="relative mb-12">
          {/* Timeline dot */}
          <div className={`absolute left-6 w-4 h-4 ${getIconColor(item.type)} rounded-full border-4 border-slate-900 flex items-center justify-center text-white text-xs`}>
            {getIcon(item.type)}
          </div>
          
          {/* Content */}
          <div className="ml-16">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-blue-400 text-sm font-medium">{item.date}</span>
            </div>
            <span className="timeline-index">Step {index + 1}</span>
            <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
            {item.company && (
              <p className="text-gray-300 text-sm mb-3">{item.company}</p>
            )}
            
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {item.description}
            </p>
            
            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="px-3 py-1 bg-blue-900 text-blue-200 text-xs rounded-full border border-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
