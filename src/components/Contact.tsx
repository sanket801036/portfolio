import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { profile } from "../data/portfolio";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: GithubIcon, label: "GitHub", value: "Sanket-Kolhe", href: profile.github },
  { icon: LinkedinIcon, label: "LinkedIn", value: "sanket-kolhe", href: profile.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-14 text-center relative overflow-hidden glow-border"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-violet/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-cyan/20 rounded-full blur-3xl" />

          <div className="relative">
            <span className="chip mb-4">Let's Connect</span>
            <h2 className="section-title">
              Have a project in mind? <br />
              <span className="gradient-text">Let's build it.</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-lg mx-auto">
              Open to freelance, full-time and consulting roles in AI + full-stack engineering.
            </p>

            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-pink text-white font-semibold shadow-glow hover:shadow-glow-cyan transition-shadow"
            >
              <Send size={16} /> Send me a message
            </motion.a>

            <div className="mt-12 grid sm:grid-cols-2 gap-4 text-left">
              {channels.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent-violet/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-violet/30 to-accent-cyan/30 flex items-center justify-center">
                    <c.icon size={18} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500">{c.label}</div>
                    <div className="text-sm text-slate-200 truncate">{c.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
              <MapPin size={14} /> Based in {profile.location}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
