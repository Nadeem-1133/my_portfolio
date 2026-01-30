import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-20 md:py-24 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-16 md:w-20 h-1.5 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#1e293b] p-6 md:p-8 rounded-2x md:rounded-3xl border border-white/5 shadow-xl hover:border-indigo-500/30 transition-all duration-300 group"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base md:text-lg font-bold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{skill.name}</h3>
                  <span className="text-indigo-400 font-black tracking-tighter text-lg md:text-xl">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 md:h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional skills section */}
          <div className="mt-16 md:mt-20">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 md:mb-10 text-center uppercase tracking-widest">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {['RESTful APIs', 'Mobile Performance', 'UI/UX Principles', 'Clean Code', 'Scalable Architecture', 'API Integration'].map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 text-gray-400 hover:text-white hover:bg-indigo-500/20 px-5 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm font-semibold border border-white/10 hover:border-indigo-500/30 transition-all cursor-default uppercase tracking-widest"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;