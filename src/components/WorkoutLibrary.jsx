"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Clock, Flame, Star } from "lucide-react";

const WorkoutLibrary = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setWorkouts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <section className="bg-[#0b0c0e] py-12 px-4 sm:px-6 lg:px-8 text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* হেডার অংশ */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
            THE LIBRARY
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-1">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* লোডিং অবস্থা */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-[#12151a] rounded-2xl h-96 animate-pulse border border-gray-800/60"
              />
            ))}
          </div>
        )}

        {/* এরর মেসেজ */}
        {error && (
          <div className="text-red-500 bg-red-950/40 p-4 rounded-xl border border-red-800">
            ডেটা লোড করতে সমস্যা হয়েছে: {error}
          </div>
        )}

        {/* ওয়ার্কআউট কার্ড গ্রিড */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.map((item) => (
              <div
                key={item.id}
                className="bg-[#12151a] rounded-2xl overflow-hidden border border-gray-800/60 flex flex-col justify-between hover:border-gray-700 transition-all duration-300"
              >
                {/* ইমেজ অংশ */}
                <div className="relative w-full h-52 bg-gray-900">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* কনটেন্ট অংশ */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* মাসল গ্রুপ ব্যাজসমূহ */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.muscleGroups?.map((muscle, idx) => (
                        <span
                          key={idx}
                          className="bg-[#a3e635] text-black text-[11px] font-black uppercase px-2.5 py-0.5 rounded-md"
                        >
                          {muscle}
                        </span>
                      ))}
                    </div>

                    {/* নাম ও ইকুইপমেন্ট */}
                    <h3 className="text-lg font-black uppercase text-white tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5 mb-4">
                      {item.equipment}
                    </p>
                  </div>

                  {/* সময়, ক্যালোরি এবং রেটিং মেটাডেটা */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 border-t border-gray-800/80 pt-3 mt-2">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span>{item.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-gray-400" />
                      <span>{item.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-gray-400 fill-gray-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default WorkoutLibrary;