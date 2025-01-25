"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Icons from "./Icons";
import Link from "next/link";

export default function ProjectModal({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    document
      .getElementById(`item${index + 1}`)
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % project.images.length);
      document
        .getElementById(
          `item${((activeIndex + 1) % project.images.length) + 1}`
        )
        .scrollIntoView({ behavior: "smooth" });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div>
      <div
        className="w-screen h-screen z-10 bg-primary-content fixed inset-0 bg-opacity-70"
        onClick={handleBackdropClick}>
        <div className="w-[70%] h-[55%] flex rounded-lg bg-base-200 shadow-black shadow-lg fixed inset-y-[22%] inset-x-[14%]">
          <div className="flex pt-4 pb-8 px-6 gap-4 items-center">
            <div className="h-full w-full flex justify-center items-center rounded-md bg-black">
              <div className="carousel">
                {project.images.map((item, index) => (
                  <div
                    key={index}
                    id={`item${index + 1}`}
                    className="carousel-item w-full">
                    <Image
                      src={item}
                      alt={`Carousel item ${index + 1}`}
                      className="object-contain w-full h-80"
                    />
                  </div>
                ))}
              </div>
              <div className="flex absolute translate-y-40 w-full justify-center gap-2 py-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleButtonClick(index)}
                    className={`w-2 h-2 btn-circle duration-100 bg-neutral-content hover:bg-gray-500 border-none ${
                      activeIndex === index ? "scale-125 bg-gray-500" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between h-full w-[50%]">
              <div>
                <div className="flex justify-between">
                  <h1 className="text-md font-bold">{project.title}</h1>
                  <h1 className="text-md">{project.date}</h1>
                </div>
                <h2 className="text-xs mt-2">{project.details}</h2>
              </div>
              <div className="pb-4">
                <h2 className="text-sm italic">
                  Link:{" "}
                  <Link
                    href="#"
                    className="text-sm italic text-primary">
                    {project.website}
                  </Link>
                </h2>
                <div className="divider -my-0"></div>
                <div className="flex gap-2 flex-wrap">
                  {project.icons.map((icon, index) => (
                    <Icons
                      key={index}
                      type={icon}
                      size="22px"
                      position="translate-y-6"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
