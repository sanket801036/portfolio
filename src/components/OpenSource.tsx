import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Section, { Reveal } from "./Section";
import { openSource, openSourceStats } from "../data/portfolio";
import type { OpenSourceEntry } from "../data/portfolio";

const toneClass = {
  merged: "border-accent text-accent",
  open: "border-rule text-ink",
  closed: "border-rule text-ink-faint",
} as const;

function StatusPill({ status }: { status: NonNullable<OpenSourceEntry["status"]> }) {
  return (
    <span
      className={`inline-block shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${toneClass[status.tone]}`}
    >
      {status.label}
    </span>
  );
}

function CaseStudy({ caseStudy }: { caseStudy: NonNullable<OpenSourceEntry["caseStudy"]> }) {
  return (
    <div className="mt-6 border-l border-rule pl-5 sm:pl-6">
      <p className="tag">{caseStudy.stack.join("  ·  ")}</p>

      <div className="mt-6 space-y-7">
        {caseStudy.sections.map((s) => (
          <div key={s.heading}>
            <h4 className="label text-accent">{s.heading}</h4>
            <p className="mt-2 max-w-2xl leading-relaxed text-ink-muted">{s.body}</p>
            {s.code && (
              <pre className="mt-3 max-w-2xl overflow-x-auto rounded-lg border border-rule bg-paper-raised p-4 font-mono text-xs leading-relaxed text-ink-muted">
                <code>{s.code}</code>
              </pre>
            )}
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
        {caseStudy.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex items-center gap-1 text-sm"
          >
            {l.label} <ArrowUpRight size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}

function Entry({ contribution }: { contribution: OpenSourceEntry }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const c = contribution;

  return (
    <article className="grid gap-4 border-b border-rule py-8 md:grid-cols-[12rem_1fr] md:gap-8">
      <div className="md:pt-1">
        <p className="label">{c.date}</p>
        <p className="mt-2 font-mono text-sm text-ink">{c.project}</p>
        <p className="tag mt-1">{c.org}</p>
        <p className="tag mt-1">{c.scale}</p>
      </div>

      <div>
        <div className="flex flex-wrap items-start gap-x-3 gap-y-2">
          <a
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-start gap-2"
          >
            <h3 className="display text-2xl transition-colors group-hover:text-accent sm:text-3xl">
              {c.title}
            </h3>
            <ArrowUpRight
              size={18}
              className="mt-1.5 shrink-0 text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </a>
          {c.status && (
            <span className="mt-1.5">
              <StatusPill status={c.status} />
            </span>
          )}
        </div>

        <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">{c.description}</p>
        <p className="tag mt-4">{c.tags.join("  ·  ")}</p>

        {c.caseStudy && (
          <>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-rule px-4 py-1.5 font-mono text-[11px] uppercase tracking-label text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              {open ? "Hide details" : "More information"}
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <CaseStudy caseStudy={c.caseStudy} />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </article>
  );
}

export default function OpenSource() {
  return (
    <Section
      id="open-source"
      index="04"
      label="Open source"
      title="Reading other people's stack traces."
      intro="Merged fixes and root-cause work on public repositories — the analysis, not just the patch. Open any entry for the full write-up: what broke, how I found it, and what I chose not to change."
    >
      <Reveal>
        <dl className="mb-14 grid grid-cols-1 gap-8 border-y border-rule py-8 sm:grid-cols-3">
          {openSourceStats.map((s) => (
            <div key={s.label}>
              <dt className="display text-4xl text-accent sm:text-5xl">{s.value}</dt>
              <dd className="mt-2 text-sm leading-snug text-ink-faint">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <div className="border-t border-rule">
        {openSource.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <Entry contribution={c} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
