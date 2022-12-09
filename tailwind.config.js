/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Light theme colors
                "light-primary": "#fffffe",
                "light-secondary": "#2b2c34",
                "light-highlight": "#6246ea",
                "light-tertiary": "#d1d1e9",

                // Dark theme colors
                "dark-primary": "#16161a",
                "dark-secondary": "#fffffe",
                "dark-highlight": "#7f5af0",
                "dark-tertiary": "#94a1b2",
                "dark-highlight2": "#2cb67d",
            },
            fontFamily: {
                body: ["Barlow"],
            },
            keyframes: {
                ripple: {
                    "0%, 100%": { transform: "scale(0.8)" },
                    "50%": { transform: "scale(1.2)" },
                },
            },
            animation: {
                ripple: "ripple 10s infinite",
            },
        },
    },
    plugins: [],
};
