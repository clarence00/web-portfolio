"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CareerCard from "../components/CareerCard";
import TechStackCard from "../components/TechStackCard";
import careerData from "../assets/media/career.json";
import techStackData from "../assets/media/techstack.json";
import toolData from "../assets/media/tools.json";

function Experience() {
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
    <div className="h-screen">
      <div className="flex flex-col items-center mt-20">
        <div className="flex mx-[15%] justify-center gap-12">
          <div className="flex flex-col pt-16 gap-2">
            <h1 className="text-3xl font-bold mx-auto mb-4">Experience</h1>
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
