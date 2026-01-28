import React from 'react';

const About = ({ personalInfo }) => {
  return (
    <section id="about" className="py-24 bg-[#0f172a] relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1e293b] rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="flex flex-col md:flex-row gap-16 items-center relative z-10">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[2.5rem] opacity-20 blur-2xl"></div>
                  <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden border border-white/10">
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

              <div className="md:w-2/3">
                <h3 className="text-3xl font-bold text-white mb-6">Who am I?</h3>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  {personalInfo.bio}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { label: 'Name', value: personalInfo.name, icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                    { label: 'Email', value: personalInfo.email, icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                    { label: 'Phone', value: personalInfo.phone, icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
                    { label: 'Location', value: personalInfo.location, icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group/item">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:bg-indigo-500/10 group-hover/item:border-indigo-500/30 transition-all">
                        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{item.label}</p>
                        <p className="text-white font-semibold">{item.value}</p>
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