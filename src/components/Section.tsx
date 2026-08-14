import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="shell scroll-mt-24 py-20 sm:py-28">
      <Reveal>
        <div className="rule-top pt-6">
          <div className="flex items-baseline gap-4">
            <span className="label text-accent">{index}</span>
            <span className="label">{label}</span>
          </div>
          <h2 className="section-title mt-6 max-w-2xl">{title}</h2>
          {intro && <p className="mt-4 max-w-xl text-ink-muted">{intro}</p>}
        </div>
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
