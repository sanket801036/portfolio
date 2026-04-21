import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { profile, stats } from "../data/portfolio";

function useTypewriter(words: string[], speed = 80, pause = 1500) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const timer = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setDeleting(false);
            setIndex((i) => i + 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding pt-32"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 mb-6"
          >
            <Sparkles size={14} className="text-accent-violet" />
            Available for new opportunities
            <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
          >
            Hi, I'm <span className="gradient-text">{profile.name.split(" ")[0]}</span>
            <br />
            <span className="text-slate-300 text-3xl md:text-5xl font-bold">
              I build{" "}
              <span className="gradient-text font-mono">
                {typed}
                <span className="inline-block w-[3px] h-8 md:h-12 bg-accent-violet ml-1 translate-y-1 animate-pulse" />
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-slate-400 text-base md:text-lg max-w-xl leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-pink text-white font-semibold shadow-glow hover:shadow-glow-cyan transition-all"
            >
              View Projects
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass hover:bg-white/10 text-slate-200 font-semibold transition-colors"
            >
              <Mail size={16} /> Get in touch
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass hover:bg-white/10 text-slate-200 font-semibold transition-colors"
            >
              <Download size={16} /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="glass p-4">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-cyan via-accent-violet to-accent-pink blur-2xl opacity-40 animate-pulse" />
            <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow" />
            <div className="absolute inset-6 rounded-full border border-white/10 animate-spin-slow" style={{ animationDirection: "reverse" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-accent-violet via-accent-pink to-accent-cyan p-1 shadow-glow animate-float">
                <img
                  src="https://avatars.githubusercontent.com/sanket801036"
                  alt="Sanket Kolhe"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            {["LangChain", "React", "AWS", "Python", "Docker"].map((tech, i) => {
              const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
              const radius = 105;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <div
                  key={tech}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                  }}
                >
                  <motion.div
                    className="chip !text-[10px] shadow-lg"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {tech}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={22} />
        </motion.div>
      </a>
    </section>
  );
}
