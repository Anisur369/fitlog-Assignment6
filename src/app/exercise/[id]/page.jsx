"use client";

import React, { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Bookmark, ArrowLeft } from "lucide-react";

export default function WorkoutDetailsPage({ params }) {
  // Next.js 15+ এর জন্য params unwrapping
  const resolvedParams = use(params);
  const id = resolvedParams?.id;

  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchWorkoutDetails = async () => {
      try {
        console.log(`https://api.abcz.workers.dev/api/fitlog/${id}`);
        setLoading(true);
        const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
        
        if (!res.ok) {
          throw new Error("ওয়ার্কআউট তথ্য খুঁজে পাওয়া যায়নি।");
        }
        
        const data = await res.json();
        setWorkout(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWorkoutDetails();
  }, [id]);

  // লোডিং স্টেট
  if (loading) {
    return (
      <div className="bg-[#0b0c0e] min-h-screen text-white flex items-center justify-center p-6">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-[#a3e635] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-400 font-medium">লোডিং হচ্ছে...</p>
        </div>
      </div>
    );
  }

  // এরর স্টেট
  if (error || !workout) {
    return (
      <div className="bg-[#0b0c0e] min-h-screen text-white flex items-center justify-center p-6">
        <div className="text-center max-w-md bg-[#12151a] p-8 rounded-2xl border border-gray-800">
          <p className="text-red-400 text-lg font-semibold mb-4">
            {error || "ডেটা পাওয়া যায়নি!"}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#a3e635] text-black font-bold px-5 py-2.5 rounded-lg text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> ব্যাক টু লাইব্রেরি
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-[#0b0c0e] min-h-screen text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* ব্যাক বাটন */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#a3e635] text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Library
          </Link>
        </div>

        {/* মেইন গ্রিড লেআউট */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* বাম দিক: বড় ইমেজ কার্ড */}
          <div className="lg:col-span-5 bg-[#12151a] rounded-2xl overflow-hidden border border-gray-800/60 shadow-xl">
            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* ডান দিক: ডিটেইলস কনটেন্ট */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* শিরোনাম, বিবরণ ও মাসল ব্যাজ */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-2">
                {workout.name}
              </h1>
              
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                {workout.description}
              </p>

              {/* Muscle Groups Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {workout.muscleGroups?.map((muscle, idx) => (
                  <span
                    key={idx}
                    className="bg-[#a3e635] text-black text-xs font-extrabold uppercase px-3 py-1 rounded-full"
                  >
                    {muscle}
                  </span>
                ))}
              </div>
            </div>

            {/* স্পেসিফিকেশন / ডেটা টেবিল বক্স */}
            <div className="bg-[#12151a] rounded-xl border border-gray-800/80 p-4 sm:p-5 divide-y divide-gray-800/60">
              <div className="flex justify-between py-2 text-xs sm:text-sm">
                <span className="text-gray-400 font-semibold uppercase tracking-wider">
                  EQUIPMENT
                </span>
                <span className="text-white font-medium">{workout.equipment}</span>
              </div>

              <div className="flex justify-between py-2 text-xs sm:text-sm">
                <span className="text-gray-400 font-semibold uppercase tracking-wider">
                  DIFFICULTY
                </span>
                <span className="text-white font-medium">{workout.difficulty}</span>
              </div>

              <div className="flex justify-between py-2 text-xs sm:text-sm">
                <span className="text-gray-400 font-semibold uppercase tracking-wider">
                  SETS
                </span>
                <span className="text-white font-medium">{workout.sets}</span>
              </div>

              <div className="flex justify-between py-2 text-xs sm:text-sm">
                <span className="text-gray-400 font-semibold uppercase tracking-wider">
                  REPS
                </span>
                <span className="text-white font-medium">{workout.reps}</span>
              </div>

              <div className="flex justify-between py-2 text-xs sm:text-sm">
                <span className="text-gray-400 font-semibold uppercase tracking-wider">
                  DURATION
                </span>
                <span className="text-white font-medium">{workout.duration} min</span>
              </div>

              <div className="flex justify-between py-2 text-xs sm:text-sm">
                <span className="text-gray-400 font-semibold uppercase tracking-wider">
                  CALORIES
                </span>
                <span className="text-white font-medium">{workout.caloriesBurned} kcal</span>
              </div>

              <div className="flex justify-between py-2 text-xs sm:text-sm">
                <span className="text-gray-400 font-semibold uppercase tracking-wider">
                  RATING
                </span>
                <span className="text-white font-medium">{workout.rating}</span>
              </div>
            </div>

            {/* ইনস্ট্রাকশন / নিয়মাবলী সেকশন */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-white mb-3">
                INSTRUCTIONS
              </h3>
              <ol className="space-y-2 text-xs sm:text-sm text-gray-300">
                {workout.instructions?.map((step, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-gray-500 font-semibold">{index + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* একশন বাটনসমূহ */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button className="bg-[#a3e635] hover:bg-[#8ee012] text-black font-black text-xs sm:text-sm tracking-wider px-5 py-3 rounded-xl uppercase flex items-center gap-2 transition-all transform active:scale-95 shadow-md">
                <Plus className="w-4 h-4 stroke-[3]" /> Add to today&apos;s plan
              </button>

              <button className="bg-[#12151a] hover:bg-[#1a1f26] border border-gray-700/80 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl flex items-center gap-2 transition-all">
                <Bookmark className="w-4 h-4 text-gray-400" /> Save for later
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}