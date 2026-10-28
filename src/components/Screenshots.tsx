import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Screenshot } from "../data/portfolio";

type Props = { images: Screenshot[]; title: string; compact?: boolean };

const url = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export default function Screenshots({ images, title, compact = false }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft")
        setOpen((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  const shot = open === null ? null : images[open];

  return (
    <>
      <div className={`grid gap-2 ${compact ? "grid-cols-4" : "grid-cols-2 sm:grid-cols-4"}`}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpen(i)}
            title={img.caption}
            className="group/shot overflow-hidden rounded-md border border-rule bg-paper-raised"
            aria-label={`Open screenshot ${i + 1}: ${img.caption}`}
          >
            <img
              src={url(img.src)}
              alt={img.caption}
              loading="lazy"
              className="aspect-video w-full object-cover object-top transition-transform duration-300 group-hover/shot:scale-105"
            />
          </button>
        ))}
      </div>
      <p className="label mt-2">Click a screenshot for details</p>

      {shot && open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshots`}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/90 p-4"
          onClick={() => setOpen(null)}
        >
          <img
            src={url(shot.src)}
            alt={shot.caption}
            className="max-h-[75vh] max-w-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div
            className="max-w-3xl rounded-lg bg-white/10 px-4 py-3 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs uppercase tracking-wider text-white/60">
              {title} · {open + 1} / {images.length}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-white">{shot.caption}</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((open - 1 + images.length) % images.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((open + 1) % images.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                aria-label="Next screenshot"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
