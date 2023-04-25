import React from "react";
import Image from "next/image";
import netflixLogo from "../public/Netflix_Logo_PMS.png";

export default function Navbar() {
  return (
    <nav className="bg-black">
      <div className="flex items-center justify-between px-5 py-4">
        <Image src={netflixLogo} width={110} alt="image" />
        <a
          href="#"
          className="inline-block px-5 py-2 text-sm font-bold text-white rounded-md bg-[#e50914]"
        >
          Sign In
        </a>
      </div>
    </nav>
  );
}
