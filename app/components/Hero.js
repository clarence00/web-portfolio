import React from "react";
import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";
import Github from "../assets/icons/github.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import Gallery from "../assets/icons/gallery.svg";
import AboutCard from "../ui/AboutCard";

export default function Hero() {
  return (
    <div id="about">
      <div className="mb-20">
        <div className="h-screen top-0">
          <div className="max-w-[800px] pb-16 m-auto w-full h-full flex flex-col justify-center items-start">
            {/* Name Section */}
            <h1 className=" font-bold text-5xl">
              Hi! I&#39;m Clarence Natividad
            </h1>
            <h2 className="text-3xl">An artist and a programmer</h2>
            {/* Logo Icon Section*/}
            <div className="flex mt-4 gap-4">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer">
                <div className="flex flex-col items-center w-10  group">
                  <Facebook
                    className="duration-200 ease-in group-hover:-translate-y-2 group-hover:scale-110 group-hover:fill-accent fill-base-content"
                    style={{ width: "32px", height: "32px" }}
                  />
                  <div className="text-xs font-bold rounded-lg opacity-0 px-1.5 py-0.5 text-customBlue-100 top-full whitespace-nowrap group-hover:text-accent group-hover:opacity-100">
                    Facebook
                  </div>
                </div>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer">
                <div className="flex flex-col items-center w-10  group">
                  <Instagram
                    className="duration-200 ease-in group-hover:-translate-y-2 group-hover:scale-110 group-hover:fill-accent fill-base-content"
                    style={{ width: "32px", height: "32px" }}
                  />
                  <div className="text-xs font-bold rounded-lg opacity-0 px-1.5 py-0.5 text-customBlue-100 top-full whitespace-nowrap group-hover:text-accent group-hover:opacity-100">
                    Instagram
                  </div>
                </div>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer">
                <div className="flex flex-col items-center w-10  group">
                  <Github
                    className="duration-200 ease-in group-hover:-translate-y-2 group-hover:scale-110 group-hover:fill-accent fill-base-content"
                    style={{ width: "32px", height: "32px" }}
                  />
                  <div className="text-xs font-bold rounded-lg opacity-0 px-1.5 py-0.5 text-customBlue-100 top-full whitespace-nowrap group-hover:text-accent group-hover:opacity-100">
                    Github
                  </div>
                </div>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer">
                <div className="flex flex-col items-center w-10  group">
                  <LinkedIn
                    className="duration-200 ease-in group-hover:-translate-y-2 group-hover:scale-110 group-hover:fill-accent fill-base-content"
                    style={{ width: "32px", height: "32px" }}
                  />
                  <div className="text-xs font-bold rounded-lg opacity-0 px-1.5 py-0.5 text-customBlue-100 top-full whitespace-nowrap group-hover:text-accent group-hover:opacity-100">
                    LinkedIn
                  </div>
                </div>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer">
                <div className="flex flex-col items-center w-10  group">
                  <Gallery
                    className="duration-200 ease-in group-hover:-translate-y-2 group-hover:scale-110 group-hover:fill-accent fill-base-content"
                    style={{ width: "32px", height: "32px" }}
                  />
                  <div className="text-xs font-bold rounded-lg opacity-0 px-1.5 py-0.5 text-customBlue-100 top-full whitespace-nowrap group-hover:text-accent group-hover:opacity-100">
                    Art Portfolio
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* About Card */}
        <div className="flex flex-col items-center">
          <div className="w-[50%] p-4 mb-4">
            <h1 className="font-bold text-3xl pb-2">About Me</h1>
            <p>
              I am a fresh computer engineering graduate, passionate about web
              development. I have hands-on experience with both front-end and
              back-end technologies, particularly in ReactJs and Flutter. I’ve
              also led the development of 2 mobile games and designed assets and
              wireframes for both desktops and mobile platforms in our projects.
            </p>
          </div>
          <div className="m-auto divider w-[70%]"></div>
        </div>
        <AboutCard
          href="https://www.pup.edu.ph/"
          title="Polytechnic University of the Philippines"
          subtitle="College"
          duration="2020 - 2024"
          details="Bachelor of Science in Computer Engineering, Specializing in System
            Development"
        />
        <AboutCard
          href="https://www.rhspasig.com/"
          title="Rizal High School"
          subtitle="Senior High"
          duration="2018 - 2020"
          details="Arts and Design"
        />
        <div className="m-auto divider w-[70%]"></div>
      </div>
    </div>
  );
}
