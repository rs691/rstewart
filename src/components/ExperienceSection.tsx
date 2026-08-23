import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, GitBranch } from 'lucide-react';

const jobs = [
  {
    title: "Full-Stack Software Engineer",
    company: null as string | null,
    dates: "Dec 2025 – Present",
    active: true,
    bullets: [
      "Built and launched YourOpoly, a community rewards app where people visit local businesses, earn points, and redeem deals — available on iPhone and Android.",
      "Added thoughtful automation behind the scenes to help manage player activity and keep the experience running smoothly.",
      "Moved the product from early prototypes to a stable cloud setup designed to grow as more regions and users come onboard.",
      "Set up automated release pipelines so updates reach the app stores and servers with less manual work and fewer surprises.",
      "Built the login and messaging layers so each organization's data stays separate and secure.",
    ],
  },
  {
    title: "CIS Peer Tutor",
    company: "Bellevue University",
    dates: "Dec 2023 – April 2026",
    active: false,
    bullets: [
      "Helped students learn programming, database design, and how to approach software problems with confidence.",
      "Reviewed student code with a focus on clarity, good habits, and practical design choices.",
      "Created study guides and review materials used across several computer science courses.",
    ],
  },
  {
    title: "Junior Web Developer / IT Support Specialist",
    company: "Pierson Wireless",
    dates: "Oct 2022 – Nov 2023",
    active: false,
    bullets: [
      "Built internal business applications with modern web tools and a Microsoft-based stack.",
      "Created a web tool that made quoting and cost estimates faster for the team.",
      "Added safety reporting, hazard tracking, and a help desk system into the company website — tools the whole company ended up using daily.",
      "Streamlined how new users were set up on company devices and helped keep workstations secure.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 border-t border-white/5 relative overflow-hidden group scroll-mt-24">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-500/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
              03 // EXPERIENCE
            </span>
            <span className="h-px w-8 bg-emerald-500/40"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-4">Experience</h2>
          <div className="h-1.5 w-16 bg-emerald-500 rounded-full mb-6"></div>
          <p className="max-w-2xl text-white/75 font-light text-base md:text-lg leading-relaxed">
            A snapshot of roles where I've built apps, supported teams, and helped people learn along the way.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
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

                <div className="group/card relative p-5 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xl md:text-2xl font-bold tracking-tight text-white mb-1 group-hover/card:text-emerald-400 transition-colors">
                        {job.title}
                        {job.active && (
                          <div className="inline-flex w-fit items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs font-medium text-emerald-400">Current role</span>
                          </div>
                        )}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/60 mt-2">
                        {job.company && (
                          <span className="font-medium text-white/70">{job.company}</span>
                        )}
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-emerald-500/50" />
                          {job.dates}
                        </span>
                      </div>
                    </div>

                    <ul className="grid grid-cols-1 gap-4">
                      {job.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-3 text-base text-white/75 font-light leading-relaxed group/item">
                          <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-emerald-500/40 group-hover/item:bg-emerald-500/80 transition-colors shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
