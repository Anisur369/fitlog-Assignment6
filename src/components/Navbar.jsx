"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Dumbbell, Menu, X } from "lucide-react";

const Navbar = () => {
  // সক্রিয় ট্যাব ট্র্যাক করার জন্য state
  const [activeTab, setActiveTab] = useState("Workouts");

  // মোবাইল / ট্যাবলেট মেনু খোলা/বন্ধ করার জন্য state
  const [isOpen, setIsOpen] = useState(false);

  // কাউন্টার স্টেট
  const [planCount, setPlanCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  return (
    <nav className="bg-[#0b0c0e] text-white px-4 min-[1025px]:px-6 py-3 border-b border-gray-800 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* বাম দিকের অংশ: কাস্টম ১০২৫ পিক্সেল মেনু বাটন + ব্র্যান্ড লোগো */}
        <div className="flex items-center gap-3">
          {/* ১০২৫ পিক্সেল বা তার ছোট স্ক্রিনে দেখাবে (max-[1024px]:flex hidden) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="min-[1025px]:hidden text-gray-300 hover:text-white p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* ব্র্যান্ড লোগো ও নাম */}
          <Link href="/" className="flex items-center gap-2 group">
            <Dumbbell className="w-6 h-6 text-[#a3e635] transform -rotate-45 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-extrabold tracking-wider text-white">
              FITLOG
            </span>
          </Link>
        </div>

        {/* মাঝখানের নেভিগেশন লিঙ্কসমূহ (১০২৫ পিক্সেলের বড় স্ক্রিনে দেখাবে: min-[1025px]:flex) */}
        <div className="hidden min-[1025px]:flex items-center gap-2 bg-[#121417] p-1 rounded-full border border-gray-800/50">
          <button
            onClick={() => setActiveTab("Workouts")}
            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeTab === "Workouts"
                ? "bg-[#1a2e05] text-[#a3e635]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </button>

          <button
            onClick={() => setActiveTab("My Plan")}
            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeTab === "My Plan"
                ? "bg-[#1a2e05] text-[#a3e635]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </button>
        </div>

        {/* ডান দিকের প্ল্যান এবং সেভড কাউন্টার */}
        <div className="flex items-center gap-4 min-[1025px]:gap-6">
          {/* Plan Badge */}
          <div className="flex items-center gap-1.5 min-[1025px]:gap-2 cursor-pointer group">
            <span className="text-xs min-[1025px]:text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
              Plan
            </span>
            <span className="bg-[#a3e635] text-black text-xs font-bold w-5 h-5 min-[1025px]:w-6 min-[1025px]:h-6 rounded-full flex items-center justify-center">
              {planCount}
            </span>
          </div>

          {/* Saved Badge */}
          <div className="flex items-center gap-1.5 min-[1025px]:gap-2 cursor-pointer group">
            <span className="text-xs min-[1025px]:text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
              Saved
            </span>
            <span className="border border-gray-600 text-gray-300 text-xs font-bold w-5 h-5 min-[1025px]:w-6 min-[1025px]:h-6 rounded-full flex items-center justify-center">
              {savedCount}
            </span>
          </div>
        </div>

      </div>

      {/* ১০২৫ পিক্সেল বা তার ছোট স্ক্রিনে ওপেন হওয়া ড্রপডাউন মেনু */}
      {isOpen && (
        <div className="min-[1025px]:hidden bg-[#121417] border-b border-gray-800 px-4 py-4 mt-3 rounded-2xl flex flex-col gap-2">
          <button
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
          </button>

          <button
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
            My Plan
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;