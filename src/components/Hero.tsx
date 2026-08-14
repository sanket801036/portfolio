import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile, stats } from "../data/portfolio";

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="top" className="shell pb-20 pt-16 sm:pb-28 sm:pt-24">
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
      >
        <motion.div variants={rise} transition={{ duration: 0.5 }} className="flex items-center gap-3">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="label">Open to new opportunities</span>
        </motion.div>

        <motion.h1
          variants={rise}
          transition={{ duration: 0.6 }}
          className="display mt-8 text-6xl sm:text-7xl md:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={rise}
          transition={{ duration: 0.5 }}
          className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-muted sm:text-2xl"
        >
          {profile.title}. {profile.lead}
        </motion.p>

        <motion.div
          variants={rise}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-ink-faint"
        >
          <span>{profile.location}</span>
          <span className="text-rule">/</span>
          <span>3 years experience</span>
          <span className="text-rule">/</span>
          <span>Python · AI · Cloud</span>
        </motion.div>

        <motion.div
          variants={rise}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          <a
            href="#work"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            View selected work
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex items-center gap-1 text-sm"
          >
            GitHub <ArrowUpRight size={13} />
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex items-center gap-1 text-sm"
            >
              Résumé <ArrowUpRight size={13} />
            </a>
          )}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(
              "Hello Sanket — via your portfolio"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex items-center gap-1 text-sm"
          >
            Email <ArrowUpRight size={13} />
          </a>
        </motion.div>

        <motion.dl
          variants={rise}
          transition={{ duration: 0.5 }}
          className="rule-top mt-16 grid grid-cols-2 gap-x-6 gap-y-8 pt-8 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="display text-4xl text-accent sm:text-5xl">{s.value}</dt>
              <dd className="mt-2 text-sm leading-snug text-ink-faint">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
