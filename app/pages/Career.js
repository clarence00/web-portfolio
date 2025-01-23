import React from "react";
import Github from "../assets/icons/github.svg";
import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";
import CareerCard from "../components/CareerCard";

export default function Career() {
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
    },
  ];

  return (
    <div id="career">
      <div className="flex flex-col items-center my-8 ">
        <h1 className="text-3xl font-bold p-8">Career</h1>
        {/* Career Cards */}
        {careerData.map((data, index) => (
          <CareerCard
            key={index}
            {...data}
          />
        ))}
      </div>
    </div>
  );
}
