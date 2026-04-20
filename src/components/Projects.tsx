import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="chip mb-4">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Production-grade AI and full-stack systems — from RAG pipelines to mobile apps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative glass p-0 overflow-hidden glow-border"
            >
              <div className={`h-32 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-bg/30" />
                <div className="absolute inset-0 grid-bg opacity-50" />
                {p.featured && (
                  <span className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full bg-black/50 backdrop-blur text-accent-lime border border-accent-lime/30">
                    <Star size={10} className="fill-accent-lime" /> Featured
                  </span>
                )}
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <h3 className="text-lg font-bold text-white leading-tight drop-shadow-lg">
                    {p.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-white opacity-60 group-hover:opacity-100 group-hover:rotate-12 transition-all flex-shrink-0"
                  />
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm text-slate-400 leading-relaxed min-h-[70px]">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="chip !text-[10px] !py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
