/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0b0f19",
                surface: "#111827",
                surfaceHover: "#1f2937",
                primary: "#fcfcfc",
                secondary: "#9ca3af",
                accent: "#c4b5fd", // Soft purple accent
                accentGlow: "rgba(196, 181, 253, 0.15)",
                textPrimary: "#f3f4f6",
                textSecondary: "#9ca3af",
                border: "#374151",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif']
            },
            backgroundImage: {
                'creator-grid': "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
}

