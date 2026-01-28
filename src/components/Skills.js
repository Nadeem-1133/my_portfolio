import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-24 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1.5 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#1e293b] p-8 rounded-3xl border border-white/5 shadow-xl hover:border-indigo-500/30 transition-all duration-300 group"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{skill.name}</h3>
                  <span className="text-indigo-400 font-black tracking-tighter text-xl">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional skills section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-white mb-10 text-center">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['RESTful APIs', 'Mobile Performance', 'UI/UX Principles', 'Clean Code', 'Scalable Architecture', 'API Integration'].map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 text-gray-400 hover:text-white hover:bg-indigo-500/20 px-8 py-3 rounded-2xl font-semibold border border-white/10 hover:border-indigo-500/30 transition-all cursor-default"
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