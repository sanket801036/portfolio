import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Section";
import { now } from "../data/portfolio";

export default function Now() {
  return (
    <section className="shell pb-4">
      <Reveal>
        <div className="rule-top grid gap-4 py-6 md:grid-cols-[12rem_1fr] md:gap-8">
          <div className="flex items-baseline gap-3">
            <span className="label text-accent">Now</span>
            <span className="label">{now.updated}</span>
          </div>
          <ul className="space-y-2">
            {now.items.map((item) => (
              <li key={item.text} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                <span className="mt-2 h-px w-4 shrink-0 bg-accent" />
                <span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link inline-flex items-center gap-1"
                    >
                      {item.text} <ArrowUpRight size={12} />
                    </a>
                  ) : (
                    item.text
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
