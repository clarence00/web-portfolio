import React from "react";
import Github from "../assets/icons/github.svg";
import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";

export default function Career() {
  return (
    <div id="career">
      <div className="flex flex-col items-center my-8">
        <h1 className="text-3xl font-bold p-8">Career</h1>
        {/* Career Cards */}
        <div className="card card-compact w-[50%] mx-auto my-4 duration-200 hover:scale-105 hover:bg-accent/[0.1] hover:shadow-xl">
          <div className="card-body group">
            <h2 className="card-title">Full Stack Developer</h2>
            <div className="flex justify-between italic -mt-2">
              <h6 className="text-sm">Achieve Without Borders, Inc.</h6>
              <h6 className="text-sm">Aug 2023 - Oct 2023</h6>
            </div>
            <div className="divider my-0"></div>
            <ul className="list-disc pl-8 max-h-0 text-sm opacity-0 duration-200 group-hover:opacity-100 group-hover:max-h-[100%] ">
              <li>
                Collaborated with a team to fixed bugs and conducted quality
                assurance for the web application using ReactJS and Firebase
                before transitioning to the Odoo custom module project.
              </li>
              <li>
                Developed custom module application for Odoo V16, including
                creating admin manual documentation and conducting benchmark
                tests.
              </li>
              <li>
                Followed Scrum methodology, participating in daily stand-up
                meetings.
              </li>
              <li>
                Assigned and documented tickets for project-related tasks and
                issues.
              </li>
            </ul>
            <div className="divider -my-2 max-h-0 opacity-0 duration-200 group-hover:opacity-100 group-hover:max-h-[100%] group-hover:my-0"></div>

            <div className="flex gap-4 px-2">
              <div className="relative flex flex-col items-center group/icon">
                <Github
                  className="duration-100 ease-in group-hover/icon:-translate-y-2 group-hover/icon:scale-110 group-hover/icon:fill-accent fill-base-content"
                  style={{ width: "20px", height: "20px" }}
                />
                <div className="absolute text-xs font-bold rounded-lg opacity-0 px-1.5 py-0.5  top-full whitespace-nowrap group-hover/icon:bg-accent group-hover/icon:text-neutral-content group-hover/icon:opacity-100">
                  Github
                </div>
              </div>
              <div className="relative flex flex-col items-center group/icon">
                <Instagram
                  className="duration-100 ease-in group-hover/icon:-translate-y-2 group-hover/icon:scale-110 group-hover/icon:fill-accent fill-base-content"
                  style={{ width: "20px", height: "20px" }}
                />
                <div className="absolute text-xs font-bold rounded-lg opacity-0 px-1.5 py-0.5 top-full whitespace-nowrap group-hover/icon:bg-accent group-hover/icon:text-neutral-content group-hover/icon:opacity-100">
                  Instagram
                </div>
              </div>
              <div className="relative flex flex-col items-center group/icon">
                <Facebook
                  className="duration-100 ease-in group-hover/icon:-translate-y-2 group-hover/icon:scale-110 group-hover/icon:fill-accent fill-base-content"
                  style={{ width: "20px", height: "20px" }}
                />
                <div className="absolute text-xs font-bold rounded-lg opacity-0 px-1.5 py-0.5 top-full whitespace-nowrap group-hover/icon:bg-accent group-hover/icon:text-neutral-content group-hover/icon:opacity-100">
                  Facebook
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
