import React from "react";
import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";
import Github from "../assets/icons/github.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import Gallery from "../assets/icons/gallery.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="flex">
        <Facebook
          className="hover:scale-150"
          style={{ width: "40px", height: "40px", fill: "white" }}
        />
        <Instagram
          className="hover:scale-150"
          style={{ width: "40px", height: "40px", fill: "white" }}
        />
        <Github
          className="hover:scale-150"
          style={{ width: "40px", height: "40px", fill: "white" }}
        />
        <LinkedIn
          className="hover:scale-150"
          style={{ width: "40px", height: "40px", fill: "white" }}
        />
        <Gallery
          className="hover:scale-150"
          style={{ width: "40px", height: "40px", fill: "white" }}
        />
      </div>
    </div>
  );
}
