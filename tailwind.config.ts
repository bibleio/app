import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "ibm-serif": ["var(--font-ibm-plex-serif)"],
      inter: ["var(--font-inter)"],
      quicksand: ["var(--font-quicksand)"],
      tinos: ["var(--font-tinos)"],
      "geist-mono": ["var(--font-geist-mono)"],
      "open-dyslexic": ["var(--font-open-dyslexic)"],
    },
    fontSize: {
      "1": "32px",
      "2": "24px",
      "3": "18px",
      "strong-body": "17px",
      body: "15px",
      sub: "12.5px",
    },
    borderRadius: {
      32: "32px",
      24: "24px",
      12: "12px",
      8: "8px",
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
    extend: {
      backgroundImage: {
        "bg-white": "linear-gradient(180deg,#E3E3E3,#BBCBCE)",
      },
      colors: {
        "fg-1": "rgba(180,180,180,0.35)",
        "stroke-1": "rgba(0,0,0,0.25)",
        accent: "#0085FF",
      },
      keyframes: {
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: { opacity: "0", transform: "translate(-50%, -48%)" },
          to: { opacity: "1", transform: "translate(-50%, -50%)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 200ms ease-out",
        contentShow: "contentShow 200ms ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
