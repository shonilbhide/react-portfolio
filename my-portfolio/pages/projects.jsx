import ProjectCard from "../components/ProjectCard";
import { Projects } from "../components/constants";
import React from "react";

const ProjectsPage = () => {
  return (
    <div>
      <h1>Projects</h1>
      {Projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
