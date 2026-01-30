import React from 'react';

const Hero = ({ personalInfo }) => {
  return (
    <section id="home" className="pt-24 md:pt-20 min-h-screen flex items-center bg-[#0f172a] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] md:w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[60%] md:w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
          <div className="w-full md:w-3/5 text-center md:text-left">
            <div className="relative">
              <span className="text-[10px] md:text-sm font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
                Welcome to my portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mt-6 mb-4 leading-[1.1]">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className="text-xl md:text-4xl text-gray-400 font-medium mb-8">
                {personalInfo.title}
              </h2>
              <p className="text-base md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
                <a
                  href="#contact"
                  className="w-full sm:w-auto text-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                >
                  Hire Me
                </a>
                <a
                  href="#projects"
                  className="w-full sm:w-auto text-center bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 border border-white/10 backdrop-blur-md"
                >
                  View Work
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <div className="relative group p-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2.5rem] blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#1e293b] shadow-2xl">
                {personalInfo.image ? (
                  <img
                    src={personalInfo.image}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <span className="text-6xl font-black uppercase">{personalInfo.name[0]}</span>
                  </div>
                )}
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-2 -right-2 md:-bottom-6 md:-right-6 bg-[#1e293b]/90 backdrop-blur-xl border border-white/20 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl animate-bounce-slow">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                  <p className="text-white font-bold text-xs md:text-sm">Available for projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-white text-[8px] md:text-[10px] uppercase tracking-[0.2em]">Scroll Down</span>
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 md:w-1 md:h-2 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;