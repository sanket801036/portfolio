import { ArrowUpRight } from "lucide-react";
import Section, { Reveal } from "./Section";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./SocialIcons";
import { profile } from "../data/portfolio";

const whatsappHref = `https://wa.me/${profile.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi Sanket, I found you through your portfolio."
)}`;

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(
      "Project inquiry — via your portfolio"
    )}`,
    icon: null,
  },
  { label: "WhatsApp", value: profile.phone, href: whatsappHref, icon: WhatsAppIcon },
  { label: "GitHub", value: "sanket801036", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", value: "sanket-kolhe", href: profile.linkedin, icon: LinkedinIcon },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      index="07"
      label="Contact"
      title={
        <>
          Have something to build? <em className="italic text-accent">Let's talk.</em>
        </>
      }
      intro="Open to full-time, contract and consulting work in AI and full-stack engineering."
    >
      <div className="border-t border-rule">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.05}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 border-b border-rule py-5 transition-colors hover:bg-accent-soft"
            >
              <span className="flex items-center gap-3">
                {c.icon ? (
                  <c.icon size={15} className="text-ink-faint transition-colors group-hover:text-accent" />
                ) : (
                  <span className="w-[15px]" />
                )}
                <span className="label w-24">{c.label}</span>
                <span className="text-ink-muted transition-colors group-hover:text-accent">
                  {c.value}
                </span>
              </span>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
