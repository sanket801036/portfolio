import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="chip mb-4">Career</span>
          <h2 className="section-title">
            <span className="gradient-text">Experience</span> Timeline
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-violet to-accent-pink" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative mb-10 md:mb-16 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-10" : "md:pr-10 md:ml-auto md:pl-10 md:pr-0"
              } pl-12 md:pl-0`}
            >
              <div
                className={`absolute top-4 left-2.5 md:left-auto ${
                  i % 2 === 0 ? "md:-right-[9px]" : "md:-left-[9px]"
                } w-4 h-4 rounded-full bg-gradient-to-br from-accent-cyan to-accent-violet shadow-glow ring-4 ring-bg`}
              />

              <div className="glass p-6 glow-border">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-3 text-sm text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Building2 size={14} /> {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full ${
                    exp.current
                      ? "bg-accent-lime/15 text-accent-lime border border-accent-lime/30"
                      : "bg-white/5 text-slate-400 border border-white/10"
                  }`}>
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-300 leading-relaxed">
                      <span className="text-accent-violet flex-shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span key={t} className="chip !text-[10px]">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
