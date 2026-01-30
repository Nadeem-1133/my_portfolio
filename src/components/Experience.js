import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 md:py-24 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-16 md:w-20 h-1.5 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-white/10"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`mb-12 md:mb-16 flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-[#1e293b] p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] border border-white/5 shadow-2xl relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

                    <span className="inline-block text-[10px] md:text-xs font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20 mb-4 md:mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      {exp.period}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-base md:text-lg text-indigo-400 font-semibold mb-4 md:mb-6">{exp.company}</p>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex w-8 h-8 md:w-12 md:h-12 rounded-full bg-slate-900 border-2 md:border-4 border-indigo-500 z-10 items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.5)] -ml-4 md:ml-0">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></div>
                </div>

                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;