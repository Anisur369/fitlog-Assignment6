"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, Check, X, ChevronDown } from "lucide-react";

// টেস্ট বা ডেমো ডেটা (খালি অবস্থা দেখতে চাইলে ইনিশিয়াল স্টেট হিসেবে খালি এরে [] পাঠাতে পারেন)
const initialPlanItems = [
  {
    id: 1,
    name: "BACK SQUAT",
    equipment: "Barbell, Rack",
    duration: 30,
    caloriesBurned: 240,
    rating: 4.9,
    image: "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740",
    isCompleted: false,
  },
];

const MyPlanSection = () => {
  const [activeTab, setActiveTab] = useState("Today's Plan");
  const [sortBy, setSortBy] = useState("Duration");
  const [planItems, setPlanItems] = useState(initialPlanItems);

  // ডায়নামিক সামারি হিসাব (Exercises, Minutes, Calories)
  const totalExercises = planItems.length;
  const totalMinutes = planItems.reduce((sum, item) => sum + item.duration, 0);
  const totalCalories = planItems.reduce((sum, item) => sum + item.caloriesBurned, 0);

  // আইটেম মুছে ফেলার হ্যান্ডলার
  const handleRemove = (id) => {
    setPlanItems((prev) => prev.filter((item) => item.id !== id));
  };

  // কমপ্লিট মার্ক করার হ্যান্ডলার
  const handleToggleComplete = (id) => {
    setPlanItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  return (
    <section className="bg-[#0b0c0e] text-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* হেডার সেকশন */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-white">
            MY PLAN
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* সামারি পরিসংখ্যান কার্ড (Exercises, Minutes, Calories) */}
        <div className="bg-[#12151a] border border-gray-800/80 rounded-2xl grid grid-cols-3 divide-x divide-gray-800/80 p-6">
          <div className="flex flex-col space-y-1">
            <span className="text-gray-400 text-xs font-semibold">Exercises</span>
            <span className="text-3xl sm:text-4xl font-black text-[#a3e635]">
              {totalExercises}
            </span>
          </div>

          <div className="flex flex-col space-y-1 pl-6">
            <span className="text-gray-400 text-xs font-semibold">Minutes</span>
            <span className="text-3xl sm:text-4xl font-black text-white">
              {totalMinutes}
            </span>
          </div>

          <div className="flex flex-col space-y-1 pl-6">
            <span className="text-gray-400 text-xs font-semibold">Calories</span>
            <span className="text-3xl sm:text-4xl font-black text-white">
              {totalCalories}
            </span>
          </div>
        </div>

        {/* ফিল্টার এবং সর্টিং কন্ট্রোল */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          {/* ট্যাব সুইচ (Today's Plan / Saved) */}
          <div className="flex items-center gap-1 bg-[#12151a] p-1 rounded-xl border border-gray-800/80">
            <button
              onClick={() => setActiveTab("Today's Plan")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "Today's Plan"
                  ? "bg-[#1a2e05] text-[#a3e635]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab("Saved")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "Saved"
                  ? "bg-[#1a2e05] text-[#a3e635]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort By ড্রপডাউন */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs font-semibold text-gray-400">Sort By</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#12151a] border border-gray-800 text-white text-xs font-medium py-2 pl-3 pr-8 rounded-lg appearance-none focus:outline-none focus:border-gray-600 cursor-pointer"
              >
                <option value="Duration">Duration</option>
                <option value="Calories">Calories</option>
                <option value="Rating">Rating</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* প্রধান কনটেন্ট এরিয়া (খালি অথবা আইটেম লিস্ট) */}
        {planItems.length === 0 ? (
          /* ১. খালি অবস্থা (EMPTY STATE) */
          <div className="bg-[#12151a] border border-dashed border-gray-800/80 rounded-2xl py-16 px-4 flex flex-col items-center justify-center text-center space-y-3">
            <h3 className="text-lg font-black uppercase text-white tracking-wide">
              NOTHING HERE YET
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/workouts"
              className="mt-2 bg-[#a3e635] hover:bg-[#8ee012] text-black font-extrabold text-xs px-6 py-3 rounded-full transition-all active:scale-95"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          /* ২. ডেটা যুক্ত অবস্থা (POPULATED LIST) */
          <div className="space-y-4">
            {planItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#12151a] border border-gray-800/80 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                {/* বাম দিক: ছবি ও বিবরণ */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="relative w-28 h-18 sm:w-32 sm:h-20 rounded-xl overflow-hidden bg-gray-900 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <h3 className="text-base font-black uppercase text-white tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">
                      {item.equipment}
                    </p>

                    {/* মেটাডেটা (সময়, ক্যালোরি, রেটিং) */}
                    <div className="flex items-center gap-3 text-xs font-semibold text-gray-400 pt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        {item.duration} min
                      </span>
                      <span className="flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-gray-400" />
                        {item.caloriesBurned} kcal
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-gray-400 fill-gray-400" />
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ডান দিক: অ্যাকশন বাটনসমূহ */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <Link
                    href={`/workouts/${item.id}`}
                    className="border border-gray-700 hover:bg-gray-800 text-gray-300 hover:text-white text-xs font-bold px-4 py-2 rounded-full transition-all"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => handleToggleComplete(item.id)}
                    className={`flex items-center gap-1.5 text-xs font-black px-4 py-2 rounded-full transition-all ${
                      item.isCompleted
                        ? "bg-gray-700 text-gray-300"
                        : "bg-[#a3e635] hover:bg-[#8ee012] text-black"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    {item.isCompleted ? "Done" : "Mark as Done"}
                  </button>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-gray-400 hover:text-white p-1 transition-colors"
                    title="Remove from plan"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default MyPlanSection;