import React from "react";
import Image from "next/image";
import gymIllustration from "../assets/banner.png"; 

const HeroSection = () => {
  return (
    <section className="bg-[#0b0c0e] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#12151a] rounded-2xl p-8 sm:p-12 lg:p-16 border border-gray-800/60 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side Content */}
        <div className="flex-1 max-w-2xl z-10">
          <span className="text-[#a3e635] text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 block">
            WORKOUT LIBRARY
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.1] mb-6">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="text-gray-400 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <button className="bg-[#a3e635] hover:bg-[#8ee012] text-black font-extrabold text-xs sm:text-sm tracking-wider px-6 py-3.5 rounded-lg uppercase transition-all duration-200 transform active:scale-95 shadow-md">
            BROWSE WORKOUTS
          </button>
        </div>
        
        {/* Right Side Image */}
        <div className="flex-1 flex justify-center md:justify-end items-center relative w-full max-w-md lg:max-w-lg">
          <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[420px]">
            <Image
              src={gymIllustration} // public/gym-workout-illustration.png হিসেবে সেভ রাখুন
              alt="Gym Workout Machine Illustration"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;