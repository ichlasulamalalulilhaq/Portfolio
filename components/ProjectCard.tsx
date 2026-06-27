import type { Project } from "@/data/projects";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <div className={`group relative rounded-[28px] bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1 hover:border-white/20 ${
      featured ? "sm:col-span-2 sm:row-span-2" : ""
    }`}>
      {/* Hover gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 w-full bg-gradient-to-r from-accent via-secondary to-accent-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className={`p-8 ${featured ? "sm:p-10" : ""} flex flex-col h-full`}>
        {/* Top row: Icon + Tech */}
        <div className="flex items-start justify-between mb-6">
          <div className={`${featured ? "w-16 h-16 text-3xl" : "w-12 h-12 text-2xl"} rounded-2xl bg-gradient-to-br from-accent/8 to-secondary/8 border border-accent/8 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
            {project.icon}
          </div>

          {/* Arrow link */}
          {(project.liveUrl || project.githubUrl) && (
            <a
              href={project.liveUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group-hover:rotate-0 -rotate-45"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
        </div>

        {/* Title */}
        <h3 className={`${featured ? "text-2xl" : "text-lg"} font-bold text-white/90 group-hover:text-accent transition-colors duration-300 mb-3 leading-snug`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`text-white/60 text-justify leading-relaxed mb-6 ${featured ? "text-base line-clamp-4" : "text-sm line-clamp-3"}`}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[11px] font-semibold text-white/50 uppercase tracking-wider">
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom links */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex items-center gap-5 mt-6 pt-6 border-t border-white/10">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white/50 hover:text-accent transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white/50 hover:text-accent transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                Source
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
