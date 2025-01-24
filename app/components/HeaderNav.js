"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HeaderNav() {
  const [active, setActive] = useState();

  const handleSetActive = (menuItem) => {
    setActive(menuItem);
  };

  const links = [
    { name: "About", path: "/" },
    { name: "Experience", path: "experience" },
    { name: "Projects", path: "projects" },
  ];

  return (
    <div className="navbar bg-base-200 shadow-lg sticky top-0 z-10 px-40">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Clarence</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {links.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={active === item.name ? "active" : ""}
                onClick={() => handleSetActive(item.name)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
