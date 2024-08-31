import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      lora: ["var(--font-lora)"],
      inter: ["var(--font-inter)"],
      quicksand: ["var(--font-quicksand)"],
      tinos: ["var(--font-tinos)"],
      "geist-mono": ["var(--font-geist-mono)"],
      "open-dyslexic": ["var(--font-open-dyslexic)"],
    },
    fontSize: {
      h1: "50px",
      h2: "32px",
      h3: "25px",
      h4: "19px",
      body: "15px",
      sub: "12.5px",
    },
    borderRadius: {
      12: "12px",
      0: "0px",
      4: "4px",
      full: "999px",
    },
    spacing: {
      0: "0px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      48: "48px",
      64: "64px",
      72: "72px",
      80: "80px",
      96: "96px",
      128: "128px",
      192: "192px",
      256: "256px",
      512: "512px",
    },
    boxShadow: {
      popup: "0px 4px 49.6px rgba(0, 0, 0, 0.15)",
      "accent-component":
        "inset 0px 0px 5px rgba(0, 0, 0, 0.91),inset 0px 3px 4.7px rgba(255, 255, 255, 0.25),inset 0px -14px 8.3px rgba(255, 255, 255, 0.08)",
      component:
        "inset 0px 0px 5.6px rgba(0, 0, 0, 0.25),inset 0px -11px 6.3px rgba(255, 255, 255, 0.5),inset 0px 1px 6.3px rgba(0, 0, 0, 0.25)",
    },
    extend: {
      colors: {
        "light-bg": "rgba(204, 204, 204, 1)",
        "light-fg-1": "rgba(212, 212, 212, 1)",
        "light-fg-2": "rgba(221, 221, 221, 1)",
        "light-accent-navy": "#00507C",
      },
      keyframes: {
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "scale-out": {
          from: { opacity: "1", transform: "scale(1)" },
          to: { opacity: "0", transform: "scale(0.9)" },
        },
      },
      animation: {
        "scale-in": "scale-in 150ms ease-out",
        "scale-out": "scale-out 150ms ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-radix")()],
};
export default config;
