import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, BrainCircuit } from "lucide-react";

const SKILLS = [
  { name: "AI Agent Orchestration", icon: BrainCircuit, color: "text-amber-400" },
  { name: "Software Development", icon: Code2, color: "text-yellow-400" },
  { name: "Web Development", icon: Globe, color: "text-orange-400" },
  { name: "Mobile Development", icon: Smartphone, color: "text-yellow-500" },
];

export const SkillShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
      {SKILLS.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, translateY: -5 }}
          className="group relative flex flex-col items-center p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/[0.08]"
        >
          {/* Animated Background Pulse */}
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-yellow-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className={`p-4 rounded-xl bg-white/5 mb-4 group-hover:ring-2 group-hover:ring-yellow-500/50 transition-all`}>
            <skill.icon className={`w-8 h-8 ${skill.color}`} />
          </div>
          
          <h3 className="text-lg font-medium tracking-tight text-white mb-2 italic">
            {skill.name}
          </h3>
          
          <div className="h-1 w-0 bg-yellow-500 group-hover:w-full transition-all duration-300 rounded-full" />
        </motion.div>
      ))}
    </div>
  );
};