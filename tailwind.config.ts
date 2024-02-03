import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "1": "32px",
      "2": "24px",
      "3": "18px",
      "strong-body": "17px",
      body: "15px",
      sub: "12.5px",
    },
    spacing: {
      256: "256px",
      200: "200px",
      128: "128px",
      110: "110px",
      96: "96px",
      86: "86px",
      72: "72px",
      64: "64px",
      56: "56px",
      48: "48px",
      36: "36px",
      32: "32px",
      30: "30px",
      28: "28px",
      24: "24px",
      18: "18px",
      16: "16px",
      12: "12px",
      8: "8px",
      6: "6px",
      4: "4px",
      0: "0px",
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
