import Section, { Reveal } from "./Section";
import { focusAreas, profile } from "../data/portfolio";

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title={
        <>
          Engineering at the seam between <em className="italic text-accent">AI</em> and the web.
        </>
      }
    >
      <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-ink-muted">{profile.summary}</p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-lg bg-rule sm:grid-cols-2 md:grid-cols-1">
          {focusAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.06}>
              <div className="h-full bg-paper p-6">
                <h3 className="font-mono text-xs uppercase tracking-label text-accent">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{area.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
