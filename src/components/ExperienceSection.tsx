import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, GitBranch, Terminal } from 'lucide-react';

const jobs = [
  {
    title: "Full-Stack Software Engineer",
    company: "NE Innovation Labs",
    dates: "Dec 2025 – Present",
    type: "Full-Time",
    active: true,
    bullets: [
      "Multi-App Architecture: Designed and deployed YourOpoly, a multi-tenant mobile platform, live on App Store and Google Play.",
      "Agentic Orchestration: Engineered an event-driven agent system using Gemini API and Google AI Studio to autonomously manage player lifecycles.",
      "Infrastructure Scaling: Migrated legacy Firebase prototypes to containerized AWS ECS, supporting 1,000+ regional concurrent users.",
      "CI/CD & Code Quality: Built GitHub Actions pipelines with semantic validation gates prior to deployments.",
      "REST APIs & Real-Time: Developed scalable REST endpoints and Socket.io-based real-time infrastructure with JWT-secured multi-tenant data scoping.",
    ],
    tags: ["Flutter", "Node.js", "MySQL", "React", "AWS ECS", "Gemini API", "Socket.io"],
  },
  {
    title: "CIS Peer Tutor",
    company: "Bellevue University",
    dates: "Dec 2023 – April 2026",
    type: "Part-Time",
    active: false,
    bullets: [
      "Mentored 100+ students across full-stack development, databases, and system design.",
      "Designed structured, hands-on learning paths with a consistent focus on measurable skill growth.",
      "Conducted in-depth code reviews and guided best practices in architecture and testing.",
      "Developed curriculum materials bridging theoretical concepts with real-world practice.",
    ],
    tags: ["Full-Stack", "System Design", "Code Review", "Mentorship"],
  },
  {
    title: "Junior Web Developer / IT Support Specialist",
    company: "Pierson Wireless",
    dates: "Oct 2022 – Nov 2023",
    type: "Full-Time",
    active: false,
    bullets: [
      "Application Development: Built web-based cost estimation tool using Laravel and MySQL, automating quote generation and reducing manual workload by 40%.",
      "Service Desk & Compliance: Developed and deployed a ticket management system using Laravel with Azure CI/CD pipelines, and integrated safety compliance and hazard reporting into the company CMS, adopted company-wide.",
      "Endpoint Security & Provisioning: Automated user provisioning and directory services using JumpCloud, reducing support overhead by 50%; managed endpoint security and threat detection using CrowdStrike Falcon.",
      "Full SDLC: Collaborated across the full software development lifecycle, from requirements through production deployment.",
    ],
    tags: ["Laravel", "PHP", "Azure", "CI/CD", "MySQL", "CrowdStrike Falcon", "JumpCloud", "IT Support"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 border-t border-white/5 relative overflow-hidden group scroll-mt-24">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-500/5 to-transparent pointer-events-none" />
      
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
            <span className="h-px w-8 bg-emerald-500/40"></span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-500/60 font-medium">
              03 // DEPLOYMENT_LOG
            </span>
            <span className="h-px w-8 bg-emerald-500/40"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-4">EXPERIENCE</h2>
          <div className="h-1.5 w-16 bg-emerald-500 rounded-full mb-6"></div>
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
                    ? 'bg-emerald-500/20 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]' 
                    : 'bg-white/5 border-white/10 group-hover:border-white/20'
                }`}>
                  {job.active ? (
                    <GitBranch className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Briefcase className="w-5 h-5 text-white/40" />
                  )}
                </div>

                {/* Job Card */}
                <div className="group/card relative p-5 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
                  {/* Status Indicator for Active Role */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xl md:text-2xl font-bold tracking-tight text-white mb-1 group-hover/card:text-emerald-400 transition-colors">
                        {job.title}
                        {job.active && (
                          <div className="inline-flex w-fit items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest font-bold">ACTIVE_NODE</span>
                          </div>
                        )}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-mono text-white/40 uppercase tracking-widest mt-2">
                        <span className="flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-emerald-500/50" />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-emerald-500/50" />
                          {job.dates}
                        </span>
                      </div>
                    </div>

                    <ul className="grid grid-cols-1 gap-4">
                      {job.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-3 text-white/60 font-light leading-relaxed group/item">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500/30 group-hover/item:bg-emerald-500/80 transition-colors shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {job.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-white/40 uppercase tracking-widest hover:border-emerald-500/30 hover:text-emerald-400/80 transition-all"
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
