import React from "react";

export default function AboutCard({
  href,
  title,
  subtitle,
  details,
  duration,
}) {
  return (
    <div className="card card-compact w-[65%] mx-auto duration-200 hover:scale-105 bg-accent/[0.1] shadow-xl ">
      <div className="card-body">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-md card-title hover:underline underline-offset-2">
          {title}
        </a>
        <div className="flex justify-between -mt-2 italic">
          <h6 className="text-sm">{subtitle}</h6>
          <h6 className="text-sm">{duration}</h6>
        </div>
        <h6 className="-mt-2 text-sm">{details}</h6>
      </div>
    </div>
  );
}
