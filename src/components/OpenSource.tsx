import { ArrowUpRight } from "lucide-react";
import Section, { Reveal } from "./Section";
import { openSource } from "../data/portfolio";

export default function OpenSource() {
  return (
    <Section
      id="open-source"
      index="04"
      label="Open source"
      title="Reading other people's stack traces."
      intro="Triage and root-cause work on public repositories — the analysis, not just the patch."
    >
      <div className="border-t border-rule">
        {openSource.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <article className="grid gap-4 border-b border-rule py-8 md:grid-cols-[12rem_1fr] md:gap-8">
              <div className="md:pt-1">
                <p className="label">{c.date}</p>
                <p className="mt-2 font-mono text-sm text-ink">{c.project}</p>
                <p className="tag mt-1">{c.org}</p>
                <p className="tag mt-1">{c.scale}</p>
              </div>

              <div>
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
                <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">{c.description}</p>
                <p className="tag mt-4">{c.tags.join("  ·  ")}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
