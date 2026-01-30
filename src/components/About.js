import React from 'react';

const About = ({ personalInfo }) => {
  return (
    <section id="about" className="py-20 md:py-24 bg-[#0f172a] relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-16 md:w-20 h-1.5 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1e293b] rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 border border-white/5 shadow-2xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-24 -mt-24 md:-mr-32 md:-mt-32"></div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center relative z-10">
              <div className="w-4/5 md:w-1/3">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[2.5rem] opacity-20 blur-2xl"></div>
                  <div className="relative w-full aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10">
                    {personalInfo.image ? (
                      <img src={personalInfo.image} alt="About Me" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-white">
                        {personalInfo.name[0]}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-tight">Who am I?</h3>
                <p className="text-base md:text-xl text-gray-400 mb-10 leading-relaxed font-light">
                  {personalInfo.bio}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  {[
                    { label: 'Name', value: personalInfo.name, icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                    { label: 'Email', value: personalInfo.email, icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                    { label: 'Phone', value: personalInfo.phone, icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
                    { label: 'Location', value: personalInfo.location, icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group/item justify-center md:justify-start">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:bg-indigo-500/10 group-hover/item:border-indigo-500/30 transition-all">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-widest">{item.label}</p>
                        <p className="text-white font-semibold text-sm md:text-base break-all">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;