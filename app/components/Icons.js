import React from "react";

export default function Icons({ type, size, position, className }) {
  const iconMap = {
    androidstudio: require("../assets/icons/androidstudio.svg").default,
    canva: require("../assets/icons/canva.svg").default,
    csharp: require("../assets/icons/csharp.svg").default,
    css: require("../assets/icons/css.svg").default,
    dart: require("../assets/icons/dart.svg").default,
    django: require("../assets/icons/django.svg").default,
    facebook: require("../assets/icons/facebook.svg").default,
    figma: require("../assets/icons/figma.svg").default,
    firebase: require("../assets/icons/firebase.svg").default,
    flutter: require("../assets/icons/flutter.svg").default,
    gallery: require("../assets/icons/gallery.svg").default,
    git: require("../assets/icons/git.svg").default,
    github: require("../assets/icons/github.svg").default,
    html: require("../assets/icons/html.svg").default,
    instagram: require("../assets/icons/instagram.svg").default,
    javascript: require("../assets/icons/javascript.svg").default,
    linkedin: require("../assets/icons/linkedin.svg").default,
    mysql: require("../assets/icons/mysql.svg").default,
    nextjs: require("../assets/icons/nextjs.svg").default,
    nodejs: require("../assets/icons/nodejs.svg").default,
    odoo: require("../assets/icons/odoo.svg").default,
    photoshop: require("../assets/icons/photoshop.svg").default,
    postgresql: require("../assets/icons/postgresql.svg").default,
    python: require("../assets/icons/python.svg").default,
    react: require("../assets/icons/react.svg").default,
    sass: require("../assets/icons/sass.svg").default,
    sqlite: require("../assets/icons/sqlite.svg").default,
    tailwindcss: require("../assets/icons/tailwindcss.svg").default,
    unity: require("../assets/icons/unity.svg").default,
    vscode: require("../assets/icons/vscode.svg").default,
  };

  const badgeColorMap = {
    androidstudio: "bg-customGreen",
    canva: "bg-customBlue-light",
    csharp: "bg-customViolet",
    css: "bg-customBlue-dark",
    dart: "bg-customBlue-light",
    django: "bg-customBreen",
    facebook: "bg-customBlue",
    figma: "bg-customOrange",
    firebase: "bg-customYellow",
    flutter: "bg-customBlue-light",
    git: "bg-customOrange",
    github: "bg-gray-600",
    html: "bg-customOrange",
    instagram: "bg-customPink",
    javascript: "bg-customYellow",
    linkedin: "bg-customBlue",
    mysql: "bg-customBlue-dark",
    nextjs: "bg-customGreen",
    nodejs: "bg-customGreen",
    odoo: "bg-customViolet",
    photoshop: "bg-customBlue-light",
    postgresql: "bg-customBlue-light",
    python: "bg-customBlue-dark",
    react: "bg-customBlue-light",
    sass: "bg-customPink",
    sqlite: "bg-customBlue",
    tailwindcss: "bg-customBlue-light",
    unity: "bg-gray-600",
    vscode: "bg-customBlue-light",
  };

  const Icon = iconMap[type];
  const badgeColor = badgeColorMap[type] || "bg-neutral";

  return (
    <div className={`flex flex-col items-center group/icon ${className}`}>
      <Icon
        className={`duration-100 ease-in group-hover/icon:-translate-y-2 group-hover/icon:scale-110`}
        style={{ width: size, height: size }}
      />
      <span
        className={`absolute ${position} text-xs font-bold rounded-lg opacity-0 px-1.5 py-0.5  whitespace-nowrap group-hover/icon:text-white group-hover/icon:opacity-100 ${badgeColor}`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    </div>
  );
}

// for Career translate-y-6
// for TechStacks translate-y-10
