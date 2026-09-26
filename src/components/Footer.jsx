import React from "react";
import Link from "next/link";
import { Dumbbell } from "lucide-react";
import Image from "next/image";
import Dumbbel from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#0b0c0e] text-white py-8 px-6 border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* বাম দিকের লোগো ও ব্র্যান্ড নাম */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* <Dumbbell className="w-5 h-5 text-[#a3e635] transform -rotate-45 group-hover:scale-110 transition-transform" /> */}
          <Image src={Dumbbel} alt="Dumbbel" className="w-6 h-6 text-[#a3e635] transform -rotate-0 group-hover:scale-110 transition-transform" /> 
          <span className="text-lg font-extrabold tracking-wider text-white uppercase">
            FITLOG
          </span>
        </Link>

        {/* ডান দিকের কপিরাইট ও স্লোগান */}
        <p className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide text-center sm:text-right">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;