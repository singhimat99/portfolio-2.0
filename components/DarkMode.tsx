import React, { useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../pages/_app";

type Props = {};
const DarkMode = (props: Props) => {
    const { isDark, setIsDark } = useTheme();
    const styles = {
        container: {
            width: "30px",
            aspectRatio: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "transparent",
        },
        icon: {
            width: "100%",
        },
    };
    function setDark() {
        //TODO
        document.documentElement.setAttribute("data-theme", "dark");
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDark(true);
    }

    function setLight() {
        //TODO
        document.documentElement.setAttribute("data-theme", "light");
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDark(false);
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const theme = localStorage.getItem("theme");
        if (mediaQuery.matches && theme === "dark") setDark();
    });

    function toggleTheme() {
        //TODO
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            setLight();
        } else {
            setDark();
        }
    }

    return (
        <div style={styles.container}>
            <button
                className="rounded-lg border-gray-500 border-2 p-2 hover:scale-110 transition-transform"
                onClick={toggleTheme}
            >
                {isDark ? (
                    <FiSun
                        size="20px"
                        color="white"
                        style={{ color: "#fffffe" }}
                    />
                ) : (
                    <FiMoon
                        size="20px"
                        color="black"
                        style={{ color: "#16161a" }}
                    />
                )}
            </button>
        </div>
    );
};

export default DarkMode;
