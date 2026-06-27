import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my projects — web apps, data science, mobile development, and more.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="pt-[72px] pb-24">
      {/* ===== HEADER ===== */}
      <section className="px-6 py-24 lg:py-32 relative overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-secondary/[0.03]" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <span className="section-label justify-center mb-5">Portfolio</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight mb-6">
              My Projects
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              A collection of projects I&apos;ve built, from scalable web applications to data science experiments and mobile solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="px-6 py-12 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-6xl mx-auto relative">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white text-lg shadow-lg shadow-accent/20">
                ⭐
              </div>
              <h2 className="text-2xl font-bold text-text-primary">Featured Work</h2>
              <div className="h-px bg-gradient-to-r from-white/10 to-transparent flex-1" />
            </div>
          </AnimatedSection>

          <AnimatedSection stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== OTHER PROJECTS ===== */}
      {others.length > 0 && (
        <section className="px-6 py-16 relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none translate-y-1/3 translate-x-1/3" />

          <div className="max-w-6xl mx-auto relative">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg">
                  📁
                </div>
                <h2 className="text-2xl font-bold text-text-primary">More Projects</h2>
                <div className="h-px bg-gradient-to-r from-white/10 to-transparent flex-1" />
              </div>
            </AnimatedSection>

            <AnimatedSection stagger>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {others.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </div>
  );
}
