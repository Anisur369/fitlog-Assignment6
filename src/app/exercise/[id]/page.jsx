"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, use, useContext } from "react";
import { Plus, Bookmark, ArrowLeft } from "lucide-react";

export default function WorkoutDetailsPage({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams?.id;

  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const addPlan = () => {
    const currentMyPlan = JSON.parse(localStorage.getItem("myPlanData")) || [];

    const addmatch = currentMyPlan.some((plan) => workout?.id === plan.id);
    if (addmatch) {
      alert("is already added to plan");
    } else {
      const updatedPlan = [workout, ...currentMyPlan];
      localStorage.setItem("myPlanData", JSON.stringify(updatedPlan));
      alert("Plan added successfully!");
    }
  };

  const addWatch = () => {
    const currentSavePlan = JSON.parse(localStorage.getItem("savePlanData")) || [];

    const saveWatch = currentSavePlan.some((save) => save.id === workout?.id);
    if (saveWatch) {
      alert("is already saved");
    } else {
      const updatedSavePlan = [workout, ...currentSavePlan];
      localStorage.setItem("savePlanData", JSON.stringify(updatedSavePlan));
      alert("Saved successfully!");
    }
  };

  useEffect(() => {
    if (!id) return;

    const fetchWorkoutDetails = async () => {
      try {
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
        {/* back button */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#a3e635] text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Library
          </Link>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left */}
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

          {/* Right */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
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

            {/* table */}
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

            {/* INSTRUCTIONS */}
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

            {/* Action Button */}
            <div className="flex flex-wrap items-center gap-3 pt-2">

              <button onClick={addPlan} className="bg-[#a3e635] hover:bg-[#8ee012] text-black font-black text-xs sm:text-sm tracking-wider px-5 py-3 rounded-xl uppercase flex items-center gap-2 transition-all transform active:scale-95 shadow-md">
                <Plus className="w-4 h-4 stroke-[3]" /> Add to today&apos;s plan
              </button>

              <button onClick={addWatch} className="bg-[#12151a] hover:bg-[#1a1f26] border border-gray-700/80 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl flex items-center gap-2 transition-all">
                <Bookmark className="w-4 h-4 text-gray-400" /> Save for later
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}