"use client";
import React, { useState } from "react";

export default function HeaderNav() {
  const [active, setActive] = useState("About");

  const handleSetActive = (menuItem) => {
    setActive(menuItem);
  };

  return (
    <div className="navbar bg-base-200 shadow-lg sticky top-0">
      <div className="flex-1 px-8">
        <a className="btn btn-ghost text-xl">Clarence</a>
      </div>
      <div className="flex-none px-8">
        <ul className="menu menu-horizontal bg-base-200 px-1">
          {["About", "Career", "Skills", "Projects"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={active === item ? "active" : ""}
                onClick={() => handleSetActive(item)}>
                {" "}
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
