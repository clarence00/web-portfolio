import React from "react";
import Image from "next/image";
import Icons from "./Icons";

export default function ProjectItem({ images, title, date, caption, icons }) {
  return (
    <>
      <Image
        src={images[0]}
        alt=" "
      />
      <div className="flex justify-between mt-2">
        <h1 className="text-md font-bold">{title}</h1>
        <h1 className="text-md">{date}</h1>
      </div>
      <h2 className="text-xs mt-1">{caption}</h2>
      <div className="flex mt-4 gap-2 flex-wrap">
        {icons.map((icon, index) => (
          <Icons
            key={index}
            type={icon}
            size="24px"
            position="translate-y-6"
          />
        ))}
      </div>
    </>
  );
}
