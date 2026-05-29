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
        ink: "#05070d",
        graphite: "#0b1020",
        mist: "#a7b3c8",
        cyanflare: "#4be4ff",
        gold: "#f6c86b",
        emeraldflare: "#46f2a8"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 55px rgba(75, 228, 255, 0.18)",
        gold: "0 0 45px rgba(246, 200, 107, 0.14)"
      },
      backgroundImage: {
        "radial-noise":
          "radial-gradient(circle at 20% 20%, rgba(75,228,255,.16), transparent 32%), radial-gradient(circle at 82% 12%, rgba(246,200,107,.14), transparent 28%), radial-gradient(circle at 52% 86%, rgba(70,242,168,.12), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
