import React from "react";

import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";
import Github from "../assets/icons/github.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import Gallery from "../assets/icons/gallery.svg";
import AboutCard from "../components/AboutCard";

function About() {
  return (
    <div className="h-screen">
      <div className="max-w-[960px] pb-20 m-auto w-full h-full flex flex-col justify-center items-start">
        {/* Name Section */}
        <div className="flex">
          <div className="w-[50%] py-4 ">
            <h2 className="text-lg">An artist and a programmer</h2>
            <h1 className="font-bold text-5xl">Hello! I&#39;m</h1>
            <h1 className="font-bold text-5xl text-primary pb-4">
              Clarence Natividad
            </h1>
            <p className="text-sm pr-4 py-4">
              I am a fresh computer engineering graduate, passionate about web
              development. I have hands-on experience with both front-end and
              back-end technologies, particularly in ReactJs and Flutter. I
              enjoy crafting and designing stuffs.
            </p>
          </div>
          {/* About Card */}
          <div className="flex flex-col justify-center items-end gap-4">
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
          </div>
        </div>

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
            <div className="flex flex-col items-center w-10 group">
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
            <div className="flex flex-col items-center w-10 group">
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
            <div className="flex flex-col items-center w-10 group">
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
            <div className="flex flex-col items-center w-10 group">
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
  );
}

export default About;
