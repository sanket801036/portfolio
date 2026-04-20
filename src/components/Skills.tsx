import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="chip mb-4">Tech Stack</span>
          <h2 className="section-title">
            Tools I <span className="gradient-text">ship with</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            From modern AI stacks to battle-tested backend frameworks and cloud-native deploys.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass p-6 glow-border group"
            >
              <div className={`inline-block text-xs font-mono uppercase tracking-wider bg-gradient-to-r ${group.color} bg-clip-text text-transparent mb-4`}>
                {group.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <motion.span
                    key={s}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="chip"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
