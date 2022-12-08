import React, { useEffect, useContext } from "react";
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
        if (mediaQuery.matches) setDark();
    }, []);

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
        <div
            style={styles.container}
            onClick={toggleTheme}
            className="dark-mode"
        >
            {isDark ? (
                <FiSun size="50px" color="white" style={{ color: "#fffffe" }} />
            ) : (
                <FiMoon
                    size="50px"
                    color="black"
                    style={{ color: "#16161a" }}
                />
            )}
        </div>
    );
};

export default DarkMode;
