"use client";

import React, { useState, useEffect } from "react";
import Icons from "./Icons";

export default function TechStackCard({ techData }) {
  const [pointerEnabled, setPointerEnabled] = useState();

  useEffect(() => {
    setPointerEnabled(false);
    const timer = setTimeout(() => {
      setPointerEnabled(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`card-body flex flex-row gap-4 flex-wrap mx-auto  ${
        pointerEnabled ? "pointer-events-auto" : "pointer-events-none"
      }`}>
      {techData.map((data, index) => (
        <Icons
          key={index}
          className="p-7 bg-base-300 rounded-md duration-200 hover:scale-105 hover:border-2 hover:border-white/[0.1]"
          type={data.icon}
          size="36px"
          position="translate-y-9"
        />
      ))}
    </div>
  );
}
