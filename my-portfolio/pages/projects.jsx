import ProjectCard from "../components/ProjectCard";
import { Projects } from "../components/constants"; // Ensure correct file path
import React from "react";

const ProjectsPage = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="w-screen min-h-screen flex items-center justify-center bg-center bg-cover p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
