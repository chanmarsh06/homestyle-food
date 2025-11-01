import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary-green)",
          green: "var(--color-primary-green)",
          accent: "var(--color-accent-green)",
          deep: "var(--color-deep-green)",
        },
        highlight: {
          cta: "var(--color-highlight-cta)",
          hover: "var(--color-highlight-hover)",
        },
        background: {
          DEFAULT: "var(--color-background)",
          secondary: "var(--color-secondary-background)",
          cream: "var(--color-cream-background)",
        },
        text: {
          primary: "var(--color-text-primary)",
          accent: "var(--color-text-accent)",
          muted: "var(--color-text-muted)",
        },
        border: {
          DEFAULT: "var(--color-border-divider)",
        },
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
      },
      borderRadius: {
        cozy: "var(--radius-cozy)",
        card: "var(--radius-card)",
      },
      boxShadow: {
        base: "var(--shadow-base)",
        hover: "var(--shadow-hover)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
