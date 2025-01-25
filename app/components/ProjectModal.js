import Image from "next/image";
import React from "react";
import Icons from "./Icons";
import Link from "next/link";

export default function ProjectModal({ project, onClose }) {
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
        <div className="w-[60%] h-[50%] flex rounded-lg bg-base-200 shadow-black shadow-lg fixed inset-y-[25%] inset-x-[20%]">
          <div className="flex py-4 px-6 gap-4 items-center">
            <div className="h-full w-full flex justify-center items-center rounded-md bg-black">
              <Image
                src={project.images[0]}
                alt="#"
                className="object-contain w-full h-96"
              />
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
                      size="20px"
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
