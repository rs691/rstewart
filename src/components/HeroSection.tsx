import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-12 pb-24 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0, 0.55, 0.45, 1] }}
      >
        {/* Profile image with EKG orbs */}
        <div className="relative mb-12 group">
          {/* EKG Pulse orbs — behind image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute h-0.5 bg-linear-to-l from-transparent via-yellow-400/60 to-transparent"
                style={{
                  width: "40%",
                  top: i === 0 ? "40%" : i === 1 ? "60%" : "80%",
                }}
                initial={{ right: "-20%", opacity: 0 }}
                animate={{ right: ["-20%", "120%"], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.8,
                }}
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
              </motion.div>
            ))}
          </div>

          {/* Pulsing ring */}
          <motion.div
            className="absolute -inset-2 rounded-full border border-white/5 z-0"
            animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <img
            src="/images/profile1.png"
            alt="Robert Stewart"
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500 z-10"
          />
        </div>

        {/* Online badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/5 border border-yellow-500/10 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500" />
          </span>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-yellow-300">
            System Online: Version 2026.04.04
          </span>
        </div>

        {/* Name + title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1] mb-8 bg-gradient-to-b from-white via-white to-yellow-500/30 bg-clip-text text-transparent">
          ROBERT STEWART <br className="hidden md:block" />
          <span className="italic font-light">FULL</span> STACK DEVELOPER
        </h1>

        <p className="max-w-xl mx-auto text-base md:text-lg text-white/50 font-light leading-relaxed">
          Software Developer focused on building robust architectures and
          exploring the intersection of traditional development and agent-based
          automation.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;