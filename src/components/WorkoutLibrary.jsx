"use client";

import React, { useContext } from "react";
import { WorkoutsContext } from "./context/WorkoutContext";
import WorkoutCard from "./WorkoutCard";

const WorkoutLibrary = () => {
  const {workouts, loading, error}=useContext(WorkoutsContext);

  return (
    <section className="bg-[#0b0c0e] py-12 px-4 sm:px-6 lg:px-8 text-white min-h-screen">
      <div id="library" className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
            THE LIBRARY
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-1">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

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

        {error && (
          <div className="text-red-500 bg-red-950/40 p-4 rounded-xl border border-red-800">
            ডেটা লোড করতে সমস্যা হয়েছে: {error}
          </div>
        )}
        
        
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.map((item, index) => (
              <WorkoutCard key={index} item={item} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default WorkoutLibrary;