import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-24 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1.5 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl relative group transform transition-all duration-500 hover:-translate-y-4"
            >
              <div className="h-64 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl w-24 h-24 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                  <svg className="w-12 h-12 text-indigo-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>

                {/* Floating Tech Tags */}
                <div className="absolute bottom-6 left-6 flex gap-2 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  {['React', 'NodeJS'].map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold text-white bg-indigo-500 px-3 py-1 rounded-full shadow-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{project.name}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed line-clamp-3">{project.description}</p>
                <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                  {project.link !== '#' ? (
                    <a
                      href={project.link}
                      className="inline-flex items-center text-indigo-400 font-bold hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Case Study
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-gray-600 font-bold uppercase text-xs tracking-widest">Ongoing</span>
                  )}
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1e293b] bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">
                        {i === 3 ? '+' : ''}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;