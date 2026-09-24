"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Dumbbell } from "lucide-react";

const Navbar = () => {
  // সক্রিয় ট্যাব ট্র্যাক করার জন্য state (যেমন: Workouts বা My Plan)
  const [activeTab, setActiveTab] = useState("Workouts");

  // কাউন্টার বা স্টেট ম্যানেজমেন্ট
  const [planCount, setPlanCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  return (
    <nav className="bg-[#0b0c0e] text-white px-6 py-3 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* বাম দিকের ব্র্যান্ড লোগো ও নাম */}
        <Link href="/" className="flex items-center gap-2 group">
          <Dumbbell className="w-6 h-6 text-[#a3e635] transform -rotate-45 group-hover:scale-110 transition-transform" />
          <span className="text-xl font-extrabold tracking-wider text-white">
            FITLOG
          </span>
        </Link>

        {/* মাঝখানের নেভিগেশন লিঙ্কসমূহ */}
        <div className="flex items-center gap-2 bg-[#121417] p-1 rounded-full border border-gray-800/50">
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
        <div className="flex items-center gap-6">
          {/* Plan Badge */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
              Plan
            </span>
            <span className="bg-[#a3e635] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {planCount}
            </span>
          </div>

          {/* Saved Badge */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
              Saved
            </span>
            <span className="border border-gray-600 text-gray-300 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {savedCount}
            </span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;