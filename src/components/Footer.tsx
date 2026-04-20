import { Heart } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div>
          © {new Date().getFullYear()} {profile.name}. Crafted with{" "}
          <Heart size={12} className="inline text-accent-pink fill-accent-pink" /> using React + Tailwind.
        </div>
        <div className="flex items-center gap-5">
          <a href="#home" className="hover:text-white transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
