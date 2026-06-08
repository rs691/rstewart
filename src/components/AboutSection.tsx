import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Layers, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

const stats = [
  { value: "3+",   label: "Years Building" },
  { value: "100+", label: "Students Mentored" },
  { value: "1K+",  label: "Concurrent Users" },
  { value: "35%",  label: "Onboarding Reduction" },
];

const education = [
  { degree: "M.S. Data Science",        school: "Bellevue University",          years: "Expected 2027", active: true  },
  { degree: "B.S. Software Development", school: "Bellevue University",          years: "2022 – 2025", active: false },
  { degree: "A.A. Computer Science",    school: "Iowa Western C.C.",            years: "2019 – 2022", active: false },
];

const awards = ["Omega Nu Lambda", "Gottsch Scholarship", "DREAM Scholarship"];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 border-t border-white/5 relative overflow-hidden group scroll-mt-24">
      {/* Ambient scan line simulated with framer-motion */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.div 
          className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent absolute top-0"
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-yellow-500/40"></span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-yellow-500/60 font-medium">
              01 // SYSTEM_PROFILE
            </span>
            <span className="h-px w-8 bg-yellow-500/40"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">ABOUT</h2>
          <div className="h-1 w-12 bg-yellow-500 rounded-full"></div>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 px-4 sm:px-0">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center justify-center p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-yellow-500/20 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-yellow-400 transition-colors mb-1">
                {stat.value}
              </span>
              <span className="font-mono text-xs lowercase tracking-widest text-white/40 font-medium text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Two-column: Bio + Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-0">
          {/* Bio card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-white/5 bg-white/[0.03] flex flex-col gap-6 backdrop-blur-sm hover:border-white/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <User className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-white/50 font-medium">
                Profile // Bio
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-base text-white/70 font-light leading-relaxed">
                I'm a full-stack engineer who builds production systems — the kind that handle real users,
                real data, and real scale. At NE Innovation Labs, I architected a multi-tenant,
                location-based mobile commerce platform from the ground up: Flutter and Node.js
                on the backend, MySQL for data persistence, and AWS ECS for containerized infrastructure.
              </p>

              <p className="text-base text-white/70 font-light leading-relaxed">
                I spent two years mentoring 100+ students at Bellevue University, improving
                outcomes by 20% through structured reviews and system design guidance. Currently
                pursuing my M.S. in Data Science — bridging engineering with machine learning
                and intelligent, data-driven systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-mono text-[10px] sm:text-xs uppercase tracking-wider font-medium">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-500/70" />
                Council Bluffs, IA
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-mono text-[10px] sm:text-xs uppercase tracking-wider font-medium">
                <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-500/70" />
                Open to Remote
              </div>
            </div>
          </motion.div>

          {/* Education & Awards card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-white/5 bg-white/[0.03] flex flex-col gap-8 backdrop-blur-sm hover:border-white/10 transition-colors"
          >
            {/* Education section */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                  <GraduationCap className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-white/50 font-medium">
                  Education // Timeline
                </span>
              </div>

              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div key={i} className="flex gap-4 group/edu relative">
                    {/* Timeline line */}
                    {i !== education.length - 1 && (
                      <div className="absolute left-[11px] top-6 w-[1px] h-[calc(100%+8px)] bg-white/5" />
                    )}
                    
                    <div className={`mt-1.5 w-[22px] h-[22px] rounded-full border ${edu.active ? 'border-yellow-500 bg-yellow-500/20' : 'border-white/10 bg-white/5'} flex items-center justify-center shrink-0 z-10 transition-colors`}>
                      <div className={`w-2 h-2 rounded-full ${edu.active ? 'bg-yellow-400' : 'bg-white/20'}`} />
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold tracking-tight text-white group-hover/edu:text-yellow-400 transition-colors">
                          {edu.degree}
                        </span>
                        {edu.active && (
                          <span className="px-1.5 py-0.5 rounded-md bg-yellow-500/10 border border-yellow-500/20 text-[10px] text-yellow-500 font-mono uppercase tracking-widest">
                            In Progress
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-white/40 font-mono uppercase tracking-widest mt-0.5">
                        {edu.school} — {edu.years}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards section */}
            <div className="flex flex-col gap-6 pt-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                  <Award className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-white/50 font-medium">
                  Recognition // Awards
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {awards.map((award, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5 group/award hover:border-yellow-500/20 transition-all">
                    <CheckCircle2 className="w-4 h-4 text-yellow-500/60 group-hover/award:text-yellow-400 transition-colors" />
                    <span className="text-xs font-mono uppercase tracking-widest text-white/60 group-hover/award:text-white transition-colors">
                      {award}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
