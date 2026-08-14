import Section, { Reveal } from "./Section";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <Section
      id="stack"
      index="05"
      label="Stack"
      title="What I actually work in."
      intro="Everything listed here is something I have used on shipped work — not a wishlist."
    >
      <dl className="border-t border-rule">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.04}>
            <div className="grid gap-2 border-b border-rule py-5 md:grid-cols-[12rem_1fr] md:gap-8">
              <dt className="label pt-1">{group.label}</dt>
              <dd className="flex flex-wrap gap-x-4 gap-y-2">
                {group.skills.map((s) => (
                  <span key={s} className="text-sm text-ink-muted">
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
