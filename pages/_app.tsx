import "../styles/globals.css";
import { createContext, useContext, useState } from "react";
import type { AppProps } from "next/app";
import DarkMode from "../components/DarkMode";
import Header from "../components/Header";
interface ThemeProps {
    isDark?: any;
    setIsDark?: any;
}
const ThemeContext = createContext<ThemeProps>({});

export function useTheme() {
    return useContext(ThemeContext);
}

export default function App({ Component, pageProps }: AppProps) {
    const [isDark, setIsDark] = useState(false);
    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <Header />
            <DarkMode />
            <Component {...pageProps} />
        </ThemeContext.Provider>
    );
}
