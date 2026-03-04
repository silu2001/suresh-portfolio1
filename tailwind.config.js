/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Cool deep cyberpunk and synthwave tones
                background: "#0d0f1a",
                surface: "#1a1c29",
                primary: "#ff0055",
                secondary: "#00f0ff",
                accent: "#7000ff",
                textPrimary: "#f5f5f7",
                textSecondary: "#8b8c9c",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif']
            }
        },
    },
    plugins: [],
}

