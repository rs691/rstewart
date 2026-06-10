import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Cpu } from "lucide-react";

const TypewriterCode = () => {
  const codeLines = [
    "> system.check_health()",
    "STATUS: NOMINAL",
    "> node_utilization --avg",
    "CPU: 12.4% | MEM: 4.2GB",
    "> logs.tail(2)",
    "[INFO] Auth process initialized",
    "[OK] Deployment verified",
  ];

  const [displayText, setDisplayText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < codeLines.length) {
      if (charIndex < codeLines[lineIndex].length) {
        const t = setTimeout(() => {
          setDisplayText((prev) => prev + codeLines[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setDisplayText((prev) => prev + "\n");
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 500);
        return () => clearTimeout(t);
      }
    } else {
      const t = setTimeout(() => {
        setDisplayText("");
        setLineIndex(0);
        setCharIndex(0);
      }, 3000);
      return () => clearTimeout(t);
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="mt-4 p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-[10px] text-emerald-500/60 min-h-[120px] backdrop-blur-sm shadow-inner group-hover:border-emerald-500/20 transition-colors">
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

export const MethodologySection = () => {
  return (
    <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-white/5 relative overflow-hidden">
      {/* Diagnostic pulse line */}
      <div className="absolute inset-x-0 top-1/4 h-px z-0 pointer-events-none opacity-20">
        <motion.div
          className="absolute h-[1px] w-1/3 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"
          initial={{ left: "-40%" }}
          whileInView={{ left: "120%" }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="inline-block p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
          <BrainCircuit className="w-8 h-8 text-emerald-400" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
          SYSTEMS-FIRST DEVELOPMENT
        </h2>
        <p className="text-lg text-white/60 font-light leading-relaxed">
          In a rapidly evolving landscape, I focus on the fundamentals of
          building great software. By combining traditional development practices
          with emerging automation tools, I build production-grade applications
          that leverage the best of both worlds.
        </p>
        <ul className="space-y-4 font-mono text-sm uppercase tracking-wider text-emerald-300/80">
          {["Robust Architecture Design", "Intelligent Tool Integration", "Data-Driven Development"].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="w-5 h-[1px] bg-emerald-500/50" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative group aspect-square lg:aspect-video rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-br from-emerald-500/10 to-[#16171D]"
      >
        <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-[#16171D] via-[#16171D]/60 to-transparent">
          <div className="flex items-center gap-3 mb-2">
            <Cpu className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">
              System Diagnostics
            </span>
          </div>
          <TypewriterCode />
          <p className="text-sm font-light text-white/80 mt-6">
            Operating with 99.9% uptime across production environments. Focusing
            on scalable architectures and robust deployment pipelines.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default MethodologySection;