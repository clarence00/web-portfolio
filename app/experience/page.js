"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CareerCard from "../components/CareerCard";
import TechStackCard from "../components/TechStackCard";

function Experience() {
  const careerData = [
    {
      title: "Full Stack Developer Intern",
      href: "",
      company: "Achieve Without Borders, Inc.",
      duration: "Aug 2023 - Oct 2023",
      details: [
        "Collaborated with a team to fix bugs and conduct quality assurance for the web application using ReactJS and Firebase before transitioning to the Odoo custom module project.",
        "Developed custom module application for Odoo V16, including creating admin manual documentation and conducting benchmark tests.",
        "Followed Scrum methodology, participating in daily stand-up meetings.",
        "Assigned and documented tickets for project-related tasks and issues.",
      ],
      icons: [
        "react",
        "python",
        "nodejs",
        "tailwindcss",
        "firebase",
        "postgresql",
        "odoo",
        "vscode",
        "git",
      ],
      size: "24px",
      position: "translate-y-6",
    },
    {
      title: "Graphic Designer and Digital Marketing Intern",
      href: "",
      company: "I-Map Websolutions, Inc.",
      duration: "Aug 2022 - Oct 2022",
      details: [
        "Collaborated with a team to design ad posters and promotional materials for an e-commerce platform",
        "Managed company files to ensure smooth business operations.",
        "Worked with Adobe Photoshop, and Canva.",
      ],
      icons: ["canva", "photoshop"],
      size: "24px",
      position: "translate-y-6",
    },
  ];

  const techStackData = [
    { icon: "nextjs" },
    { icon: "react" },
    { icon: "javascript" },
    { icon: "nodejs" },
    { icon: "html" },
    { icon: "tailwindcss" },
    { icon: "sass" },
    { icon: "css" },
    { icon: "flutter" },
    { icon: "dart" },
    { icon: "python" },
    { icon: "django" },
    { icon: "csharp" },
    { icon: "firebase" },
    { icon: "mysql" },
    { icon: "postgresql" },
  ];

  const toolData = [
    { icon: "vscode" },
    { icon: "figma" },
    { icon: "canva" },
    { icon: "git" },
    { icon: "github" },
    { icon: "photoshop" },
    { icon: "unity" },
  ];

  const [active, setActive] = useState("Career");

  const handleSetActive = (menuItem) => {
    setActive(menuItem);
  };

  const links = [
    { name: "Career", path: "experience" },
    { name: "Tech Stacks", path: "techStacks" },
    { name: "Tools", path: "tools" },
  ];

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold p-8">Experience</h1>
        <div className="flex mx-[15%] justify-center gap-12">
          <div className="flex flex-col pt-20 gap-2">
            {links.map((item) => (
              <button
                key={item.name}
                className={`${
                  active === item.name ? "btn-active text-primary-content" : ""
                } h-12 w-64 text-sm font-medium border border-accent btn-outline b text-accent rounded-2xl btn-accent`}
                onClick={() => handleSetActive(item.name)}>
                {item.name}
              </button>
            ))}
          </div>
          <div className="w-[600px]">
            <AnimatePresence exitBeforeEnter>
              {active === "Career" && (
                <motion.div
                  key="Career"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}>
                  {careerData.map((data, index) => (
                    <CareerCard
                      key={index}
                      {...data}
                    />
                  ))}
                </motion.div>
              )}
              {active === "Tech Stacks" && (
                <motion.div
                  key="Tech Stacks"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}>
                  <TechStackCard techData={techStackData} />
                </motion.div>
              )}
              {active === "Tools" && (
                <motion.div
                  key="Tools"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}>
                  <TechStackCard techData={toolData} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
