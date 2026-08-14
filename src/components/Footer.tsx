import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="shell rule-top flex flex-col items-start justify-between gap-3 py-10 font-mono text-xs text-ink-faint sm:flex-row sm:items-center">
      <p>
        © {new Date().getFullYear()} {profile.name} — {profile.location}
      </p>
      <div className="flex items-center gap-6">
        <span>React · TypeScript · Tailwind</span>
        <a href="#top" className="transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
