/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        paper: {
          DEFAULT: "var(--paper)",
          raised: "var(--paper-raised)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          muted: "var(--ink-muted)",
          faint: "var(--ink-faint)",
        },
        rule: "var(--rule)",
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
        },
      },
      maxWidth: {
        content: "64rem",
      },
      letterSpacing: {
        label: "0.14em",
      },
    },
  },
  plugins: [],
};
