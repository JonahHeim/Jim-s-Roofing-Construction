import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-soft": "var(--background-soft)",
        "background-tint": "var(--background-tint)",
        foreground: "var(--foreground)",
        muted: "var(--foreground-soft)",
        surface: "var(--surface)",
        "surface-strong": "var(--surface-strong)",
        "surface-dark": "var(--surface-dark)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        navy: "var(--brand-primary)",
        slate: "var(--brand-secondary)",
        gold: "var(--accent-primary)",
        "gold-soft": "var(--accent-soft)",
        sky: "var(--accent-sky)",
        success: "var(--color-success)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"]
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        medium: "var(--shadow-medium)",
        strong: "var(--shadow-strong)"
      },
      borderRadius: {
        pill: "var(--radius-pill)",
        input: "var(--radius-input)",
        card: "var(--radius-card)",
        panel: "var(--radius-panel)",
        hero: "var(--radius-hero)"
      },
      maxWidth: {
        shell: "var(--container-max)",
        reading: "var(--container-reading)"
      },
      transitionTimingFunction: {
        premium: "var(--ease-premium)"
      }
    }
  },
  plugins: []
};

export default config;
