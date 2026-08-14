import Section, { Reveal } from "./Section";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" index="03" label="Experience" title="Where I've shipped.">
      <div className="border-t border-rule">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.05}>
            <article className="grid gap-6 border-b border-rule py-10 md:grid-cols-[11rem_1fr] md:gap-8">
              <div className="md:pt-1">
                <p className="label">{exp.period}</p>
                {exp.current && (
                  <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11px] text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Current
                  </p>
                )}
              </div>

              <div>
                <h3 className="display text-3xl">{exp.role}</h3>
                <p className="mt-1 text-ink-muted">
                  {exp.company} <span className="text-rule">·</span> {exp.location}
                </p>

                <ul className="mt-5 space-y-3">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                      <span className="mt-2 h-px w-4 shrink-0 bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <p className="tag mt-5">{exp.tags.join("  ·  ")}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
