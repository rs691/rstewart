'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface Project {
  slug: string;
  data: {
    title: string;
    subtitle?: string;
    description?: string;
    img: string;
    img_alt?: string;
    tags: string[];
  };
}

export default function ProjectScrollShowcase({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {projects.map((project, index) => (
        <ProjectItem key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0.8, 1, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [150, 0, 0, -150]);

  const smoothScale = useSpring(scale, { stiffness: 80, damping: 25 });
  const smoothOpacity = useSpring(opacity, { stiffness: 80, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 25 });

  return (
    <motion.section
      ref={ref}
      style={{
        scale: smoothScale,
        opacity: smoothOpacity,
        y: smoothY
      }}
      className="h-[120vh] flex flex-col items-center justify-center p-6 md:p-12 relative z-10"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-(--gray-900) border border-(--gray-800) rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <div className="order-2 md:order-1 space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.data.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-(--accent-regular) text-white">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-(--gray-0) tracking-tight">
            {project.data.title}
          </h2>
          {project.data.subtitle && (
            <p className="text-xl text-(--accent-light) font-medium">
              {project.data.subtitle}
            </p>
          )}
          <p className="text-lg text-(--gray-300) leading-relaxed">
             {project.data.description || "View project details on the separate work page."}
          </p>
          <div className="pt-4">
            <a 
              href={`/work/${project.slug}`} 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-(--gray-0) text-(--gray-999) font-bold hover:bg-(--accent-regular) hover:text-white transition-all transform hover:scale-105 active:scale-95"
            >
              View Case Study
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-(--gray-700) group">
            <img 
              src={project.data.img} 
              alt={project.data.img_alt || project.data.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-(--gray-999)/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
