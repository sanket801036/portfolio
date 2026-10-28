import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Props = { images: string[]; title: string; compact?: boolean };

const src = (path: string) => `${import.meta.env.BASE_URL}${path}`;

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

  return (
    <>
      <div className={`grid gap-2 ${compact ? "grid-cols-4" : "grid-cols-2 sm:grid-cols-4"}`}>
        {images.map((img, i) => (
          <button
            key={img}
            type="button"
            onClick={() => setOpen(i)}
            className="group/shot overflow-hidden rounded-md border border-rule bg-paper-raised"
            aria-label={`Open ${title} screenshot ${i + 1}`}
          >
            <img
              src={src(img)}
              alt={`${title} screenshot ${i + 1}`}
              loading="lazy"
              className="aspect-video w-full object-cover object-top transition-transform duration-300 group-hover/shot:scale-105"
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshots`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setOpen(null)}
        >
          <img
            src={src(images[open])}
            alt={`${title} screenshot ${open + 1}`}
            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
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
                className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
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
                className="absolute right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                aria-label="Next screenshot"
              >
                <ChevronRight size={22} />
              </button>
              <p className="absolute bottom-4 text-sm text-white/70">
                {open + 1} / {images.length}
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
}
