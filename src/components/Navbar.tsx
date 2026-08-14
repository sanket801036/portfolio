import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#open-source", label: "Open source" },
  { href: "#stack", label: "Stack" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "border-b border-rule bg-paper/85 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <nav className="shell flex items-center justify-between py-4">
        <a href="#top" className="font-mono text-sm font-medium tracking-label">
          SK<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ink-muted transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-rule px-4 py-2 text-sm text-ink-muted transition-colors hover:border-accent hover:text-accent sm:block"
          >
            LinkedIn
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-rule p-2 text-ink-muted lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-rule bg-paper lg:hidden"
          >
            <ul className="shell flex flex-col py-2">
              {links.map((l) => (
                <li key={l.href} className="border-b border-rule/60 last:border-0">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-ink-muted transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
