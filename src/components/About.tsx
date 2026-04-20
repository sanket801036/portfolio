import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react";
import { education, profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="chip mb-4">About Me</span>
          <h2 className="section-title">
            Engineer at the intersection of <span className="gradient-text">AI & Web</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 glow-border"
          >
            <Code2 className="text-accent-violet mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">What I Do</h3>
            <p className="text-slate-400 leading-relaxed">
              I ship production-grade AI systems — from RAG chatbots and computer-vision pipelines
              to full-stack React & Flask apps. I care about clean architecture, CI/CD hygiene and
              shipping things that stay up at 99.9% uptime.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-300">
              <MapPin size={14} className="text-accent-cyan" /> {profile.location}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass p-8 glow-border"
          >
            <Briefcase className="text-accent-cyan mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">Current Focus</h3>
            <ul className="space-y-2 text-slate-400 text-sm leading-relaxed">
              <li className="flex gap-2"><span className="text-accent-cyan">▸</span> Image-RAG & vector search for e-commerce</li>
              <li className="flex gap-2"><span className="text-accent-violet">▸</span> React + React Native production apps</li>
              <li className="flex gap-2"><span className="text-accent-pink">▸</span> LLM agents & multi-agent orchestration</li>
              <li className="flex gap-2"><span className="text-accent-lime">▸</span> AWS Fargate / App Runner deployments</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 glass p-8 glow-border"
          >
            <GraduationCap className="text-accent-pink mb-4" size={32} />
            <h3 className="text-xl font-bold mb-5">Education</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {education.map((e) => (
                <div key={e.degree} className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-sm text-accent-cyan font-mono">{e.year}</div>
                  <div className="font-semibold mt-1">{e.degree}</div>
                  <div className="text-slate-400 text-sm mt-1">{e.school}</div>
                  <div className="text-slate-500 text-xs mt-1">{e.university}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
