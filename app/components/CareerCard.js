import React from "react";
import Icons from "./Icons";

export default function CareerCard({
  title,
  href,
  company,
  duration,
  details,
  icons,
  size,
}) {
  return (
    <div className="card card-compact w-[50%] mx-auto my-4 duration-200 hover:scale-105 hover:bg-accent/[0.1] hover:shadow-lg">
      <div className="card-body group">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between italic -mt-2">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline underline-offset-2">
            {company}
          </a>
          <h6 className="text-sm">{duration}</h6>
        </div>
        <div className="divider my-0"></div>
        <ul className="list-disc pl-8 max-h-0 text-sm opacity-0 duration-200 group-hover:opacity-100 group-hover:max-h-[100%]">
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="divider -my-2 max-h-0 opacity-0 duration-200 group-hover:opacity-100 group-hover:max-h-[100%] group-hover:my-0"></div>
        <div className="flex gap-4 px-2">
          {icons.map((icon, index) => (
            <Icons
              key={index}
              type={icon}
              size={size}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
