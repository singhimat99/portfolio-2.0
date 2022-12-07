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
                "light-primary": "#222222",
                "light-secondary": "#eeeeee",
                // Dark theme colors
                "dark-primary": "#ffffff",
                "dark-secondary": "#333333",
            },
        },
    },
    plugins: [],
};
