import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Smart Banking Customer Analysis",
      description: "Analyzed 70,000 bank customer profiles to help the bank understand which customers would be interested in term deposits. Created visual dashboards and built a smart prediction system that could accurately identify potential customers 87% of the time, helping the bank target their marketing efforts more effectively.",
      technologies: ["Data Analysis", "Machine Learning", "Business Intelligence", "Customer Analytics"],
      category: "Business Analytics",
      role: "Data Analyst",
      logo: "/Deloitte.png",
      impact: "87% accuracy in predicting customer interest",
      image: "/project1.jpg"
    },
    {
      id: 2,
      title: "Early Disease Detection in Dogs",
      description: "Developed a smart system to detect early signs of arthritis in dogs by analyzing their walking patterns on special pressure-sensitive walkways, in collaboration with NC State Vet School. The system uses advanced AI to spot subtle changes that veterinarians might miss, achieving 92% accuracy in early detection and potentially helping dogs get treatment sooner.",
      technologies: ["Artificial Intelligence", "Medical Technology", "Pattern Recognition", "Veterinary Science"],
      githubLink: "https://github.com/shonilbhide/Early-Detection-of-Osteoarthritis-in-Young-Dogs",
      category: "Healthcare AI",
      role: "AI Research Engineer",
      impact: "92% accuracy in early arthritis detection",
      image: "/project2.jpg",
      logo: "/NCSU.png",
      collaboration: "NC State Vet School"
    },
    {
      id: 3,
      title: "Skill-Share Learning Platform",
      description: "Led a team to build a platform where people can share their skills and learn from others. Think of it like a matchmaking service for learning - if you want to learn guitar and someone wants to learn coding, the platform connects you. Built the entire system from scratch during a hackathon competition.",
      technologies: ["Web Development", "Database Design", "User Experience", "Team Leadership", "Human-Computer Interaction"],
      githubLink: "https://github.com/shonilbhide/skill_share",
      liveLink: "https://devpost.com/software/skillshare-0gdsj3?_gl=1*u3uqsp*_gcl_au*NTQ0OTEyNDA5LjE3NDgzMDMyMjc.*_ga*NDM3MjA5MjEyLjE3NDgzMDMyMjc.*_ga_0YHJK3Y10M*czE3NDgzMDMyMjckbzEkZzEkdDE3NDgzMDMyMzMkajAkbDAkaDA",
      category: "Social Platform",
      role: "Team Lead & Full Stack Developer",
      impact: "Connected learners with mentors efficiently",
      image: "/project3.jpg"
    },
    {
      id: 4,
      title: "CI Optimization for Open Source GitHub Repos",
      description: "Created a smart system that dramatically speeds up software testing by remembering which tests failed before and running those first. Instead of running all tests for 30+ minutes every time, the system now completes in just 2-4 minutes by focusing on the most likely problems first. The method was tested on the actual pytest-dev repository and the results are from that repo.",
      technologies: ["Software Testing", "Automation", "Process Optimization", "DevOps"],
      githubLink: "https://github.com/shonilbhide/pytest",
      category: "Software Efficiency",
      role: "Software Engineer",
      impact: "90% reduction in testing time (30+ min to 2-4 min)",
      image: "/project4.png"
    },
    {
      id: 5,
      title: "Emotion Recognition from Voice",
      description: "Developed a system that can detect emotions (happy, sad, angry, etc.) from someone's voice, similar to how humans can tell when someone is upset just by hearing them speak. The system achieved 68% accuracy in identifying emotions and could be used to improve customer service or help people with communication difficulties.",
      technologies: ["Voice Analysis", "Emotion AI", "Audio Processing", "Machine Learning"],
      githubLink: "https://github.com/shonilbhide/Speech_Emotion_Recognition",
      category: "Human-Computer Interaction",
      role: "AI Research Engineer",
      impact: "68% accuracy in voice emotion detection",
      image: "/project5.png"
    },
    {
      id: 6,
      title: "Wolf Track 5.0 - Job Application Management System",
      description: "Developed a comprehensive job application management system using Python (Flask) with a user-friendly interface featuring dynamic job tables, search functionality, and resume upload. Built a Job Skills Extractor using Natural Language Processing to automate data extraction from resumes. Implemented REST APIs for real-time interaction and MySQL database with full CRUD operations.",
      technologies: ["Python", "JavaScript", "SQLite", "Flask", "Natural Language Processing"],
      githubLink: "https://github.com/shonilbhide/WolfTrack5.0",
      category: "Full Stack Development",
      role: "Full Stack Developer",
      impact: "Automated resume processing with NLP integration",
      image: "/project6.png"
    },
    {
      id: 7,
      title: "GraphCine: GNN-Powered Movie Recommendation Engine",
      description: "Built an intelligent movie recommendation system using Graph Neural Networks (GNNs) that suggests films you'll actually want to watch. Unlike simple systems that just look at ratings, this one understands complex relationships between movies, actors, and viewer preferences using advanced graph technology. Achieved RMSE of 0.912 and MAE of 0.760, significantly outperforming traditional collaborative filtering methods.",
      technologies: ["Graph Neural Networks", "PyTorch", "Machine Learning", "Data Science"],
      githubLink: "https://github.com/shonilbhide/Movie-Recommendation-GCN",
      category: "Entertainment AI",
      role: "AI Developer",
      impact: "RMSE: 0.912, MAE: 0.760 - Superior to traditional methods",
      image: "/project7.png"
    }
  ];

  const getCategoryColor = (category) => {
    const colorMap = {
      "Business Analytics": "bg-purple-900 text-purple-200 border-purple-700",
      "Healthcare AI": "bg-blue-900 text-blue-200 border-blue-700",
      "Social Platform": "bg-green-900 text-green-200 border-green-700",
      "Software Efficiency": "bg-orange-900 text-orange-200 border-orange-700",
      "Entertainment AI": "bg-red-900 text-red-200 border-red-700",
      "Human-Computer Interaction": "bg-indigo-900 text-indigo-200 border-indigo-700",
      "Full Stack Development": "bg-teal-900 text-teal-200 border-teal-700",
    };
    return colorMap[category] || "bg-gray-900 text-gray-200 border-gray-700";
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="bg-slate-800 rounded-lg border border-slate-700 p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
          >
            {/* Project Image */}
            {project.image && (
              <div className="mb-4">
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            )}

            {/* Project Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className={`px-2 py-1 text-xs rounded-full border ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
              </div>
              <div className="flex space-x-2">
                {/* Company/Institution Logo instead of GitHub for certain projects */}
                {project.logo && (
                  <div className="flex items-center">
                    <img 
                      src={project.logo} 
                      alt={`${project.company || project.collaboration} logo`}
                      className="w-20 h-10 rounded object-contain"
                    />
                  </div>
                )}
                {/* GitHub Link */}
                {project.githubLink && !project.logo && (
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
                {/* Live Demo Link */}
                {project.liveLink && (
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Project Title and Role */}
            <h3 className="text-white text-lg font-bold mb-2">
              {project.title}
            </h3>
            <p className="text-blue-400 text-sm mb-3 font-medium">
              {project.role}
            </p>

            {/* Project Description */}
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Impact/Results */}
            {project.impact && (
              <div className="mb-4 p-2 bg-green-900/20 border border-green-700 rounded">
                <p className="text-green-300 text-xs font-medium">
                  <span className="text-green-400">🎯 Result:</span> {project.impact}
                </p>
              </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded border border-slate-600"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded border border-slate-600">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-xs py-2 px-3 rounded transition-colors text-center"
                >
                  View Code
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-xs py-2 px-3 rounded transition-colors text-center"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
