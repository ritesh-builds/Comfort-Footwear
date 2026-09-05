import React from "react";
import { useTheme } from "../context/ThemeContext.jsx";

const OurStory = () => {

  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen px-6 py-16 md:px-16 lg:px-24 transition-all duration-500 ${darkMode ? "bg-[#050505] text-white" : "bg-[#f5f5f5] text-black"}`}>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center py-20">

        <p className={`text-sm tracking-[5px] uppercase mb-6 ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
          Our Story
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
          More than
          <span className={`${darkMode ? "text-gray-500" : "text-gray-400"}`}>
            {" "}footwear.
          </span>
        </h1>

        <p className={`max-w-2xl mx-auto mt-8 text-lg leading-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Comfort Footwear started with a simple thought — everyday footwear should never make you choose between looking good and feeling comfortable.
        </p>

      </section>


      {/* Beginning */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 py-20 border-t border-gray-300 dark:border-[#222]">

        <div>
          <p className={`text-sm tracking-[3px] uppercase mb-5 ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
            The Beginning
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            It started with comfort.
          </h2>
        </div>

        <div>
          <p className={`leading-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            We wanted to create footwear that could become a natural part of everyday life. Something you could wear for a morning walk, a busy day outside or simply while going about your routine.
          </p>

          <p className={`leading-8 mt-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Instead of following complicated trends, we chose to focus on the things that matter — comfort, simplicity and dependable quality.
          </p>
        </div>

      </section>


      {/* Journey */}
      <section className="max-w-6xl mx-auto py-20">

        <div className="text-center mb-16">

          <p className={`text-sm tracking-[3px] uppercase mb-5 ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
            Our Journey
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Built one step at a time.
          </h2>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 01 */}
          <div className={`group relative overflow-hidden p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${darkMode ? "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(255,255,255,0.06)]" : "border-black/10 bg-white/60 hover:border-black/20 hover:bg-white/80 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"}`}>

            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <span className={`relative text-sm ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
              01
            </span>

            <h3 className="relative text-xl font-semibold mt-8 mb-4">
              The Idea
            </h3>

            <p className={`relative leading-7 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              A simple idea to make comfortable footwear a part of everyone's everyday journey.
            </p>

          </div>


          {/* Card 02 */}
          <div className={`group relative overflow-hidden p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${darkMode ? "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(255,255,255,0.06)]" : "border-black/10 bg-white/60 hover:border-black/20 hover:bg-white/80 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"}`}>

            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <span className={`relative text-sm ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
              02
            </span>

            <h3 className="relative text-xl font-semibold mt-8 mb-4">
              The Design
            </h3>

            <p className={`relative leading-7 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Clean and timeless designs created to fit naturally into everyday life.
            </p>

          </div>


          {/* Card 03 */}
          <div className={`group relative overflow-hidden p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${darkMode ? "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(255,255,255,0.06)]" : "border-black/10 bg-white/60 hover:border-black/20 hover:bg-white/80 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"}`}>

            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <span className={`relative text-sm ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
              03
            </span>

            <h3 className="relative text-xl font-semibold mt-8 mb-4">
              The Future
            </h3>

            <p className={`relative leading-7 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Continuing to build footwear that makes every step feel a little better.
            </p>

          </div>

        </div>

      </section>


      {/* Philosophy */}
      <section className={`group relative overflow-hidden max-w-6xl mx-auto my-20 rounded-3xl px-8 md:px-16 py-20 border backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 ${darkMode ? "bg-white/[0.035] border-white/10 hover:border-white/20 hover:bg-white/[0.055] hover:shadow-[0_25px_80px_rgba(255,255,255,0.05)]" : "bg-white/60 border-black/10 hover:border-black/20 hover:bg-white/80 hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)]"}`}>

        <div className="absolute -right-32 -top-32 w-80 h-80 rounded-full bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <div className="relative max-w-3xl">

          <p className={`text-sm tracking-[3px] uppercase mb-6 ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
            Our Philosophy
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Every step should feel like the right one.
          </h2>

          <p className={`mt-8 text-lg leading-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            We believe good footwear doesn't need to be complicated. It simply needs to be comfortable, thoughtfully designed and ready for wherever the day takes you.
          </p>

        </div>

      </section>


      {/* Closing */}
      <section className="max-w-4xl mx-auto text-center py-20">

        <h2 className="text-3xl md:text-5xl font-semibold transition-transform duration-500 hover:scale-105">
          Keep moving.
        </h2>

        <p className={`mt-6 text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Comfort Footwear — designed for the way you move.
        </p>

      </section>

    </div>
  );
};

export default OurStory;