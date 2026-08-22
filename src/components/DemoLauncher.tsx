import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * The "Live demo" link, with the cold start made visible.
 *
 * The ERP runs on Render's free tier, which stops the instance after fifteen
 * minutes of quiet. The first click after that spends up to a minute waiting
 * on a boot, and what the visitor gets meanwhile is the host's own holding
 * page - no name, no context, no sign it belongs to anything they clicked.
 * An interviewer reasonably reads that as a broken link and leaves.
 *
 * So the click is intercepted: we poll the app's own /healthz until it
 * answers, showing our own progress while it wakes, and only then hand the
 * browser over. Same wait, but it looks like the demo starting rather than
 * something having gone wrong.
 */

/** Roughly how long a cold boot takes. Only shapes the bar, nothing depends
 *  on it being right. */
const COLD_START_MS = 55_000;

/** Past this we stop pretending and offer the plain link. */
const GIVE_UP_MS = 120_000;

const POLL_INTERVAL_MS = 1_500;

/** If it answers within this, it was already awake - skip the overlay rather
 *  than flashing one up for a fifth of a second. */
const NO_OVERLAY_MS = 400;

type Props = {
  /** Base URL of the deployed app, no trailing slash needed. */
  url: string;
  /** Path to land on once it is up. */
  path?: string;
  children?: ReactNode;
};

export default function DemoLauncher({
  url,
  path = "/accounts/login/",
  children,
}: Props) {
  const base = url.replace(/\/+$/, "");
  const target = base + path;

  const [waking, setWaking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [gaveUp, setGaveUp] = useState(false);

  const abortRef = useRef<AbortController | null>(null);
  const cancelledRef = useRef(false);

  const stop = useCallback(() => {
    cancelledRef.current = true;
    abortRef.current?.abort();
    setWaking(false);
    setProgress(0);
    setGaveUp(false);
  }, []);

  useEffect(() => () => abortRef.current?.abort(), []);

  // Esc gets out, like any other overlay.
  useEffect(() => {
    if (!waking) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") stop();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [waking, stop]);

  // The page behind should not scroll while the overlay is up.
  useEffect(() => {
    if (!waking) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [waking]);

  const launch = useCallback(
    async (event: React.MouseEvent<HTMLAnchorElement>) => {
      // Ctrl/cmd-click, middle click and "open in new tab" must keep working;
      // those people know what they are doing.
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      event.preventDefault();
      cancelledRef.current = false;

      const started = Date.now();
      let shown = false;

      const controller = new AbortController();
      abortRef.current = controller;

      /* The bar is a deliberate estimate, not a measurement: nothing reports
         how far along a boot is. It eases towards 92% over roughly the time a
         cold start takes and stops there, so it never sits at 100 while still
         waiting - the one thing a progress bar must not do. The jump to 100
         is the real event. */
      const tick = () => {
        if (cancelledRef.current) return;
        const elapsed = Date.now() - started;
        const eased = 1 - Math.exp(-elapsed / (COLD_START_MS / 2.5));
        setProgress(Math.min(92, Math.round(eased * 92)));
        if (!shown && elapsed > NO_OVERLAY_MS) {
          shown = true;
          setWaking(true);
        }
        if (elapsed < GIVE_UP_MS) {
          timer = window.setTimeout(tick, 120);
        }
      };
      let timer = window.setTimeout(tick, 0);

      const awake = async () => {
        try {
          const res = await fetch(base + "/healthz", {
            signal: controller.signal,
            cache: "no-store",
          });
          return res.ok;
        } catch {
          // A sleeping instance refuses the connection outright; that is the
          // normal case here, not an error worth surfacing.
          return false;
        }
      };

      while (!cancelledRef.current && Date.now() - started < GIVE_UP_MS) {
        if (await awake()) {
          window.clearTimeout(timer);
          if (cancelledRef.current) return;
          setProgress(100);
          if (!shown) {
            // Already awake. Nothing was ever drawn, so there is no bar to
            // let land - go straight there.
            window.location.href = target;
            return;
          }
          // Let the bar reach the end before the page changes under it.
          window.setTimeout(() => {
            window.location.href = target;
          }, 350);
          return;
        }
        await new Promise((r) => window.setTimeout(r, POLL_INTERVAL_MS));
      }

      window.clearTimeout(timer);
      if (!cancelledRef.current) {
        setWaking(true);
        setGaveUp(true);
      }
    },
    [base, target],
  );

  return (
    <>
      <a
        href={target}
        onClick={launch}
        className="link inline-flex items-center gap-1 text-sm font-medium"
      >
        {children ?? "Live demo"} <ArrowUpRight size={14} />
      </a>

      {waking && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Starting the live demo"
          className="fixed inset-0 z-50 flex items-center justify-center bg-paper/95 px-6 backdrop-blur-sm"
        >
          <div className="w-full max-w-sm text-center">
            <p className="label">College ERP</p>
            <h2 className="display mt-3 text-3xl">
              {gaveUp ? "Still starting" : "Waking the demo"}
            </h2>

            <p className="mt-3 text-sm text-ink-muted">
              {gaveUp
                ? "The free instance is taking longer than usual. You can wait, or open it directly and let it finish loading there."
                : "It sleeps when nobody is using it, so the first visit has to start it up. About a minute."}
            </p>

            <div
              className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-rule"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Startup progress"
            >
              <div
                className="h-full rounded-full bg-accent transition-[width] duration-200 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p
              className="mt-3 font-mono text-xs text-ink-faint"
              aria-live="polite"
            >
              {progress}%
            </p>

            <div className="mt-8 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={stop}
                className="text-sm text-ink-muted underline decoration-rule underline-offset-4 transition-colors hover:text-ink"
              >
                Cancel
              </button>
              {gaveUp && (
                <a
                  href={target}
                  className="link text-sm font-medium"
                  onClick={stop}
                >
                  Open anyway
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
