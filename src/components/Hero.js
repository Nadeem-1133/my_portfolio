import React from 'react';

const Hero = ({ personalInfo }) => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-[#0f172a] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 mb-12 md:mb-0">
            <div className="relative">
              <span className="text-sm font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
                Welcome to my portfolio
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white mt-6 mb-4 leading-tight">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className="text-2xl md:text-4xl text-gray-400 font-medium mb-8">
                {personalInfo.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap gap-6">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                >
                  Hire Me
                </a>
                <a
                  href="#projects"
                  className="bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 border border-white/10 backdrop-blur-md"
                >
                  View Work
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2.5rem] blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#1e293b] shadow-2xl">
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
              <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                  <p className="text-white font-bold text-sm">Available for projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-white text-[10px] uppercase tracking-[0.2em]">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;