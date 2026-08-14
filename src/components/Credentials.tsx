import Section, { Reveal } from "./Section";
import { certifications, education } from "../data/portfolio";

export default function Credentials() {
  return (
    <Section id="credentials" index="06" label="Credentials" title="Education & training.">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal>
            <h3 className="label border-b border-rule pb-3">Education</h3>
          </Reveal>
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.05}>
              <div className="border-b border-rule py-6">
                <p className="label">{e.year}</p>
                <h4 className="mt-2 font-medium">{e.degree}</h4>
                <p className="mt-1 text-sm text-ink-muted">{e.school}</p>
                <p className="tag mt-2">{e.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div>
          <Reveal>
            <h3 className="label border-b border-rule pb-3">Certifications</h3>
          </Reveal>
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="border-b border-rule py-6">
                <p className="label">{c.year}</p>
                <h4 className="mt-2 font-medium">{c.title}</h4>
                <p className="mt-1 text-sm text-ink-muted">{c.issuer}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-faint">{c.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
