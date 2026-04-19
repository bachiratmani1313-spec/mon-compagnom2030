import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        arabic: ["var(--font-arabic)", "serif"],
      },
      colors: {
        indigo: {
          electric: "#5B5BD6",
          glow: "rgba(91,91,214,0.35)",
          soft: "rgba(91,91,214,0.15)",
        },
        emerald: {
          neon: "#10C98F",
          glow: "rgba(16,201,143,0.3)",
          soft: "rgba(16,201,143,0.12)",
        },
        glass: {
          bg: "rgba(255,255,255,0.06)",
          card: "rgba(255,255,255,0.10)",
          border: "rgba(255,255,255,0.18)",
          "border-hover": "rgba(255,255,255,0.32)",
        },
        deep: {
          bg: "#0A0B1A",
          surface: "#0E1024",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backdropBlur: {
        xs: "4px",
      },
      animation: {
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "glow-ring": "glowRing 3s ease-in-out infinite",
      },
      keyframes: {
        pulseSoft: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.7)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glowRing: {
          "0%,100%": { boxShadow: "0 0 20px rgba(91,91,214,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(91,91,214,0.6), 0 0 80px rgba(16,201,143,0.2)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
