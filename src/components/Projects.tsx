import { ArrowUpRight, KeyRound } from "lucide-react";
import Section, { Reveal } from "./Section";
import { projects } from "../data/portfolio";

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

export default function Projects() {
  return (
    <Section
      id="work"
      index="02"
      label="Selected work"
      title="Systems built to run, not to demo."
      intro="Production AI and full-stack projects — the ones with users, uptime targets and deployment pipelines behind them."
    >
      <div className="border-t border-rule">
        {featured.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <div className="group border-b border-rule py-8 transition-colors hover:bg-accent-soft">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="grid gap-4 md:grid-cols-[7rem_1fr] md:gap-8">
                  <span className="label pt-2">{p.year}</span>
                  <div>
                    <h3 className="display flex items-start gap-2 text-3xl transition-colors group-hover:text-accent sm:text-4xl">
                      {p.title}
                      <ArrowUpRight
                        size={20}
                        className="mt-1 shrink-0 text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">{p.description}</p>
                    <p className="tag mt-4">{p.tags.join("  ·  ")}</p>
                  </div>
                </div>
              </a>

              {p.demoUrl && (
                <div className="mt-6 md:ml-[calc(7rem+2rem)]">
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link inline-flex items-center gap-1 text-sm font-medium"
                  >
                    Live demo <ArrowUpRight size={14} />
                  </a>

                  {p.demoCredentials && p.demoCredentials.length > 0 && (
                    <div className="mt-3 inline-block rounded-lg border border-rule bg-paper-raised px-4 py-3">
                      <p className="tag mb-2 flex items-center gap-1.5">
                        <KeyRound size={12} /> Demo logins (test data only)
                      </p>
                      <div className="space-y-1">
                        {p.demoCredentials.map((c) => (
                          <p key={c.role} className="font-mono text-xs text-ink-muted">
                            <span className="text-ink-faint">{c.role}:</span>{" "}
                            <span className="text-ink">{c.username}</span>
                            {" / "}
                            <span className="text-ink">{c.password}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="label mt-16">Also built</h3>
      </Reveal>

      <div className="mt-6 grid gap-px overflow-hidden rounded-lg bg-rule sm:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.04}>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col bg-paper p-6 transition-colors hover:bg-accent-soft"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="font-medium transition-colors group-hover:text-accent">{p.title}</h4>
                <span className="label shrink-0">{p.year}</span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{p.description}</p>
              <p className="tag mt-4">{p.tags.join("  ·  ")}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
