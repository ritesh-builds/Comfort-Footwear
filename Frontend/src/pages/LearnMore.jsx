import React from "react";
import { useTheme } from "../context/ThemeContext.jsx";

const LearnMore = () => {

  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen px-6 py-16 md:px-16 lg:px-24 transition-all duration-500 ${darkMode ? "bg-[#050505] text-white" : "bg-[#f5f5f5] text-black"}`}>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center py-20">

        <p className={`text-sm tracking-[5px] uppercase mb-6 ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
          About Comfort
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
          Walk in
          <span className={`${darkMode ? "text-gray-500" : "text-gray-400"}`}>
            {" "}comfort.
          </span>
        </h1>

        <p className={`max-w-2xl mx-auto mt-8 text-lg leading-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Comfort Footwear is built around one simple idea — footwear should feel as good as it looks. We create everyday footwear designed for comfort, simplicity and effortless style.
        </p>

      </section>


      {/* Story Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20 border-t border-black/10 dark:border-white/10">

        <div>
          <p className={`text-sm tracking-[3px] uppercase mb-5 ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
            Our Idea
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Made for the way you move.
          </h2>
        </div>

        <div>
          <p className={`leading-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            From morning walks to busy days and everything in between, Comfort Footwear focuses on creating shoes that fit naturally into everyday life. Our approach is simple: comfortable footwear, clean designs and quality that you can rely on.
          </p>

          <p className={`leading-8 mt-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            We believe you shouldn't have to choose between comfort and style. That's why every collection is designed with both in mind.
          </p>
        </div>

      </section>


      {/* Values */}
      <section className="max-w-6xl mx-auto py-20">

        <div className="text-center mb-14">

          <p className={`text-sm tracking-[3px] uppercase mb-5 ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
            What We Believe
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Simple things matter.
          </h2>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Comfort */}
          <div className={`group relative overflow-hidden p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${darkMode ? "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(255,255,255,0.06)]" : "border-black/10 bg-white/60 hover:border-black/20 hover:bg-white/80 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"}`}>

            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">

              <span className={`text-sm ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
                01
              </span>

              <h3 className="text-xl font-semibold mt-8 mb-4">
                Comfort
              </h3>

              <p className={`leading-7 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Footwear designed to keep you comfortable throughout your everyday journey.
              </p>

            </div>

          </div>


          {/* Simplicity */}
          <div className={`group relative overflow-hidden p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${darkMode ? "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(255,255,255,0.06)]" : "border-black/10 bg-white/60 hover:border-black/20 hover:bg-white/80 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"}`}>

            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">

              <span className={`text-sm ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
                02
              </span>

              <h3 className="text-xl font-semibold mt-8 mb-4">
                Simplicity
              </h3>

              <p className={`leading-7 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Clean designs that are easy to wear, easy to style and made for everyday life.
              </p>

            </div>

          </div>


          {/* Quality */}
          <div className={`group relative overflow-hidden p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${darkMode ? "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(255,255,255,0.06)]" : "border-black/10 bg-white/60 hover:border-black/20 hover:bg-white/80 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"}`}>

            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">

              <span className={`text-sm ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
                03
              </span>

              <h3 className="text-xl font-semibold mt-8 mb-4">
                Quality
              </h3>

              <p className={`leading-7 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                We focus on creating footwear that feels dependable from the first step to the last.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Bottom CTA */}
      <section className={`group relative overflow-hidden max-w-6xl mx-auto my-20 rounded-3xl px-8 py-16 text-center border backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 ${darkMode ? "bg-white/[0.035] border-white/10 hover:border-white/20 hover:bg-white/[0.055] hover:shadow-[0_25px_80px_rgba(255,255,255,0.05)]" : "bg-white/60 border-black/10 hover:border-black/20 hover:bg-white/80 hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)]"}`}>

        <div className="absolute -right-32 -top-32 w-80 h-80 rounded-full bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <div className="relative">

          <h2 className="text-3xl md:text-5xl font-semibold">
            Your everyday comfort starts here.
          </h2>

          <p className={`max-w-xl mx-auto mt-6 leading-7 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Explore our collections and find footwear made for your everyday journey.
          </p>

        </div>

      </section>

    </div>
  );
};

export default LearnMore;