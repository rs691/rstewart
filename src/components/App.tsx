import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@heroui/react";
import { OrchestrationGrid } from "./OrchestrationGrid";
import { SkillShowcase } from "./SkillShowcase";
import { AboutSection } from "./AboutSection";
import { ExperienceSection } from "./ExperienceSection";
import { ProjectsSection } from "./ProjectsSection";
import { Cpu, Terminal, BrainCircuit } from "lucide-react";

const TypewriterCode = () => {
  const codeLines = [
    "> system.check_health()",
    "STATUS: NOMINAL",
    "> node_utilization --avg",
    "CPU: 12.4% | MEM: 4.2GB",
    "> logs.tail(2)",
    "[INFO] Auth process initialized",
    "[OK] Deployment verified"
  ];

  const [displayText, setDisplayText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < codeLines.length) {
      if (charIndex < codeLines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + codeLines[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + "\n");
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 500);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setLineIndex(0);
        setCharIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="mt-4 p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-sm sm:text-sm text-emerald-500/60 min-h-[120px] backdrop-blur-sm shadow-inner group-hover:border-emerald-500/20 transition-colors">
      <div className="flex gap-1.5 mb-3 opacity-30">
        <div className="w-2 h-2 rounded-full bg-red-500" />
        <div className="w-2 h-2 rounded-full bg-emerald-500" />
        <div className="w-2 h-2 rounded-full bg-green-500" />
      </div>
      <pre className="whitespace-pre-wrap leading-relaxed">
        {displayText}
        <span className="w-1.5 h-3 bg-emerald-500 inline-block align-middle ml-1 animate-pulse" />
      </pre>
    </div>
  );
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Setup parallax scroll tracking
  const { scrollYProgress } = useScroll();
  
  // Create transforms based on scroll position
  // Background moves slightly down as you scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Hero section moves down faster than normal scrolling for a depth effect
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // Hero opacity fades out as you scroll down
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-[#09090b] text-white selection:bg-emerald-500/30 selection:text-emerald-200">
      <motion.div 
        className="fixed inset-0 z-0 pointer-events-none opacity-40 bg-cover bg-center bg-no-repeat grayscale brightness-50 contrast-125 blur-xl"
        style={{ 
          backgroundImage: 'url("/images/bp4.png")',
          y: bgY
        }}
      />
      <OrchestrationGrid />
      
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md">
        <div className="flex items-center gap-2 min-w-0">
          <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 shrink-0" />
          <span className="font-mono text-[10px] sm:text-xs md:text-sm tracking-widest text-white/90 uppercase pt-0.5 truncate">
            <span className="hidden min-[400px]:inline">SOFTWARE </span>DEVELOPER{" "}
            <span className="text-emerald-500/80">v2026.05.02</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-mono uppercase tracking-widest text-white/50">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Stack</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#methodology" className="hover:text-white transition-colors">Methodology</a>
          <Button 
            className="h-8 px-4 font-mono text-xs tracking-widest uppercase border border-white/10 hover:bg-white/5 transition-all text-white hover:text-emerald-400 hover:border-emerald-500/50"
            variant="ghost"
            onPress={() => { window.location.href = "mailto:rms.dev@outlook.com"; }}
          >
            Contact
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((s) => !s)}
            className="inline-flex items-center justify-center p-2 rounded-md border border-white/8 bg-[#0b0b0c]/60"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      {/* Mobile nav panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 z-40 bg-[#09090b]/95 border-b border-white/6 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3 py-4 text-white/80 font-mono uppercase tracking-wider">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 hover:text-white w-full text-center">About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 hover:text-white w-full text-center">Stack</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 hover:text-white w-full text-center">Experience</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 hover:text-white w-full text-center">Projects</a>
            <a href="#methodology" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 hover:text-white w-full text-center">Methodology</a>
            <a href="mailto:rms.dev@outlook.com" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 hover:text-emerald-400 w-full text-center border-t border-white/6">Contact</a>
          </div>
        </div>
      )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-hidden min-h-screen flex flex-col relative z-10">
        {/* Hero Section */}
        <section className="relative pt-12 pb-24 flex flex-col items-center text-center">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0, 0.55, 0.45, 1] }}
            >
            <div className="relative mb-12 group">
              {/* EKG Pulse / Drawing Orbs Animation - Behind Image */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute h-0.5 bg-linear-to-l from-transparent via-emerald-400/60 to-transparent"
                    style={{ 
                      width: '40%',
                      top: i === 0 ? '40%' : i === 1 ? '60%' : '80%',
                    }}
                    initial={{ right: '-20%', opacity: 0 }}
                    animate={{ 
                      right: ['-20%', '120%'],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.8,
                    }}
                  >
                    {/* The "Orb" Head */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
                  </motion.div>
                ))}
              </div>

              {/* Subtle pulsing ring */}
              <motion.div 
                className="absolute -inset-3 rounded-full border border-white/5 z-0"
                animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <img 
                src="/images/profile1.png" 
                alt="Profile" 
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500 z-10"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 mb-6 sm:mb-8 max-w-[95vw]">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-emerald-300 text-left">
                System Online: Build 2026.05.02
              </span>
            </div>
            
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-8 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent uppercase">
              ROBERT <br className="block sm:hidden md:block" /> STEWART
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 font-light leading-relaxed">
              Software Developer focused on building <span className="text-white/80 font-normal">robust architectures</span> and exploring the intersection 
              of traditional development and <span className="text-emerald-500/80 font-normal">agent-based automation</span>.
            </p>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Skill Showcase */}
        <section id="skills" className="py-20 border-t border-white/5 relative overflow-hidden scroll-mt-24">
          {/* Section Diagnostic Pulse */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <motion.div 
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
              initial={{ top: '10%', left: '-100%' }}
              whileInView={{ left: '100%' }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-emerald-500/40"></span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-500/60 font-medium">
                02 // TECH_STACK
              </span>
              <span className="h-px w-8 bg-emerald-500/40"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 uppercase">ENGINEERING STACK</h2>
            <div className="h-1.5 w-16 bg-emerald-500 rounded-full mb-6" />
            <p className="max-w-2xl text-white/50 font-light text-lg">
              Building systems that are scalable, maintainable, and robust.
              Exploring the potential of agent-assisted development with a focus on core software principles.
            </p>
          </div>
          <SkillShowcase />
        </section>

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Core Methodology Section */}
        <section id="methodology" className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-white/5 relative overflow-hidden scroll-mt-24">
          {/* Section Diagnostic Pulse */}
          <div className="absolute inset-x-0 top-1/4 h-px z-0 pointer-events-none opacity-20">
             <motion.div 
              className="absolute h-[1px] w-1/3 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"
              initial={{ left: '-40%' }}
              whileInView={{ left: '120%' }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-8 bg-emerald-500/40"></span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-500/60 font-medium">
                05 // METHODOLOGY
              </span>
              <span className="h-px w-8 bg-emerald-500/40"></span>
            </div>
            <div className="inline-block p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <BrainCircuit className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[0.9]">SYSTEMS-FIRST DEVELOPMENT</h2>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              In a rapidly evolving landscape, I focus on the fundamentals of building great software. 
              By combining traditional development practices with emerging automation tools, 
              I build production-grade applications that leverage the best of both worlds.
            </p>
            <ul className="space-y-3 font-mono text-sm uppercase tracking-wider text-emerald-400">
              <li className="flex items-center gap-3">
                <span className="w-5 h-[1.5px] bg-emerald-400" />
                Robust Architecture Design
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-[1.5px] bg-emerald-400" />
                Intelligent Tool Integration
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-[1.5px] bg-emerald-400" />
                Data-Driven Development
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group aspect-square lg:aspect-video rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-br from-emerald-500/10 to-[#16171D]"
          >
            <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-linear-to-t from-[#16171D] via-[#16171D]/60 to-transparent">
              <div className="flex items-center gap-3 mb-2">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-white/50">System Diagnostics</span>
              </div>
              <TypewriterCode />
              <p className="text-base font-light text-white/80 mt-6">
                Currently focused on scalable architectures and resilient deployment pipelines.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-white/30 text-sm font-mono tracking-widest uppercase scroll-mt-24">
          <p>© 2026. ALL SYSTEMS NOMINAL.</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <a href="mailto:rms.dev@outlook.com" className="hover:text-white transition-all">EMAIL</a>
            <a href="https://github.com/rs691" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">GITHUB</a>
            <a href="https://www.linkedin.com/in/robert-stewart-m" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all text-emerald-500/80">LINKEDIN</a>
            <a href="https://bellevue.joinhandshake.com/profiles/robertstewart" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">HANDSHAKE</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App