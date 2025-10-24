/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gaming-gradient": "linear-gradient(45deg, #ff0000, #ff6600, #ffcc00, #00ff00, #0066ff, #6600ff)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 2s infinite",
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "rage-glow": "rage-glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "rage-glow": {
          "0%": { boxShadow: "0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000" },
          "100%": { boxShadow: "0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000" },
        },
      },
      fontFamily: {
        gaming: ["Orbitron", "monospace"],
      },
    },
  },
  plugins: [],
}
