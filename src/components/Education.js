import React from 'react';

const Education = ({ education }) => {
  return (
    <section id="education" className="py-20 md:py-24 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <div className="w-16 md:w-20 h-1.5 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-[#1e293b] rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl relative group"
              >
                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-600/20 p-6 md:p-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-indigo-500 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <span className="text-[10px] md:text-sm text-indigo-400 font-bold bg-indigo-500/10 px-3 md:px-4 py-1 rounded-full border border-indigo-500/20">
                        {edu.year}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{edu.degree}</h3>
                    <p className="text-base md:text-lg text-gray-400 font-medium">{edu.institution}</p>
                  </div>

                  <div className="mt-8 pt-6 md:pt-8 border-t border-white/5 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-indigo-500"></div>
                    <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold">Academic Record</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;