"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import React, { useContext, useState, useEffect } from "react";
import { WorkoutsContext } from "./context/WorkoutContext";
import Image from "next/image";
import Dumbbel from "../assets/logo.png";

const Navbar = () => {
  const { 
    isOpen, 
    setIsOpen, 
    activeTab, 
    setActiveTab, 
    planItems = [], // Default empty array to prevent undefined error
    saveItems = []  // Default empty array to prevent undefined error
  } = useContext(WorkoutsContext);

  // Client-side hydration status handle করার জন্য state
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="bg-[#0b0c0e] text-white px-4 min-[1025px]:px-6 py-3 border-b border-gray-800 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="min-[1025px]:hidden text-gray-300 hover:text-white p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <Link onClick={() => setActiveTab("Workouts")} href="/" className="flex items-center gap-2 group">
            <Image src={Dumbbel} alt="Dumbbel" className="w-6 h-6 text-[#a3e635] transform -rotate-0 group-hover:scale-110 transition-transform" /> 
            <span className="text-xl font-extrabold tracking-wider text-white">
              FITLOG
            </span>
          </Link>
        </div>

        <div className="hidden min-[1025px]:flex items-center gap-2 bg-[#121417] p-1 rounded-full border border-gray-800/50">
          <Link
            href="/"
            onClick={() => setActiveTab("Workouts")}
            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeTab === "Workouts"
                ? "bg-[#1a2e05] text-[#a3e635]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link href="/my-plan"
            onClick={() => setActiveTab("My Plan")}
            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeTab === "My Plan"
                ? "bg-[#1a2e05] text-[#a3e635]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>
        
        <div className="flex items-center gap-4 min-[1025px]:gap-6">
          {/* Plan Badge */}
          <Link onClick={() => setActiveTab("My Plan")} href="/my-plan" className="flex items-center gap-1.5 min-[1025px]:gap-2 cursor-pointer group">
            <span className="text-xs min-[1025px]:text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
              Plan
            </span>
            <span className="bg-[#ccff00] text-black text-xs font-bold w-5 h-5 min-[1025px]:w-6 min-[1025px]:h-6 rounded-full flex items-center justify-center">
              {/* isMounted সত্য হলে প্রকৃত দৈর্ঘ্য দেখাবে, অন্যথায় 0 */}
              {isMounted ? planItems?.length || 0 : 0}
            </span>
          </Link>

          {/* Saved Badge */}
          <Link onClick={() => setActiveTab("My Plan")} href="/my-plan" className="flex items-center gap-1.5 min-[1025px]:gap-2 cursor-pointer group">
            <span className="text-xs min-[1025px]:text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
              Saved
            </span>
            <span className="border border-gray-600 text-gray-300 text-xs font-bold w-5 h-5 min-[1025px]:w-6 min-[1025px]:h-6 rounded-full flex items-center justify-center">
              {/* isMounted সত্য হলে প্রকৃত দৈর্ঘ্য দেখাবে, অন্যথায় 0 */}
              {isMounted ? saveItems?.length || 0 : 0}
            </span>
          </Link>
        </div>

      </div>
      
      {isOpen && (
        <div className="min-[1025px]:hidden bg-[#121417] border-b border-gray-800 px-4 py-4 mt-3 rounded-2xl w-sm flex flex-col gap-2">
          <Link href="/"
            onClick={() => {
              setActiveTab("Workouts");
              setIsOpen(false);
            }}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "Workouts"
                ? "bg-[#1a2e05] text-[#a3e635]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link href="/my-plan"
            onClick={() => {
              setActiveTab("My Plan");
              setIsOpen(false);
            }}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "My Plan"
                ? "bg-[#1a2e05] text-[#a3e635]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plans
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;