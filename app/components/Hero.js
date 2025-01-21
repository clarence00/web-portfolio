import React from "react";
import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";
import Github from "../assets/icons/github.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import Gallery from "../assets/icons/gallery.svg";

export default function Hero() {
  return (
    <div id="about">
      <div className="h-screen top-0">
        <div className="max-w-[800px] m-auto w-full h-full flex flex-col justify-center items-start">
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
    </div>
  );
}
