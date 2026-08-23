import React from 'react';
import { motion } from 'motion/react';
import { User, MapPin, Layers, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

const highlights = [
  { label: "Mobile & web apps" },
  { label: "Teaching & mentoring" },
  { label: "Cloud platforms" },
  { label: "Full-stack development" },
];

const education = [
  { degree: "M.S. Data Science",        school: "Bellevue University",          years: "Jun 2025 – Jun 2028", active: true  },
  { degree: "B.S. Software Development", school: "Bellevue University",          years: "May 2022 – Jun 2025", active: false },
  { degree: "A.A. Computer Science",    school: "Iowa Western Community College", years: "May 2019 – May 2022", active: false },
];

const awards = ["Omega Nu Lambda National Honor Society", "Darrel H. Gottsch Endowed Scholarship", "DREAM Scholarship"];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 border-t border-white/5 relative overflow-hidden group scroll-mt-24">
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.div 
          className="h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent absolute top-0"
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-emerald-500/40"></span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-500/60 font-medium">
              01 // ABOUT
            </span>
            <span className="h-px w-8 bg-emerald-500/40"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">About</h2>
          <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {highlights.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-emerald-500/20 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-base md:text-lg font-medium tracking-tight text-white/80 text-center leading-snug">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-5 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.03] flex flex-col gap-6 backdrop-blur-sm hover:border-white/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <User className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-white/50 font-medium">
                A little about me
              </span>
            </div>

            <div className="space-y-5">
              <p className="text-base md:text-lg text-white/80 font-light leading-relaxed">
                I build software that real people use — mobile apps, websites, and the systems behind them.
                I've shipped apps on the App Store and Google Play, and I care about making things secure,
                reliable, and straightforward to maintain.
              </p>

              <p className="text-base md:text-lg text-white/80 font-light leading-relaxed">
                I also enjoy teaching. At Bellevue University I help students learn programming and work
                through real problems step by step. I'm working toward a master's in data science to keep
                growing in that direction.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 font-mono text-xs uppercase tracking-wider font-medium">
                <MapPin className="w-3.5 h-3.5 text-emerald-500/70" />
                Council Bluffs, IA
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 font-mono text-xs uppercase tracking-wider font-medium">
                <Layers className="w-3.5 h-3.5 text-emerald-500/70" />
                Open to remote
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-5 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.03] flex flex-col gap-8 backdrop-blur-sm hover:border-white/10 transition-colors"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <GraduationCap className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-white/50 font-medium">
                  Education
                </span>
              </div>

              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div key={i} className="flex gap-4 group/edu relative">
                    {i !== education.length - 1 && (
                      <div className="absolute left-[11px] top-6 w-[1px] h-[calc(100%+8px)] bg-white/5" />
                    )}
                    
                    <div className={`mt-1.5 w-[22px] h-[22px] rounded-full border ${edu.active ? 'border-emerald-500 bg-emerald-500/20' : 'border-white/10 bg-white/5'} flex items-center justify-center shrink-0 z-10 transition-colors`}>
                      <div className={`w-2 h-2 rounded-full ${edu.active ? 'bg-emerald-400' : 'bg-white/20'}`} />
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-base font-bold tracking-tight text-white group-hover/edu:text-emerald-400 transition-colors">
                          {edu.degree}
                        </span>
                        {edu.active && (
                          <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-500 font-mono uppercase tracking-widest">
                            In progress
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-white/60 font-light mt-1">
                        {edu.school} · {edu.years}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <Award className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-white/50 font-medium">
                  Awards & scholarships
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {awards.map((award, i) => (
                  <div key={i} className="flex items-start gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5 group/award hover:border-emerald-500/20 transition-all">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500/60 group-hover/award:text-emerald-400 transition-colors shrink-0" />
                    <span className="text-sm text-white/75 group-hover/award:text-white transition-colors leading-relaxed">
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
