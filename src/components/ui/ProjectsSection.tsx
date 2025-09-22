// ProjectsSection.tsx
import React from 'react';
import Image from 'next/image';
import { Project } from '../../data/data';

interface ProjectsSectionProps {
  projects: Project[];
  title?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  projects, 
  title = "My Projects" 
}) => {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      {/* Title Section */}
      <div className="w-full text-center mb-4">
        <h2 className="text-[#344054] font-bold text-4xl md:text-5xl">{title}</h2>
        <div className="h-1 w-20 bg-[#FD853A] mx-auto mt-4"></div>
      </div>
      
      {/* Projects Grid */}
      <div className="projectssec grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {projects.map((project) => (
          <div 
            key={project.id} 
            style={{ cursor: 'pointer' }} 
            className="group w-full h-[320px] relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            {project.type === 'iframe' ? (
              <>
                <iframe 
                  src={project.src} 
                  title={project.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                    <div className="h-1 w-12 bg-[#FD853A] mt-2 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                  </div>
                </div>
              </>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={project.src}
                  alt={project.alt || project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                    <div className="h-1 w-12 bg-[#FD853A] mt-2 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                  </div>
                </div>
              </div>
            )}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33337 8.00004H12.6667M12.6667 8.00004L8.00004 3.33337M12.6667 8.00004L8.00004 12.6667" stroke="#1D2939" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;