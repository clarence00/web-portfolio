"use client";

import React, { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import projectsData from "../assets/media/projects.json";
import ProjectItem from "../components/ProjectItem";

const importAllImages = (imageFilenames) => {
  return imageFilenames.map((filename) => {
    return require(`../assets/media/${filename}`).default;
  });
};

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = projectsData.map((project) => ({
    ...project,
    images: importAllImages(project.images || []),
  }));

  const handleClick = (index) => {
    setExpandedProject(index);
  };

  const handleClose = () => {
    setExpandedProject(null);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold p-8 pt-16">Project</h1>
      <div className="flex gap-4 mx-[10%] flex-wrap">
        {projects.map((item, index) => (
          <div
            key={index}
            className="group">
            <div className="p-1 rounded-md duration-200 hover:bg-primary/[0.5] hover:scale-105">
              <div
                className="p-6 w-[320px] bg-base-300 rounded-md"
                onClick={() => handleClick(index)}>
                <ProjectItem
                  images={item.images}
                  title={item.title}
                  date={item.date}
                  caption={item.caption}
                  icons={item.icons}
                  expanded={expandedProject === index}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {expandedProject !== null && (
        <>
          <ProjectModal
            key={expandedProject}
            project={projects[expandedProject]}
            onClose={handleClose}
          />
        </>
      )}
    </div>
  );
}

export default Projects;
