import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, GitBranch, Terminal } from 'lucide-react';

const jobs = [
  {
    title: "Software Developer",
    company: "NE Innovation Labs",
    dates: "Dec 2025 – Present",
    type: "Full-Time",
    active: true,
    bullets: [
      "Engineered a multi-tenant, location-based mobile platform for Good Life Games, live on the App Store and Google Play.",
      "Full-Stack Implementation: Built the final production environment using Flutter, Node.js, Express, and MySQL, with a React administrative dashboard.",
      "Architectural Migration: Led a strategic backend transition from Firebase/Serverpod prototypes to a custom Node.js stack on AWS ECS.",
      "DevOps & Automation: Established CI/CD pipelines for zero-downtime deployments to App Stores and AWS, reducing routine tasks by 25%.",
      "Scalability & Efficiency: Designed real-time infrastructure supporting 1,000+ concurrent users per region and reduced tenant onboarding time by 35%.",
    ],
    tags: ["Flutter", "Node.js", "MySQL", "React", "AWS ECS", "Docker", "CI/CD"],
  },
  {
    title: "CIS Peer Tutor",
    company: "Bellevue University",
    dates: "Jan 2024 – Dec 2025",
    type: "Part-Time",
    active: false,
    bullets: [
      "Mentored 100+ students across full-stack development, databases, and system design.",
      "Improved average student outcomes by 20% through structured, hands-on learning paths.",
      "Conducted in-depth code reviews and guided best practices in architecture and testing.",
      "Developed curriculum materials bridging theoretical concepts with real-world practice.",
    ],
    tags: ["Full-Stack", "System Design", "Code Review", "Mentorship"],
  },
  {
    title: "Junior Web Developer",
    company: "Pierson Wireless",
    dates: "May 2023 – Nov 2023",
    type: "Full-Time",
    active: false,
    bullets: [
      "Built internal tools for cost estimation and operations, reducing manual workload by 40%.",
      "Developed and deployed a ticket management system using Laravel with Azure CI/CD pipelines.",
      "Collaborated across the full SDLC from requirements through production deployment.",
    ],
    tags: ["Laravel", "PHP", "Azure", "CI/CD", "MySQL"],
  },
  {
    title: "IT Support Specialist",
    company: "Pierson Wireless",
    dates: "Oct 2022 – May 2023",
    type: "Full-Time",
    active: false,
    bullets: [
      "Diagnosed and resolved hardware, software, and network issues — maintained high system reliability.",
      "Streamlined onboarding workflows and technical documentation, reducing support overhead.",
    ],
    tags: ["IT Support", "Networking", "Documentation"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 border-t border-white/5 relative overflow-hidden group scroll-mt-24">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-500/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-yellow-500/40"></span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-yellow-500/60 font-medium">
              03 // DEPLOYMENT_LOG
            </span>
            <span className="h-px w-8 bg-yellow-500/40"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-4">EXPERIENCE</h2>
          <div className="h-1.5 w-16 bg-yellow-500 rounded-full mb-6"></div>
          <p className="max-w-2xl text-white/50 font-light text-lg italic">
            "A technical log of systems engineered, architectures deployed, and problems solved."
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Spine */}
          <div className="absolute left-0 md:left-[2.25rem] top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="flex flex-col gap-10">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative md:pl-24"
              >
                {/* Timeline node icon */}
                <div className={`absolute left-0 md:left-4 top-1 hidden md:flex w-10 h-10 rounded-xl items-center justify-center border backdrop-blur-md z-10 transition-all duration-500 ${
                  job.active 
                    ? 'bg-yellow-500/20 border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.2)]' 
                    : 'bg-white/5 border-white/10 group-hover:border-white/20'
                }`}>
                  {job.active ? (
                    <GitBranch className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Briefcase className="w-5 h-5 text-white/40" />
                  )}
                </div>

                {/* Job Card */}
                <div className="group/card relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
                  {/* Status Indicator for Active Role */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xl md:text-2xl font-bold tracking-tight text-white mb-1 group-hover/card:text-yellow-400 transition-colors">
                        {job.title}
                        {job.active && (
                          <div className="inline-flex w-fit items-center gap-2 px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                            <span className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest font-bold">ACTIVE_NODE</span>
                          </div>
                        )}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-mono text-white/40 uppercase tracking-widest mt-2">
                        <span className="flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-yellow-500/50" />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-yellow-500/50" />
                          {job.dates}
                        </span>
                      </div>
                    </div>

                    <ul className="grid grid-cols-1 gap-4">
                      {job.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-3 text-white/60 font-light leading-relaxed group/item">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-500/30 group-hover/item:bg-yellow-500/80 transition-colors shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {job.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-white/40 uppercase tracking-widest hover:border-yellow-500/30 hover:text-yellow-400/80 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
